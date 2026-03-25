'use client'
import { Rocket, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-yellow-950/40 border border-yellow-700/50 rounded-full">
            <span className="text-yellow-400 text-lg">🎯</span>
            <span className="text-yellow-400 font-bold text-sm">OUR PURPOSE</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-white">Mission & </span>
            <span className="text-yellow-400">Vision</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card - Height slightly increased */}
          <div 
            className="p-8 rounded-xl border border-yellow-600/20 bg-[#111111] transition-all duration-300
                       min-h-[380px] md:min-h-[400px] flex flex-col"
            style={{
              boxShadow: '0 20px 40px -10px rgba(234, 179, 8, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px -8px rgba(234, 179, 8, 0.7)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(234, 179, 8, 0.5)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center
                            shadow-[0_0_25px_rgba(234,179,8,0.7)]">
                <Rocket className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="text-gray-300 mb-4 leading-relaxed">
                To Revolutionize How Businesses Approach Digital Marketing And Sales Optimization Through Cutting-Edge Technology, Data-Driven Insights, And Personalized Strategies.
              </p>
              <p className="text-gray-400 leading-relaxed mt-auto">
                We Strive To Make Professional-Grade Marketing Tools And Strategies Accessible To Businesses Of All Sizes, Ensuring Sustainable Growth And Measurable Results.
              </p>
            </div>
          </div>

          {/* Vision Card */}
        <div 
  className="p-8 rounded-xl border border-yellow-600/20 bg-[#111111] transition-all duration-300
             min-h-[400px] md:min-h-[500px] flex flex-col"
  style={{
    boxShadow: '0 5px 12px -5px rgba(234, 179, 8, 0.3)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 15px 30px -8px rgba(234, 179, 8, 0.5)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '0 5px 12px -5px rgba(234, 179, 8, 0.3)'
  }}
>
  <div className="flex items-center gap-3 mb-6">
    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center
                  shadow-[0_0_25px_rgba(234,179,8,0.7)]">
      <Eye className="w-6 h-6 text-black" />
    </div>
    <h3 className="text-2xl font-bold text-white">Our Vision</h3>
  </div>
  <div className="flex-1 flex flex-col">
    <p className="text-gray-300 mb-4 leading-relaxed">
      To Become The Global Leader In Intelligent Business Solutions, Empowering Every Organization To Achieve Unprecedented Growth Through Innovative Technology And Strategic Excellence.
    </p>
    <p className="text-gray-400 leading-relaxed mt-auto">
      We Envision A Future Where Data-Driven Decision Making And AI-Powered Optimization Are Standard Practices For Businesses Worldwide.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}