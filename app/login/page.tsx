'use client';

import { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, BarChart3, Zap, Activity, Star } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep Insights Into Your Channel Performance With Real-Time Data',
    },
    {
      icon: Zap,
      title: 'Growth Optimization',
      description: 'AI-Powered Recommendations For Maximum Reach And Engagement',
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Track Your Performance Metrics As They Happen In Real-Time',
    },
  ];

  const testimonials = [
    {
      quote: 'This tool boosted my channel growth tremendously!',
      name: 'John Doe',
      role: 'Content Creator',
      achievement: '1M Subscribers',
    },
    {
      quote: 'I gained 10k subscribers in just 2 weeks using this platform!',
      name: 'Jane Smith',
      role: 'YouTuber',
      achievement: '500K Subscribers',
    },
    {
      quote: 'The analytics provided helped me optimize content efficiently.',
      name: 'Alex Johnson',
      role: 'Content Strategist',
      achievement: '2M Subscribers',
    },
  ];

  // Motion Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  const slideAnim: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: 'easeIn' as const } },
  };

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Password validation on blur
  const handlePasswordBlur = () => {
    setPasswordFocused(false);
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6 relative overflow-hidden">

      {/* Left Section - Features + Testimonial */}
      <div className="hidden lg:flex flex-col w-[850px] mb-50 justify-center items-center">

        {/* Logo, Title, Tagline */}
        <div className="mb-10 flex items-center justify-center relative">
          <div className="absolute w-36 h-36 rounded-3xl bg-yellow-400/40 blur-3xl animate-pulse"></div>
          <div className="relative w-28 h-28 flex items-center justify-center">
            <div className="absolute bottom-0 w-32 h-10 bg-yellow-400/40 rounded-full blur-3xl"></div>
            <div className="w-28 h-28 bg-yellow-400 rounded-3xl flex items-center justify-center relative shadow-[0_0_50px_rgba(255,215,0,0.6)]">
              <svg className="w-16 h-16 text-[#0A0A0A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-yellow-400 mb-4 leading-tight text-center">
          Optimizify
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-xl text-xl leading-relaxed">
          Accelerate Your YouTube Growth With Powerful <br /> Analytics And Optimization Tools
        </p>

        {/* Feature Cards */}
        <div className="space-y-6 w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border bg-[#171615] border-yellow-600/30 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 mx-auto w-[500px] h-[150px] flex items-center"
              >
                <div className="flex items-center gap-6 w-full">
                  <div className="w-13 h-13 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md shadow-yellow-500/50 flex-shrink-0">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-extrabold mb-2 text-xl">{feature.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ boxShadow: "0 0 10px rgb(255, 102, 0)" }}
          className="relative border border-[rgb(255,102,0)] rounded-3xl p-7 mt-12 bg-[#2E2E2E] backdrop-blur overflow-hidden w-[500px]"
        >
          {/* Floating Circles */}
          <motion.div
            className="absolute left-5 bottom-5 w-20 h-20 rounded-full blur-5xl pointer-events-none z-0"
            style={{ backgroundColor: '#FFD166', opacity: 0.35 }}
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' as const }}
          />
          <motion.div
            className="absolute right-10 top-5 w-20 h-20 rounded-full blur-4xl pointer-events-none z-0"
            style={{ backgroundColor: '#06D6A0', opacity: 0.35 }}
            animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' as const }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={28} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-gray-200 italic text-lg leading-relaxed mb-10 relative z-10"
              >
                "{testimonials[currentSlide].quote}"
              </motion.p>

              {/* Creator Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center items-center space-x-6 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-center font-bold text-white mb-1">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-400 text-sm">{testimonials[currentSlide].role} • {testimonials[currentSlide].achievement}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 relative z-10">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any }}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${currentSlide === index ? 'bg-yellow-400' : 'bg-gray-600'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full flex items-center justify-center mt-58 lg:justify-end min-h-screen">
        <div className="border border-yellow-600/40 rounded-3xl mr-12 p-10 lg:p-16 w-[660px] backdrop-blur-md bg-[#1a1a1a]/80 shadow-xl transition-all duration-300">

          {/* User Icon */}
          <div className="flex justify-center mb-10">
            <div className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center shadow-xl shadow-yellow-400/60">
              <svg className="w-12 h-12 text-[#0A0A0A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>

          <h2 className="text-5xl lg:text-5xl font-extrabold text-center mb-4">
            <span className="text-white">Welcome</span>
            <br />
            <span className="text-yellow-400">Back</span>
          </h2>

          <p className="text-gray-400 text-center mb-10 text-lg">
            Sign In To Accelerate Your YouTube Growth
          </p>

          {/* Email Input */}
          <div className="mb-6">
            <label className="text-white font-semibold block mb-2 text-base">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#4C4F52] text-white rounded-2xl pl-12 pr-4 py-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="text-white font-semibold block mb-2 text-base">Password</label>
            <div className={`relative rounded-2xl transition-all duration-300 ${passwordFocused ? 'ring-2 ring-yellow-400' : ''}`}>
              <Lock
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer ${passwordFocused ? 'text-yellow-400' : 'text-gray-400'}`}
                onClick={() => setShowPassword(!showPassword)}
                onFocus={() => setPasswordFocused(true)}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={handlePasswordBlur}
                className="w-full bg-[#4C4F52] text-white rounded-2xl pl-12 pr-12 py-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {passwordError && <p className="text-red-500 mt-2 text-sm">{passwordError}</p>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center gap-2 text-gray-400 hover:text-gray-300 cursor-pointer text-sm">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-[6px] border-2 border-yellow-400 cursor-pointer transition-all duration-300 checked:bg-yellow-400 relative before:content-[''] before:absolute before:top-1 before:left-[6px] before:w-1 before:h-2 before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:scale-0 checked:before:scale-100 before:transition-transform before:duration-200"
              />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-yellow-400 text-black font-bold py-5 rounded-2xl text-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
            Sign In →
          </button>

        </div>
      </div>
    </main>
  );
}