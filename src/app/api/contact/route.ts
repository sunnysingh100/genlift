import {NextRequest, NextResponse} from "next/server";
import {Resend} from "resend";
import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

// Distributed rate limiter backed by Upstash Redis.
// Works correctly across serverless instances and survives cold starts.
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(), // reads UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
  limiter: Ratelimit.slidingWindow(3, "15 m"), // 3 requests per 15 minutes per key
  analytics: true,
});

// Allowed origins for CSRF protection
const ALLOWED_ORIGINS = [
  "https://genlift.online",
  "https://www.genlift.online",
];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Strip control characters that could be used for email header injection. */
function cleanForHeader(str: string): string {
  return str.replace(/[\r\n\t]/g, "").trim();
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;
const VALID_INDUSTRIES = [
  "Real Estate",
  "Healthcare",
  "E-Commerce",
  "Restaurant",
  "Legal",
  "Insurance",
  "Automotive",
  "Education",
  "Other",
];

export async function POST(req: NextRequest) {
  try {
    // CSRF: Validate request origin in production
    const origin = req.headers.get("origin");
    const isLocalDev = process.env.NODE_ENV === "development";
    if (!isLocalDev && origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: "Forbidden." }, { status: 403 });
    }

    const body = await req.json();
    const {name, email, phone, industry, message} = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Invalid name." }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || !PHONE_REGEX.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }
    if (!industry || !VALID_INDUSTRIES.includes(industry)) {
      return NextResponse.json({ error: "Invalid industry." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.length > 2000) {
      return NextResponse.json({ error: "Message too long (max 2000 chars)." }, { status: 400 });
    }

    // Rate limiting using client IP address.
    // On Vercel, x-forwarded-for is securely populated by the edge infrastructure
    // and cannot be spoofed — Vercel overwrites any client-supplied value.
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";
    const { success, remaining } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "X-RateLimit-Remaining": String(remaining) },
        },
      );
    }

    // Sanitize input
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeIndustry = escapeHtml(industry);
    const safeMessage = escapeHtml(message);

    // Send notification email to you
    const {error} = await resend.emails.send({
      from: "Genlift Contact Form <hello@genlift.online>",
      to: process.env.CONTACT_EMAIL ?? "sunny@genlift.online",
      subject: `[New Lead] ${cleanForHeader(safeName)} - ${cleanForHeader(safeIndustry)}`,
      replyTo: email,  // Use raw validated email (not HTML-escaped, which would break '&' in addresses)
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1c; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
          <div style="background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 32px 24px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Someone wants to work with Genlift!</p>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">
                  <a href="mailto:${safeEmail}" style="color: #06b6d4; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">${safePhone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Industry</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">
                  <span style="background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 600;">${safeIndustry}</span>
                </td>
              </tr>
              ${
                safeMessage
                  ? `
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #f1f5f9; font-size: 15px; line-height: 1.6;">${safeMessage}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>
          <div style="padding: 16px 24px; background: #0d1321; text-align: center;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">Sent from genlift.online contact form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {error: "Failed to send message. Please try again."},
        {status: 500},
      );
    }

    // Fire-and-forget: send confirmation email to the lead without blocking the response.
    // Use waitUntil to ensure the promise completes even after the response is sent.
    const confirmPromise = resend.emails
      .send({
        from: "Genlift <hello@genlift.online>",
        to: [email], // Already validated by EMAIL_REGEX above
        subject: "We got your message! - Genlift",
        html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1c; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
          <div style="background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 32px 24px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thanks for reaching out, ${safeName}!</h1>
          </div>
          <div style="padding: 32px 24px; color: #f1f5f9; font-size: 15px; line-height: 1.8;">
            <p>We've received your inquiry and our team is excited to learn more about your business.</p>
            <p>Here's what happens next:</p>
            <ol style="color: #94a3b8; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Our team reviews your requirements</li>
              <li style="margin-bottom: 8px;">We'll reach out within <strong style="color: #06b6d4;">24 hours</strong> to schedule a free strategy call</li>
              <li style="margin-bottom: 8px;">We'll show you a custom demo tailored to your industry</li>
            </ol>
            <p>In the meantime, feel free to reply to this email if you have any additional questions.</p>
            <p style="margin-top: 24px;">Best regards,<br /><strong style="color: #06b6d4;">The Genlift Team</strong></p>
          </div>
          <div style="padding: 16px 24px; background: #0d1321; text-align: center;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">genlift.online - AI Voice Agents for Your Business</p>
          </div>
        </div>
      `,
      })
      .catch((e) => console.error("Confirmation email error:", e));

    // waitUntil extends serverless execution past the response, ensuring the email send completes.
    // Available in Next.js 15+ on Vercel. Falls back to best-effort on other platforms.
    if ("waitUntil" in req) {
      (req as unknown as { waitUntil: (p: Promise<unknown>) => void }).waitUntil(confirmPromise);
    }

    return NextResponse.json(
      {success: true, message: "Message sent successfully!"},
      {status: 200},
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {error: "Something went wrong. Please try again later."},
      {status: 500},
    );
  }
}
