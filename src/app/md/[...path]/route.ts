import { createDualmarkRouteHandler } from "@dualmark/nextjs";

const handler = createDualmarkRouteHandler({
  siteUrl: "https://genlift.online",
  staticPages: [
    {
      pattern: "/",
      render: () => `# Genlift — Custom AI Voice Agents for Your Business

> Genlift builds and deploys custom AI voice agents for small and medium-sized businesses. Automate calls, capture leads 24/7, and delight customers with human-like voice AI.

**Website:** [https://genlift.online](https://genlift.online)
**Book a Strategy Call:** [https://cal.com/sunny-singh/quick-chat](https://cal.com/sunny-singh/quick-chat)

---

## What We Do

We build custom AI voice agents that handle calls, qualify leads, and book appointments 24/7 with human-like conversations — so you never miss a customer while you sleep.

### Key Stats

- **50+** Voice Agents Deployed
- **24/7** Availability
- **<1s** Response Time
- **10+** Industries Served

---

## Our Services

### Custom Voice Agent Development
Tailor-made AI voice agents designed for your exact business needs — from script to personality to domain knowledge.

### Tool & CRM Integration
Seamlessly connect your voice agent to HubSpot, Salesforce, Calendly, Google Sheets, or any tool your business already uses.

### Inbound & Outbound Calls
From answering customer queries to making follow-up calls — we configure agents that handle both directions with equal finesse.

### Analytics & Reporting
Get detailed dashboards on call volumes, conversion rates, sentiment analysis, and key conversation insights to drive growth.

### Multi-Language Support
Serve customers in their preferred language. Our agents can communicate fluently in English, Hindi, Spanish, and more.

### Ongoing Support & Optimization
We don't just build and leave. Continuous monitoring, A/B testing prompts, and regular updates ensure your agent keeps improving.

---

## How It Works

### Step 01: Discovery
We deep-dive into your business — your workflows, customer pain points, and goals. We understand what your voice agent needs to do before writing a single line of code.

### Step 02: Build & Integrate
We design your custom voice agent with the perfect personality, knowledge base, and tool integrations — connecting it to your CRM, calendar, or any system you use.

### Step 03: Deploy & Optimize
We launch your agent on your phone line, website, or app — then continuously monitor, optimize, and improve its performance based on real call data.

---

## Industries We Serve

No matter your industry — we customize voice agents that speak your language and understand your customers.

- **Real Estate** — Qualify leads, schedule property viewings, and follow up with buyers automatically.
- **Healthcare** — Handle appointment bookings, prescription reminders, and patient follow-ups.
- **E-Commerce** — Manage order inquiries, track shipments, and handle return requests effortlessly.
- **Restaurants** — Take reservations, process orders, and handle delivery inquiries over the phone.
- **Legal Services** — Screen potential clients, schedule consultations, and handle intake calls.
- **Insurance** — Qualify prospects, process claims inquiries, and manage policy renewals.
- **Automotive** — Book test drives, handle service appointments, and manage recall notifications.
- **Education** — Answer enrollment questions, schedule campus tours, and support student services.

---

## Why Businesses Choose Genlift

We're not just another AI vendor. We're your dedicated voice AI partner — building agents that truly understand your business and deliver measurable results.

- **Custom-Built, Not Cookie-Cutter** — Every agent is designed from scratch for your specific business — not a generic template.
- **Deep Tool Integration** — We connect your voice agent to your CRM, calendar, database, and any API you use.
- **Human-Like Conversations** — Our agents sound natural, handle interruptions, and adapt tone to context.
- **Dedicated Partnership** — A dedicated team who knows your business inside-out — not a support ticket queue.
- **Transparent Pricing** — No hidden fees. You know exactly what you pay for — and ROI speaks for itself.
- **Proven Results** — Fewer missed calls, higher conversion rates, and more time for what matters.

---

## What Our Clients Say

### Rahul Sharma — CEO, QuickServe Restaurants (Restaurant)
> "Genlift's voice agent handles 80% of our reservation calls now. Our staff can focus on the customers in-house while the AI handles the phones flawlessly."

### Priya Mehta — Founder, HomeFinder Realty (Real Estate)
> "We were missing leads after hours. Now our Genlift agent qualifies prospects 24/7 and books viewings directly into our calendar. Game changer."

### David Chen — Operations Manager, AutoCare Plus (Automotive)
> "The integration with our booking system was seamless. Customers love the instant response and we've seen a 40% reduction in missed appointments."

---

## Get Started

Ready to automate your customer calls? Tell us about your business and we'll show you exactly how a custom voice agent can save you time, capture more leads, and delight your customers.

- Free strategy consultation
- Custom demo for your business
- No commitment required

**Book a Free Strategy Call:** [https://cal.com/sunny-singh/quick-chat](https://cal.com/sunny-singh/quick-chat)
**Contact us:** [https://genlift.online/#contact](https://genlift.online/#contact)
`,
    },
  ],
});

export const dynamic = "force-dynamic";
export const GET = handler.GET;
export const generateStaticParams = handler.generateStaticParams;
