'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      id: '1',
      title: 'SEO Optimization',
      description:
        'AI-Powered Title And Description Optimization To Boost Your Video Rankings And Discoverability.',
      icon: '🔍',
    },
    {
      id: '2',
      title: 'Analytics Dashboard',
      description:
        'Deep Insights Into Your Channel Performance With Actionable Recommendations For Growth.',
      icon: '📊',
    },
    {
      id: '3',
      title: 'Audience Targeting',
      description:
        'Identify And Reach Your Perfect Audience With Precision Targeting And Demographic Analysis.',
      icon: '🎯',
    },
    {
      id: '4',
      title: 'Trend Analysis',
      description:
        'Stay Ahead Of The Curve With Real-Time Trend Detection And Viral Content Predictions.',
      icon: '✅',
    },
    {
      id: '5',
      title: 'SEO-Driven Content Blueprint',
      description:
        'Unlock High-Ranking Video Ideas, Tags, And Posting Plans Designed To Dominate YouTube Search. Set It And Forget It. Our AI Continuously Optimizes Your Content For Maximum Performance.',
      icon: '✅',
    },
    {
      id: '6',
      title: 'Keyword Ranking Insights',
      description:
        'Track How Your Videos Rank On YouTube Search. Uncover Winning Keywords. And Spot New Growth Opportunities.',
      icon: '✅',
    },
  ]

  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-[#ECBB26] mb-4 sm:mb-5">
            POWERFUL FEATURES
          </h1>
          <p className="text-[#9ca3af] text-[18px] sm:text-lg md:text-xl font-semibold">
            Everything You Need To Dominate YouTube And Grow Your Channel To New Heights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-5 sm:p-7 bg-[#0B0C0F] rounded-xl 
            border-[1px] border-[rgba(236,117,38,0.5)] 
            hover:shadow-[0_5px_15px_rgba(236,187,38,0.5)] 
            transition-all duration-500 ease-in-out"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#ECBB26] rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <span className="text-2xl sm:text-3xl text-[#0a0a0a]">{feature.icon}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#ECBB26] mb-3 sm:mb-4">
                {feature.title}
              </h3>

              <p className="text-base sm:text-[17px] text-[#9ca3af] leading-relaxed font-semibold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ECBB26] 
          hover:bg-yellow-500 
          text-[#0a0a0a] 
          font-bold 
          px-6 sm:px-9       
          py-2 sm:py-3        
          rounded-lg 
          flex items-center 
          gap-2 
          text-sm sm:text-base
          transition-all duration-300 ease-in-out 
          hover:shadow-[0_0_25px_rgba(236,187,38,0.9)]"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>

            <span>Explore All Features</span>

            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}