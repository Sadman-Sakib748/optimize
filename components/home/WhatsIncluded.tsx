'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function WhatsIncluded() {
  const [activeTab, setActiveTab] = useState('features');

  const tabs = [
    { id: 'features', label: 'Features' },
    { id: 'bronze', label: 'Bronze' },
    { id: 'silver', label: 'Silver' },
    { id: 'gold', label: 'Gold' },
    { id: 'platinum', label: 'Platinum' },
  ];

  const features = [
    'Breaking Story Search Volume Identifier',
    'Top Trending Keyword Analysis',
    'AI-Powered Title Suggestions',
    'Custom Thumbnail Recommendations',
    'Daily Analytics Reporting',
  ];

  const growthTools = [
    'Competitor Performance Tracking',
    'Audience Retention Insights',
    'CTR Optimization Guidance',
    'Upload Timing Recommendations',
  ];

  // Animation variants
  const slideUp: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Stagger animation
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const featureStatus = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
  ];

  const growthStatus = [
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 p-6 text-white overflow-hidden">

      {/* Header */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-xl mx-auto mb-21"
      >
        <div className="border border-yellow-900 rounded-2xl py-5 bg-[#191919]">
          <h1 className="text-5xl font-bold text-center">
            <span className="text-white">What's </span>
            <span className="text-yellow-400">Included</span>
          </h1>
          <p className="text-white text-center px-3 mt-5 text-[19px]">
            Choose The Perfect Plan For Your YouTube Growth Journey
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full mb-16"
      >
        <div className="flex flex-wrap px-5 gap-6 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-18 py-5 rounded-[20px] border transition-all duration-300 font-extrabold text-[24px] tracking-wide
              ${
                tab.id === 'bronze'
                  ? 'border-orange-500/60'
                  : tab.id === 'silver'
                  ? 'border-gray-400/60'
                  : tab.id === 'gold'
                  ? 'border-yellow-400/60'
                  : tab.id === 'platinum'
                  ? 'border-cyan-400/60'
                  : 'border-gray-600'
              }
              ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] shadow-lg scale-105'
                  : 'bg-[#111] hover:scale-105 hover:bg-[#1a1a1a]'
              }`}
            >
              <span
                className={`${
                  activeTab === tab.id
                    ? 'text-white'
                    : tab.id === 'bronze'
                    ? 'text-orange-500'
                    : tab.id === 'silver'
                    ? 'text-gray-300'
                    : tab.id === 'gold'
                    ? 'text-yellow-400'
                    : tab.id === 'platinum'
                    ? 'text-cyan-400'
                    : 'text-gray-400'
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto flex flex-col gap-4"
      >
        <motion.div
          variants={slideUp}
          className="border border-yellow-900/20 rounded-2xl p-5 py-4 bg-yellow-900/20"
        >
          <h2 className="text-[30px] font-bold p-4">Optimization Features</h2>
        </motion.div>

        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={slideUp}
            className="border border-gray-700 rounded-2xl p-7 bg-[#111111] hover:border-yellow-600/50 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">{feature}</h3>
                <p className="text-gray-400 text-base">
                  Ensure That You Are Kept Up To Date With The Top Stories On A
                  Daily Basis.
                </p>
              </div>

              {featureStatus[idx].map((status, i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      status ? 'bg-[#FFD700]' : 'bg-[#252A32]'
                    }`}
                  >
                    {status ? '✓' : '✕'}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={slideUp}
          className="border-2 border-cyan-700 rounded-2xl p-7 bg-cyan-900/20 mt-10"
        >
          <h2 className="text-4xl font-bold">Channel Growth Tools</h2>
        </motion.div>

        {growthTools.map((tool, idx) => (
          <motion.div
            key={idx}
            variants={slideUp}
            className="border border-gray-700 rounded-2xl p-10 bg-zinc-950 hover:border-cyan-500 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{tool}</h3>
                <p className="text-gray-400">
                  Gain Deep Insights Into Your Channel Performance.
                </p>
              </div>

              {growthStatus[idx].map((status, i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      status ? 'bg-[#FFD700]' : 'bg-[#252A32]'
                    }`}
                  >
                    {status ? '✓' : '✕'}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}