"use client";

import { useInView } from "@/hooks/useInView";

const industries = [
  {
    name: "Real Estate",
    description: "Qualify leads, schedule property viewings, and follow up with buyers automatically.",
  },
  {
    name: "Healthcare",
    description: "Handle appointment bookings, prescription reminders, and patient follow-ups.",
  },
  {
    name: "E-Commerce",
    description: "Manage order inquiries, track shipments, and handle return requests effortlessly.",
  },
  {
    name: "Restaurants",
    description: "Take reservations, process orders, and handle delivery inquiries over the phone.",
  },
  {
    name: "Legal Services",
    description: "Screen potential clients, schedule consultations, and handle intake calls.",
  },
  {
    name: "Insurance",
    description: "Qualify prospects, process claims inquiries, and manage policy renewals.",
  },
  {
    name: "Automotive",
    description: "Book test drives, handle service appointments, and manage recall notifications.",
  },
  {
    name: "Education",
    description: "Answer enrollment questions, schedule campus tours, and support student services.",
  },
];

export default function Industries() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section id="industries" ref={sectionRef} className="relative py-24 sm:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent-cyan">
            Industries
          </span>
          <h2
            className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for <span className="gradient-text">Every Business</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            No matter your industry — we customize voice agents that speak your
            language and understand your customers.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className={`glass-card p-6 group cursor-default transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {industry.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
