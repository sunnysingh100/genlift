"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep-dive into your business — your workflows, customer pain points, and goals. We understand what your voice agent needs to do before writing a single line of code.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build & Integrate",
    description:
      "We design your custom voice agent with the perfect personality, knowledge base, and tool integrations — connecting it to your CRM, calendar, or any system you use.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.67-5.67a8.25 8.25 0 1111.56 0l-5.89 5.67zM11.42 15.17L17.25 21H6.75l4.67-5.83z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 8.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deploy & Optimize",
    description:
      "We launch your agent on your phone line, website, or app — then continuously monitor, optimize, and improve its performance based on real call data.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m0 0a14.926 14.926 0 01-5.96-5.96m5.96 5.96V21m0-14.17a6 6 0 00-5.84-7.38v4.8m5.84 2.58L3.75 21" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent-cyan">
            Process
          </span>
          <h2
            className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            From first call to live deployment — we handle everything so you can
            focus on growing your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-linear-to-r from-accent-blue via-accent-cyan to-accent-purple opacity-30" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Step Number Circle */}
              <div className="mx-auto w-20 h-20 rounded-2xl bg-linear-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white mb-8 relative z-10 shadow-(--shadow-glow-blue)">
                {step.icon}
              </div>

              {/* Step Number Badge */}
              <span className="inline-block text-xs font-bold tracking-widest text-accent-cyan mb-3">
                STEP {step.number}
              </span>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>

              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
