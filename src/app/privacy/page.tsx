import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Genlift",
  description:
    "Learn how Genlift collects, uses, and protects your personal information. Read our full privacy policy.",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy - Genlift",
    description:
      "Learn how Genlift collects, uses, and protects your personal information.",
    url: "https://genlift.online/privacy",
    siteName: "Genlift",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Genlift - Custom AI Voice Agents for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Genlift",
    description:
      "Learn how Genlift collects, uses, and protects your personal information.",
    images: ["/og-image.png"],
  },
};

const sections = [
  {
    id: "information-we-collect",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information You Provide",
        text: "When you fill out our contact form, book a strategy call, or interact with us, we may collect your full name, email address, phone number, business industry, and any additional information you choose to share in your message.",
      },
      {
        subtitle: "Information Collected Automatically",
        text: "When you visit our website, we automatically collect certain information including your IP address, browser type, device information, operating system, referring URLs, pages visited, time spent on pages, and other browsing behavior data.",
      },
      {
        subtitle: "Cookies and Tracking Technologies",
        text: "We use cookies, pixel tags (including the Meta Pixel), and similar tracking technologies to understand how visitors interact with our website, measure the effectiveness of our advertising campaigns, and improve our services.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your personal information to respond to your inquiries, schedule strategy calls, provide custom AI voice agent solutions, and communicate with you about our services.",
      },
      {
        subtitle: "Advertising and Analytics",
        text: "We use Meta (Facebook/Instagram) Pixel and similar technologies to measure the effectiveness of our advertising campaigns, create custom audiences for targeted advertising, retarget visitors with relevant ads on Meta platforms, and analyze website traffic and user behavior to improve our services.",
      },
      {
        subtitle: "Business Operations",
        text: "We use your information to improve our website and services, send relevant updates and marketing communications (with your consent), comply with legal obligations, and protect against fraudulent or unauthorized activity.",
      },
    ],
  },
  {
    id: "meta-ads",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Meta (Facebook) Advertising",
    content: [
      {
        subtitle: "Meta Pixel",
        text: "Our website uses the Meta Pixel, a piece of code that allows us to track conversions from Facebook and Instagram ads, build targeted audiences for future ads, and remarket to people who have already taken some kind of action on our website. The Meta Pixel collects data such as HTTP headers, pixel-specific data, button click data, optional values, and form field names.",
      },
      {
        subtitle: "Custom Audiences",
        text: "We may use your information to create Custom Audiences on Meta platforms for advertising purposes. This means you may see our ads on Facebook, Instagram, or other Meta platforms based on your interaction with our website.",
      },
      {
        subtitle: "Opting Out of Meta Ads",
        text: "You can opt out of seeing personalized ads from Meta by visiting your Facebook Ad Preferences at facebook.com/adpreferences. You can also use the Digital Advertising Alliance's opt-out tool at optout.aboutads.info, or adjust the settings on your mobile device to limit ad tracking.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: "Information Sharing and Disclosure",
    content: [
      {
        subtitle: "Third-Party Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These include Meta Platforms (for advertising), email service providers (for communication), analytics platforms (for website improvement), and CRM tools (for managing customer relationships).",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency), to protect our rights, privacy, safety, or property, or to enforce our terms and conditions.",
      },
      {
        subtitle: "No Sale of Personal Data",
        text: "We do not sell, rent, or trade your personal information to any third parties for their marketing purposes.",
      },
    ],
  },
  {
    id: "data-security",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption for data in transit, secure hosting infrastructure, access controls and authentication, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Contact form submissions are retained for up to 24 months unless you request earlier deletion.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Your Rights",
    content: [
      {
        subtitle: "Access and Control",
        text: "You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict certain processing of your data, request data portability, and withdraw consent at any time (where processing is based on consent).",
      },
      {
        subtitle: "How to Exercise Your Rights",
        text: "To exercise any of these rights, please contact us at sunny@genlift.online. We will respond to your request within 30 days. We may need to verify your identity before processing your request.",
      },
    ],
  },
  {
    id: "third-party-links",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Third-Party Links",
    content: [
      {
        subtitle: "External Websites",
        text: "Our website may contain links to third-party websites such as Cal.com (for booking calls), LinkedIn, X (Twitter), and other external services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party website you visit.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Children's Privacy",
    content: [
      {
        subtitle: "Age Restriction",
        text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal data from a child under 18, we will take steps to delete that information as quickly as possible.",
      },
    ],
  },
  {
    id: "changes",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />
      </svg>
    ),
    title: "Changes to This Policy",
    content: [
      {
        subtitle: "Policy Updates",
        text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated \"Last Updated\" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our website after any changes constitutes your acceptance of the updated policy.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-animated" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-blue rounded-full opacity-[0.04] blur-[120px] animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-cyan rounded-full opacity-[0.05] blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-[rgba(59,130,246,0.06)] mb-8 animate-fade-in-up">
              <svg className="w-4 h-4 text-accent-cyan" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm text-text-secondary">Your Privacy Matters</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up"
              style={{ fontFamily: "var(--font-heading)", animationDelay: "0.1s" }}
            >
              Privacy <span className="gradient-text">Policy</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              At Genlift, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal information.
            </p>

            <div
              className="mt-8 inline-flex items-center gap-2 text-sm text-text-muted animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Last Updated: May 31, 2026</span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="relative py-12 border-y border-border-subtle bg-bg-secondary">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-cyan mb-6">Table of Contents</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border-subtle bg-bg-card hover:border-border-accent hover:bg-bg-card-hover transition-all duration-300 group"
                >
                  <span className="text-xs font-bold tracking-widest text-accent-cyan opacity-60 group-hover:opacity-100 transition-opacity">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="relative py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="glass-card p-8 sm:p-10 scroll-mt-24"
                >
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest text-accent-cyan block mb-1">
                        SECTION {String(sectionIndex + 1).padStart(2, "0")}
                      </span>
                      <h2
                        className="text-2xl sm:text-3xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-6 pl-0 sm:pl-16">
                    {section.content.map((item) => (
                      <div key={item.subtitle}>
                        <h3
                          className="text-lg font-bold mb-2 text-text-primary"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.subtitle}
                        </h3>
                        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact Section */}
              <div className="glass-card p-8 sm:p-10" id="contact-privacy">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-accent-cyan block mb-1">
                      SECTION 10
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Contact Us
                    </h2>
                  </div>
                </div>

                <div className="sm:pl-16">
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-6">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don&apos;t hesitate to contact us.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-border-subtle bg-bg-primary">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider mb-0.5">Email</p>
                        <a href="mailto:sunny@genlift.online" className="text-sm text-text-primary hover:text-accent-cyan transition-colors">
                          sunny@genlift.online
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-border-subtle bg-bg-primary">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider mb-0.5">Website</p>
                        <a href="https://www.genlift.online" className="text-sm text-text-primary hover:text-accent-cyan transition-colors">
                          www.genlift.online
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-16 border-t border-border-subtle bg-bg-secondary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Have Questions About Your <span className="gradient-text">Privacy</span>?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              We&apos;re here to help. Reach out to us and we&apos;ll be happy to address any concerns about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:sunny@genlift.online" className="btn-primary">
                <span>Contact Us</span>
              </a>
              <Link href="/" className="btn-ghost">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
