'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import bg from '@/public/images/bg-about-us.jpg'

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  }

  const stats = [
    { value: "2020", label: "Year Founded", delay: 0.1 },
    { value: "5000+", label: "Companies Served", delay: 0.3 },
    { value: "9", label: "Global Offices", delay: 0.5 },
    { value: "10x", label: "Efficiency Gain", delay: 0.7 }
  ]
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      ref={ref}
      className="relative w-full bg-black/70 bg-fixed bg-center bg-cover overflow-hidden min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      {/* Animated overlay with pulse effect */}
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent"
        initial={{ x: '-100%' }}
        animate={inView ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Main Content - Flex grow to push stats down */}
      <div className="relative flex-grow flex items-center">
        <div className="w-full text-center px-6 md:px-12">
          {/* Section Header with slide animation */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-yellow-950/40 border border-yellow-700/50 rounded-full relative z-10"
          >
            <motion.span
              className="text-yellow-400 text-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              📊
            </motion.span>
            <span className="text-yellow-400 font-bold text-sm">ABOUT OPTIMIZIFY</span>
          </motion.div>

          {/* Title with fade and slide animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className=" text-center"
          >
            <h1 className="text-6xl font-bold">
              About <span className="text-yellow-400  underline">Us</span>
            </h1>
          </motion.div>

          {/* First paragraph with staggered animation */}
          <motion.p
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-gray-300 text-lg mb-6 mt-5 leading-relaxed max-w-3xl mx-auto relative z-10"
          >
            <motion.span variants={slideInRight} transition={{ duration: 0.6 }}>
              Established In 2020, Optimizify Is More Than A Business Solutions Provider; We Are A{' '}
            </motion.span>
            <motion.span
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.1 }}
            >
              Catalyst For Success
            </motion.span>
            <motion.span variants={slideInLeft} transition={{ duration: 0.6, delay: 0.6 }}>
              , Driven By Technology And A Data-Backed Methodology. Our Journey Began With A Mission To Empower Businesses, Irrespective Of Size.
            </motion.span>
          </motion.p>

          {/* Second paragraph */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-gray-300 text-lg mb-10 leading-relaxed max-w-3xl mx-auto relative z-10"
          >
            Over The Years, We've Assisted{' '}
            <motion.span
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Thousands Of Companies
            </motion.span>
            {' '}In Generating Leads And Optimizing Their Sales Strategies, Enhancing Efficiency By{' '}
            <motion.span
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Tenfold
            </motion.span>
            .
          </motion.p>

          {/* Buttons Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
          >
            {/* Discover Our Story Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-yellow-400 text-black font-bold rounded-full overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover Our Story
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Our Mission & Vision Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full overflow-hidden hover:text-black transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Mission & Vision
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-yellow-400"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Stats Grid - Positioned at bottom with more spacing */}
      <div className="w-full bg-[#191919] py-10 md:py-12 mt-auto">
        <div className="container mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 text-center rounded-lg relative group transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative z-10">

                  {/* Number Section */}
                  <div className="relative inline-block mb-3">

                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      <div className="w-full h-full bg-yellow-500/80 blur-[150px] scale-150 rounded-full"></div>
                    </div>

                    {/* Number */}
                    <div className="text-5xl md:text-7xl font-bold text-yellow-400 relative z-10 transition-transform duration-500 group-hover:scale-105">
                      {stat.value}
                    </div>

                  </div>

                  {/* Label */}
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-medium select-none">
                    {stat.label}
                  </p>

                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-500 z-20"></div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}