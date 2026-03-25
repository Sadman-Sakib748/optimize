'use client'
import { Globe, Zap, TrendingUp } from 'lucide-react'

export default function GlobalTeam() {
  return (
    <section className="px-2 md:px-4 py-5 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-8 px-4 bg-yellow-950/40 border border-yellow-700/50 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-yellow-400 font-bold text-sm">GLOBAL TEAM</span>
            </div>

            <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Global Team,</span>
              <br />
              <span className="text-yellow-400">Shared Values</span>
            </h1>

            <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-2xl">
              Driven By A Genuine Desire To Assist Businesses In Succeeding, Our Global And Distributed Team Spans Nine Countries. We've Transitioned From Two Physical Locations To A Distributed Model, Ensuring Collaboration With The Best Minds Who Share Our Dedication.
            </p>

           <div className="space-y-6">

  {/* Nine Countries */}
  <div className="flex gap-5 p-5 bg-[#141414] rounded-xl shadow-lg">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
      <span className="text-black font-bold text-xl">🌍</span>
    </div>
    <div className="flex-1">
      <h3 className="text-white font-bold text-base mb-1">Nine Countries</h3>
      <p className="text-gray-400 text-sm leading-tight">Global Distributed Team With Diverse Expertise</p>
    </div>
  </div>

  {/* Shared Values */}
  <div className="flex gap-5 p-5 bg-[#141414] rounded-xl shadow-lg">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-md shadow-yellow-600/30">
      <span className="text-black font-bold text-2xl">✓</span>
    </div>
    <div className="flex-1">
      <h3 className="text-white font-bold text-base mb-1">Shared Values</h3>
      <p className="text-gray-400 text-sm leading-tight">Accountability, Collaboration, And Customer-Centricity</p>
    </div>
  </div>

  {/* Results-Driven */}
  <div className="flex gap-5 p-5 bg-[#141414] rounded-xl shadow-lg">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
      <span className="text-black font-bold text-xl">📈</span>
    </div>
    <div className="flex-1">
      <h3 className="text-white font-bold text-base mb-1">Results-Driven</h3>
      <p className="text-gray-400 text-sm leading-tight">Committed To Delivering Excellence In Every Project</p>
    </div>
  </div>

</div>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-2xl">
              With tried-and-tested B2B sales and marketing solutions, Optimizify proves to be a strategic partner consistently driving enduring success for businesses.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden border-4 border-yellow-600/60">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%281%29-QTXh2GUHQBtlLqVYbtpid3kYA2zT80.png"
                alt="Team collaboration with hands together"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}