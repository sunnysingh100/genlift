import Link from "next/link";
import GenliftLogo from "./GenliftLogo";

const footerLinks = {
  Services: [
    { label: "Voice Agent Development", href: "#services" },
    { label: "Tool Integration", href: "#services" },
    { label: "Analytics & Reporting", href: "#services" },
    { label: "Ongoing Support", href: "#services" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Industries", href: "#industries" },
    { label: "Why Genlift", href: "#why-genlift" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <GenliftLogo size="sm" />
            </div>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed mb-6">
              We build and deploy custom AI voice agents for small and
              medium-sized businesses - helping you automate calls, capture
              leads, and scale effortlessly.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/sunnysingh123/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-border-accent transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* X/Twitter */}
              <a href="https://x.com/iamsunnysingh11" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-border-accent transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Email */}
              <Link href="mailto:sunny@genlift.online" aria-label="Email" className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-border-accent transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">&copy; 2026 Genlift. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">Privacy Policy</Link>
            <Link href="mailto:sunny@genlift.online" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">sunny@genlift.online</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
