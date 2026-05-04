import {NextRequest, NextResponse} from "next/server";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {name, email, phone, industry, message} = body;

    // Basic validation
    if (!name || !email || !phone || !industry || !message) {
      return NextResponse.json(
        {
          error:
            "All fields (Name, Email, Phone, Industry, and Message) are required.",
        },
        {status: 400},
      );
    }

    // Send notification email to you
    const {error} = await resend.emails.send({
      from: "Genlift Contact Form <hello@genlift.online>",
      to: process.env.CONTACT_EMAIL ?? "sunny@genlift.online",
      subject: `🚀 New Lead: ${name} — ${industry}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1c; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
          <div style="background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 32px 24px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Someone wants to work with Genlift ✨</p>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Industry</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">
                  <span style="background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 600;">${industry}</span>
                </td>
              </tr>
              ${
                message
                  ? `
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #f1f5f9; font-size: 15px; line-height: 1.6;">${message}</td>
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

    // Send confirmation email to the lead
    await resend.emails.send({
      from: "Genlift <hello@genlift.online>",
      to: [email],
      subject: "We got your message! — Genlift",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1c; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
          <div style="background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 32px 24px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thanks for reaching out, ${name}! 🎉</h1>
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
            <p style="color: #64748b; font-size: 12px; margin: 0;">genlift.online — AI Voice Agents for Your Business</p>
          </div>
        </div>
      `,
    });

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
