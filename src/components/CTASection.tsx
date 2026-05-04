"use client";

import { useState } from "react";

const industryOptions = [
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

export default function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", industry: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-accent-blue to-accent-cyan opacity-[0.04] blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent-cyan">Get Started</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to <span className="gradient-text">Automate</span> Your Customer Calls?
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Tell us about your business and we&apos;ll show you exactly how a custom voice agent can save you time, capture more leads, and delight your customers.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Free strategy consultation",
                "Custom demo for your business",
                "No commitment required",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-linear-to-br from-accent-blue to-accent-cyan flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="glass-card p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent-blue to-accent-cyan flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Thank You!</h3>
                <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-secondary">Full Name</label>
                  <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="John Doe" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">Email</label>
                    <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                      placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-text-secondary">Phone</label>
                    <input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                      placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2 text-text-secondary">Industry</label>
                  <select id="industry" required value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-accent-blue transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select your industry</option>
                    {industryOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">Tell us about your needs</label>
                  <textarea id="message" rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    placeholder="e.g., We need an agent to handle inbound support calls..." />
                </div>

                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-center py-4! disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span>Book a Free Strategy Call</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
