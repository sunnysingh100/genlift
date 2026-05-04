"use client";

import { useEffect, useRef, useState } from "react";

const differentiators = [
  { title: "Custom-Built, Not Cookie-Cutter", description: "Every agent is designed from scratch for your specific business — not a generic template.", icon: "⭐" },
  { title: "Deep Tool Integration", description: "We connect your voice agent to your CRM, calendar, database, and any API you use.", icon: "🔗" },
  { title: "Human-Like Conversations", description: "Our agents sound natural, handle interruptions, and adapt tone to context.", icon: "😊" },
  { title: "Dedicated Partnership", description: "A dedicated team who knows your business inside-out — not a support ticket queue.", icon: "🤝" },
  { title: "Transparent Pricing", description: "No hidden fees. You know exactly what you pay for — and ROI speaks for itself.", icon: "💰" },
  { title: "Proven Results", description: "Fewer missed calls, higher conversion rates, and more time for what matters.", icon: "📈" },
];

export default function WhyGenlift() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-genlift" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent-cyan">Why Choose Us</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Why Businesses Choose <span className="gradient-text">Genlift</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              We&apos;re not just another AI vendor. We&apos;re your dedicated voice AI partner — building agents that truly understand your business and deliver measurable results.
            </p>
            <div className="mt-10">
              <a href="#contact" className="btn-primary"><span>Start Your Project →</span></a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-4 p-5 rounded-xl border border-border-subtle bg-bg-card transition-all duration-700 hover:border-border-accent hover:bg-bg-card-hover ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
