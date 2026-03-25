'use client'
import Image from 'next/image'
import { BarChart3, Users2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MarketAdaptation() {
  return (
    <section className="relative px-6 md:px-12 py-10 md:py-16 bg-[#0A0A0A] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">

        {/* Left Image */}
        <div className="flex-1 [perspective:1200px]">
          <motion.div
            initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
            whileInView={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative rounded-xl overflow-hidden border-4 border-yellow-600/60 shadow-2xl shadow-yellow-600/20 hover:shadow-yellow-400/50 transition-shadow duration-500"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yDPtMMQWarslxvOJNe4tEzTHLtAPOC.png"
              alt="Professional woman with data analytics"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <div className="absolute top-6 left-6">
              <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg border border-yellow-600/30">
                <p className="text-yellow-400 font-bold text-sm">ADAPTABLE STRATEGIES</p>
                <p className="text-white text-xs">Evolving market solutions</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-yellow-950/40 border border-yellow-700/50 rounded-full">
            <span className="text-yellow-400 text-lg">🔄</span>
            <span className="text-yellow-400 font-bold text-sm">MARKET ADAPTATION</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-white">Adaptable Strategies</span>
            <br />
            <span className="text-yellow-400">For Evolving Markets</span>
          </h2>

          <p className="text-gray-300 text-xl md:text-xl lg:text-4xl mb-6 leading-relaxed">
            In an era of evolving sales, marketing, and business strategies, Optimizify thrives on adaptability. We keep our processes nimble, staying ahead of market changes and technological trends.
          </p>

          <p className="text-gray-300 text-xl md:text-xl lg:text-3xl mb-8 leading-relaxed">
            Our commitment to excellence involves meticulous data analysis, attentive customer feedback sessions, and continuous investment in our people and tools. This ensures that we consistently provide our customers with the most effective and efficient solutions, tailored to their evolving needs.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border bg-[#141414] border-yellow-700/30 rounded-lg shadow-lg shadow-yellow-600/10 hover:shadow-yellow-600/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">

                <h3 className="text-white font-bold text-sm text-yellow-500">Data Analysis</h3>
              </div>
              <p className="text-gray-400 text-xs">Meticulous research</p>
            </div>

            <div className="p-3 border bg-[#141414] border-yellow-700/30 rounded-lg shadow-lg shadow-yellow-600/10 hover:shadow-yellow-600/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">

                <h3 className="text-white font-bold text-yellow-500 text-sm">Customer Focus</h3>
              </div>
              <p className="text-gray-400 text-xs">Feedback-driven solutions</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}