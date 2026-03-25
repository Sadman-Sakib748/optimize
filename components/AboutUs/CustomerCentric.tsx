'use client'

export default function CustomerCentric() {
  return (
    <section className="px-3 md:px-4 py-5 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="flex-1">
           <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-950/40 border border-yellow-700/50 rounded-full">
            <span className="text-yellow-400 text-lg">🔄</span>
            <span className="text-yellow-400 font-bold text-sm"> CUSTOMER CULTURE</span>
          </div>
          <h2 className="text-5xl md:text-5xl font-bold mb-5 leading-tight">
            <span className="text-white">Customer-Centric</span>
            <br />
            <span className="text-yellow-400">Culture & Values</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            At Optimizify, We've Cultivated A Customer Culture Founded On Integrity, Transparency, And Tangible Results. Unlike Traditional Agencies, We Maintain A Management Fee-Free Pricing Structure.
          </p>

         <div className="space-y-2">
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mt-1">
      <span className="text-black font-bold">✓</span>
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-1 text-yellow-400">Fee-Free Structure</h3>
      <p className="text-gray-400">Accessible To Businesses Of All Sizes</p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mt-1">
      <span className="text-black font-bold">✓</span>
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-1 text-yellow-400">Global Impact</h3>
      <p className="text-gray-400">Charitable Work Supporting Communities Worldwide</p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mt-1">
      <span className="text-black font-bold">✓</span>
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-1 text-yellow-400">Strategic Partnership</h3>
      <p className="text-gray-400">Outpacing And Outsmarting The Market</p>
    </div>
  </div>
</div>

          <p className="text-gray-300 text-lg mt-10 leading-relaxed">
            With Tried-And-Tested B2B Sales And Marketing Solutions, Optimizify Proves To Be A Strategic Partner Consistently Driving Enduring Success For Businesses.
          </p>
        </div>

        {/* Right Images */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden border-2 border-yellow-600/40">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-N2P2CyRPF2C61Mun5H6RgkRN4eymej.png"
              alt="Team collaboration"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-yellow-600/40">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-N2P2CyRPF2C61Mun5H6RgkRN4eymej.png"
              alt="Office workspace"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}