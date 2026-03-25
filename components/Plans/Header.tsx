'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export interface HeroSectionProps {
  headline?: string;
  subline?: string;
  tagline?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  stats?: { value: string; label: string }[];
}

const defaultStats = [
  { value: "10K+", label: "Videos Optimized" },
  { value: "5K+", label: "Channels Grown" },
  { value: "2.5M+", label: "Views Generated" },
  { value: "98%", label: "Success Rate" },
];

export function Header({
  headline = "Unlock Your YouTube Potential",
  subline = "All-in-one YouTube channel growth solution that helps automate your workflow with data-driven optimization strategies, making success on YouTube seamless and scalable.",
  tagline = "Rank effectively, reach your audience, and monetize smarter.",
  ctaPrimary = "Get Started Now",
  ctaSecondary = "Watch Demo",
  stats = defaultStats,
}: HeroSectionProps) {
  const router = useRouter();
  const borderRef = useRef<HTMLSpanElement>(null);

  // ডিবাগ করার জন্য
  useEffect(() => {
    if (borderRef.current) {
      console.log('Border element style:', window.getComputedStyle(borderRef.current));
      console.log('Border element rect:', borderRef.current.getBoundingClientRect());
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] to-[#1A1A1A] z-0" />

      {/* Golden Glows */}
      <span className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-30 blur-3xl animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-20 blur-2xl animate-float-slow pointer-events-none -translate-x-1/2 -translate-y-1/2"></span>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-24">
        <div className="-mt-5">
          <span className="bg-yellow-500 text-black px-6 -mt-5 py-2 rounded-full font-medium inline-block">
            Choose Your Growth Plan
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
  font-bold   
  relative 
  animate-fade-in-up animate-delay-100
  flex flex-col items-center">

          <div>
            <span className="text-white">
              {headline.split(" ").slice(0, -2).join(" ")}
            </span>
            <br />
            <span className="text-gradient-gold ">
              {headline.split(" ").slice(-2).join(" ")}
            </span>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 z-50"></span>
          <span
            ref={borderRef}
            className="
            absolute bottom-0
            left-1/2 transform -translate-x-1/2
            w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]
            h-[3px]
            bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500
            rounded-full
            shadow-[0_0_15px_rgba(255,215,0,0.7)]
            z-50
            block
            visible
            opacity-100
          "
          ></span>
        </h1>

        {/* Tagline */}
        <p className="text-bold mt-8 md:text-2xl max-w-4xl mx-auto leading-relaxed text-white mb-10 animate-fade-in-up animate-delay-300">
         All-in-one YouTube channel growth solution that helps automate your workflow with <span className="text-yellow-500">data-driven optimization strategies</span>, making success on YouTube seamless and scalable.
        </p>

        {/* Stats */}
        <div className="mt-12 flex items-center justify-center gap-8 text-center flex-wrap">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`space-y-1 animate-fade-in-up ${i === 0
                ? "animate-delay-600"
                : i === 1
                  ? "animate-delay-700"
                  : "animate-delay-800"
                }`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient-gold">
                {s.value}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col mt-16 sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-500">
          <Button size="lg" className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-black" onClick={() => router.push("/register")}>
            {ctaPrimary}
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent border-2 border-yellow-500 text-yellow-500 
             hover:bg-yellow-500 hover:text-black hover:border-yellow-500 
             transition-all duration-300 rounded-full"
            onClick={() => router.push("/demo")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            {ctaSecondary}
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div
          onClick={() =>
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-16 flex justify-center animate-bounce cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center text-yellow-500 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>

      </div>

    </section>
  );
}