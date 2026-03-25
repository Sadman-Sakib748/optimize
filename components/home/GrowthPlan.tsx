"use client";
import Image from 'next/image';
import { Info } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import white from '@/public/images/optimizify-play-gold-icon.png'

export default function GrowthPlan() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [billingType, setBillingType] = useState<"monthly" | "annual">(
    "annual"
  );

  const featureDescriptions: Record<string, string> = {
    "UNLIMITED KEYWORD RESEARCH":
      "Research unlimited keywords to find the best opportunities for your videos",
    "SMARTRANK KEYWORD SELECTION":
      "AI-powered selection of the most effective keywords for ranking",
    "AI-POWERED YOUTUBE METADATA OPTIMIZATION":
      "Automatically optimize your video titles, descriptions and tags",
    "INTELLIGENT YOUTUBE SEO TAGGING":
      "Intelligent tagging system powered by AI for better SEO performance",
    "2 VIDEOS OPTIMIZED": "Optimize up to 2 videos per month. Perfect for beginners starting their YouTube journey.",
    "4 VIDEOS OPTIMIZED": "Optimize up to 4 videos per month. Ideal for growing channels.",
    "8 VIDEOS OPTIMIZED": "Optimize up to 8 videos per month. Best for professional content creators.",
  };

  const annualPlans = [
    {
      name: "Bronze",
      subtitle: "Perfect Plan For Your Needs",
      price: 995,
      monthlyPrice: 82.92,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "2 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Bronze",
      featured: false,
    },
    {
      name: "Silver",
      subtitle: "Perfect Plan For Your Needs",
      price: 1907,
      monthlyPrice: 158.95,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "4 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Silver",
      featured: false,
    },
    {
      name: "Gold",
      subtitle: "Perfect Plan For Your Needs",
      price: 3621,
      monthlyPrice: 301.75,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "8 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Gold",
      featured: true,
    },
  ];

  const monthlyPlans = [
    {
      name: "Bronze",
      subtitle: "Perfect Plan For Your Needs",
      price: 85,
      monthlyPrice: 85,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "2 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Bronze",
      featured: false,
    },
    {
      name: "Silver",
      subtitle: "Perfect Plan For Your Needs",
      price: 159,
      monthlyPrice: 159,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "4 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Silver",
      featured: false,
    },
    {
      name: "Gold",
      subtitle: "Perfect Plan For Your Needs",
      price: 302,
      monthlyPrice: 302,
      features: [
        { name: "UNLIMITED KEYWORD RESEARCH" },
        { name: "SMARTRANK KEYWORD SELECTION" },
        { name: "AI-POWERED YOUTUBE METADATA OPTIMIZATION" },
        { name: "INTELLIGENT YOUTUBE SEO TAGGING" },
        { name: "8 VIDEOS OPTIMIZED" },
      ],
      cta: "Get Gold",
      featured: true,
    },
  ];

  const plans = billingType === "annual" ? annualPlans : monthlyPlans;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-[#0C0C0C] pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-4 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="max-w-6xl mx-auto mb-12 sm:mb-16 text-center"
      >
        <div className="inline-block mb-6 sm:mb-8">
          <div className="bg-yellow-400 text-black px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-[14px] flex items-center gap-1">
            <span> 💎 Premium Plans Available</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
          Choose Your
          <br />
          <span className="text-yellow-400">Growth Plan</span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 mx-auto max-w-3xl px-4">
          Accelerate Your YouTube Success With Our AI Powered Optimization
          Tools And Expert <br className="hidden sm:block" /> Guidance
        </p>

        {/* Toggle */}
        <div className="inline-flex gap-2 border-2 border-[#2F3849] rounded-xl mb-8 sm:mb-10 w-[240px] sm:w-[230px] md:w-[330px] relative overflow-hidden mx-auto">
          {/* Sliding Background */}
          <motion.div
            className="absolute rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            layoutId="activeButton"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              mass: 0.8,
            }}
            style={{
              width: "calc(50% - 4px)",
              height: "calc(100% - 4px)",
              top: "2px",
              left: billingType === "monthly" ? "2px" : "calc(50% + 2px)",
              backgroundColor: "#2F3849",
            }}
          />

          {["monthly", "annual"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              animate={
                billingType === type
                  ? {
                    scale: [1, 1.04, 0.96, 1],
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }
                  : {}
              }
              onClick={() => setBillingType(type as "monthly" | "annual")}
              className={`flex-1 rounded-lg font-semibold text-sm sm:text-base transition-all duration-500 z-70 relative overflow-hidden`}
              style={{
                background: "transparent",
                padding: "0px",
              }}
            >
              <motion.span
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 sm:px-7 py-4 sm:py-5 w-full"
                animate={
                  billingType === type
                    ? {
                      textShadow: [
                        "0 0 0px #2F3849",
                        "0 0 8px #2F3849",
                        "0 0 5px #2F3849",
                        "0 0 3px #2F3849",
                        "0 0 0px #2F3849",
                      ],
                    }
                    : {}
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {type === "annual" ? (
                  <>
                    <span>Annual Plan</span>
                    <span className="bg-[#10B981] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                      Save 24%
                    </span>
                  </>
                ) : (
                  "Monthly Plan"
                )}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto bg-[#1B1B19] px-0 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {plans.map((plan, index) => (
              <motion.div
                key={`${plan.name}-${billingType}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1
                }}
                className={`rounded-xl border ${plan.featured
                  ? "border-yellow-400 bg-[#0F0F0F]"
                  : "border-gray-700 bg-[#0F0F0F]"
                  } p-6 sm:p-8 w-full relative`}
              >
                {/* Icon - Two SVGs */}
                <motion.div
                  className="w-14 h-14 sm:w-14 sm:h-14 rounded-lg bg-yellow-400 flex items-center justify-center gap-1 mb-4 sm:mb-6"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                  </svg>
                </motion.div>

                <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                  {plan.subtitle}
                </p>

                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                    <span className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl font-black">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 text-sm sm:text-base">
                      {billingType === "annual" ? "/Year" : "/Month"}
                    </span>
                  </div>

                  {/* Annual Savings Box */}
                  {billingType === "annual" && (
                    <>
                      <div className="w-full sm:w-72 bg-[#1A2820] rounded-xl shadow-lg p-3 sm:p-4 flex flex-col justify-between text-white mb-2">
                        <div className="flex items-center justify-between text-[10px] sm:text-xs font-medium">
                          <span>Annual plan:</span>
                          <span className="text-yellow-400 font-semibold">💰 Save $469/year</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm font-bold mt-1">
                          <span className="line-through text-gray-400">$2376</span>
                          <span>$1907/year</span>
                          <span className="text-red-500 font-semibold">-20%</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-base">
                        ${plan.monthlyPrice}/month billed annually
                      </p>
                    </>
                  )}
                </div>

                {/* Features with Hover Tooltips - Left Side */}
                <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-5 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => {
                    const featureKey = `${plan.name}-${idx}`;
                    const isHovered = hoveredFeature === featureKey;

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        onMouseEnter={() => setHoveredFeature(featureKey)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        className="relative bg-[#101010] group"
                      >
                        <div
                          className={`border rounded-xl p-3 sm:p-4 bg-[#101010] flex items-center gap-2 sm:gap-3 transition-all duration-300 ${isHovered
                            ? "border-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                            : "border-green-500/50 bg-[#151515]"
                            }`}
                        >
                          <div className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Image
                              src={white}
                              alt="icon"
                              width={24}
                              height={24}
                              className="object-contain sm:w-[30px] sm:h-[30px]"
                            />
                          </div>

                          <span className="text-xs sm:text-sm md:text-base font-bold flex-1 break-words">
                            {feature.name}
                          </span>

                          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 cursor-help" />
                        </div>

                        {/* Tooltip - Width 400px, Height 100px */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-50 bg-black border border-yellow-400/30 text-white text-sm rounded-xl p-4 shadow-2xl pointer-events-none overflow-hidden"
                              style={{
                                top: '50%',
                                right: 'calc(100% + 10px)',
                                transform: 'translateY(-50%)',
                                width: '400px',
                                height: '100px',
                              }}
                            >
                              {/* Arrow pointing right */}
                              <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-[#1A1A1A] border-t border-r border-yellow-400/30"></div>

                              {/* Tooltip Content */}
                              <div className="relative z-10 h-full flex flex-col justify-center">
                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                                  {featureDescriptions[feature.name] || feature.name}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* View all benefits button */}
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl font-bold uppercase tracking-tight text-base sm:text-lg bg-transparent border-0 text-yellow-400 hover:text-yellow-300 transition-all duration-300 w-full sm:w-auto relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-1 after:bg-yellow-400 after:rounded-full hover:after:bg-yellow-300 mb-4 sm:mb-6"
                  >
                    View all benefits
                  </motion.button>
                </div>

                {/* Main CTA Button */}
                <div className='mt-6 sm:mt-10 md:mt-14'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-extrabold uppercase tracking-tight text-2xl sm:text-3xl md:text-5xl lg:text-[40px] bg-[#0a0a0a] navbar-cta hover:bg-[#0a0a0a] text-[#0a0a0a] shadow-[0_0_10px_rgba(255,215,0,0.5)] leading-none w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px]"
                  >
                    {plan.cta} →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}