"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: 50, suffix: "+", label: "Voice Agents Deployed" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 1, prefix: "<", suffix: "s", label: "Response Time" },
  { value: 10, suffix: "+", label: "Industries Served" },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ProofBar() {
  const [ref, inView] = useInView(0.3);

  return (
    <section ref={ref} className="relative py-16 border-y border-border-subtle">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={inView}
              />
              <p className="mt-2 text-sm text-text-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
