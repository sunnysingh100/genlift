"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, QuickServe Restaurants",
    industry: "Restaurant",
    content: "Genlift's voice agent handles 80% of our reservation calls now. Our staff can focus on the customers in-house while the AI handles the phones flawlessly.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Founder, HomeFinder Realty",
    industry: "Real Estate",
    content: "We were missing leads after hours. Now our Genlift agent qualifies prospects 24/7 and books viewings directly into our calendar. Game changer.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Operations Manager, AutoCare Plus",
    industry: "Automotive",
    content: "The integration with our booking system was seamless. Customers love the instant response and we've seen a 40% reduction in missed appointments.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent-cyan">Testimonials</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from businesses that have transformed their customer experience with Genlift.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-8 flex flex-col transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <StarRating rating={t.rating} />
              <p className="mt-5 text-text-secondary leading-relaxed flex-1 text-sm">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
                <span className="mt-3 inline-block text-xs px-3 py-1 rounded-full border border-border-accent text-accent-cyan">
                  {t.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
