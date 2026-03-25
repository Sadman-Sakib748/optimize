import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface HeroSectionProps {
  headline?: string;
  subline?: string;
  tagline?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  stats?: { value: string; label: string }[];
}

const defaultStats = [
  { value: "1M+", label: "Keywords Ranked" },
  { value: "2.5K+", label: "Channels Optimized" },
  { value: "368%", label: "Rank Increase" },
];

function PlayIconFloating({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute text-[var(--primary)] opacity-40 pointer-events-none ${className}`}
      aria-hidden
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7L8 5z" />
      </svg>
    </span>
  );
}

export function HeroSection({
  headline = "OPTIMIZIFY YOUR YOUTUBE",
  subline = "Stop Guessing. Start Ranking. Get Seen on YouTube with AI-Powered SEO.",
  tagline = "Rank effectively, reach your audience, and monetize smarter.",
  ctaPrimary = "Start Optimizing",
  ctaSecondary = "Watch Demo",
  stats = defaultStats,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[770px] h-auto flex -top-10 items-center justify-center overflow-hidden py-10 sm:py-0">
      <div className="absolute inset-0 bg-[var(--bg-gradient)]" />
      <div className="absolute inset-0 bg-[url('/images/home/hero-background.jpg')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-6 sm:py-10">
        <div className="mb-3 sm:mb-4 flex justify-center animate-fade-in-down">
          <span className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 items-center justify-center rounded-full [background:var(--gold-gradient)] shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,215,0,1)] hover:scale-110">
            <Image
              src="/images/optimizify-play-gold-icon.png"
              alt=""
              width={48}
              height={48}
              className="object-contain p-1 sm:p-2 transition-transform duration-300 hover:scale-110"
            />
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 sm:mb-3 leading-tight animate-fade-in-up animate-delay-100">
          <span className="text-[#FFB820]">{headline.split(" ")[0]}</span>
          <br />
          <span className="text-white mb-4 sm:mb-6 leading-[0.9] mt-0 block">{headline.split(" ").slice(1).join(" ")}</span>  
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2 text-[var(--primary)] leading-relaxed animate-fade-in-up animate-delay-200 px-2 sm:px-0">
          {subline}
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-white mb-6 sm:mb-8 md:mb-10 animate-fade-in-up animate-delay-300 px-4 sm:px-0">
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up animate-delay-500 px-4 sm:px-0">
          <Link href="/register" className="w-full sm:w-auto">
            <Button size="lg" className="!py-2 sm:!py-3 !px-4 sm:!px-6 md:!px-8 gap-2 rounded-xl bg-yellow-400 text-black hover:bg-yellow-300 w-full sm:w-auto text-sm sm:text-base">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              {ctaPrimary}
            </Button>
          </Link>
          <Button size="lg" className="!py-2 sm:!py-3 !px-4 sm:!px-6 md:!px-8 gap-2 rounded-xl bg-yellow-400 text-black hover:bg-yellow-300 w-full sm:w-auto text-sm sm:text-base">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            {ctaSecondary}
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`space-y-1 sm:space-y-2 animate-fade-in-up ${i === 0 ? "animate-delay-600" : i === 1 ? "animate-delay-700" : "animate-delay-800"}`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold">{s.value}</div>
              <div className="text-sm sm:text-base text-[var(--muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}