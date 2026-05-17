"use client";

import { useState, useEffect } from "react";

const rotatingPhrases = [
  "Close Deals",
  "Serve Customers",
  "Book Appointments",
  "Qualify Leads",
];

// Pre-computed deterministic bar data to avoid SSR/client hydration mismatches.
// Each entry: [heightPercent, animationDuration]
const WAVEFORM_BARS: [number, number][] = Array.from({ length: 40 }, (_, i) => {
  // Use a simple deterministic formula instead of Math.random()
  const pseudoRand1 = ((Math.sin(i * 9301 + 49297) * 49271) % 1 + 1) % 1;
  const pseudoRand2 = ((Math.sin((i + 100) * 9301 + 49297) * 49271) % 1 + 1) % 1;
  const height = Math.max(5, 20 + Math.sin(i * 0.5) * 30 + pseudoRand1 * 30);
  const duration = +(2 + pseudoRand2 * 2).toFixed(2);
  return [+height.toFixed(2), duration];
});

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setIsAnimating(false);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-animated" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue rounded-full opacity-[0.04] blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan rounded-full opacity-[0.05] blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-purple rounded-full opacity-[0.03] blur-[80px] animate-float" style={{ animationDelay: "4s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-[rgba(59,130,246,0.06)] mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-glow" />
          <span className="text-sm text-text-secondary">
            Now Accepting New Clients
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[2rem] min-[380px]:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.12] sm:leading-[1.1] tracking-tight mb-6 sm:mb-8 animate-fade-in-up"
          style={{ fontFamily: "var(--font-heading)", animationDelay: "0.1s" }}
        >
          <span className="block">AI Voice Agents That</span>
          <span className="block h-[1.2em] sm:h-[1.15em] relative overflow-hidden">
            <span
              className="inline-block max-w-full whitespace-nowrap gradient-text drop-shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-400 ease-in-out"
              style={{
                transform: isAnimating ? "translateY(-100%)" : "translateY(0)",
                opacity: isAnimating ? 0 : 1,
              }}
            >
              {rotatingPhrases[currentIndex]}
            </span>
          </span>
          <span className="block">While You Sleep</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          We build custom AI voice agents for your business - handling calls,
          qualifying leads, and booking appointments 24/7 with human-like
          conversations.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="https://cal.com/sunny-singh/quick-chat" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg py-4! px-8!">
            <span>Book a Strategy Call</span>
          </a>
          <a href="#how-it-works" className="btn-ghost text-lg py-4! px-8!">
            See How It Works
          </a>
        </div>

        {/* Visual — Waveform */}
        <div
          className="mt-20 mx-auto max-w-4xl animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
            {/* Simulated voice waveform */}
            <div className="flex items-end justify-center gap-[3px] h-24" aria-hidden="true">
              {WAVEFORM_BARS.map(([height, dur], i) => {
                const opacity = +(0.4 + Math.sin(i * 0.3) * 0.4).toFixed(4);
                return (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-linear-to-t from-accent-blue to-accent-cyan"
                    style={{
                      height: `${height}%`,
                      opacity,
                      animation: `pulse-glow ${dur}s ease-in-out infinite`,
                      animationDelay: `${+(i * 0.05).toFixed(2)}s`,
                    }}
                  />
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent-cyan animate-pulse-glow" />
              <span className="text-text-secondary text-sm">
                AI Agent is handling a customer call...
              </span>
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-linear-to-r from-accent-blue to-accent-cyan opacity-10 blur-[60px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
