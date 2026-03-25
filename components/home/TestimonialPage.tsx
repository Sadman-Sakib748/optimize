'use client';
import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            quote:
                "I've Been Incredibly Impressed. The Increase In Views For My Podcast Since Optimizify Got Involved Has Been Remarkable. Thousands Of Views, Far Beyond What It Used To Receive. Equally Important, There's Been A Consistent Rise In Subscribers. Every Day, I See New Subscribers Joining. Which Matters Even More Than The View Count. I'm Extremely Grateful And Truly Appreciate Optimizify For Their Impact.",
            name: 'Bob Gatty',
            role: 'Podcaster & Commentator',
            achievement: '+187% YouTube Search Views',
        },
        {
            quote:
                "Optimizify Completely Changed The Growth Of My Channel. Engagement Has Skyrocketed And I’m Seeing Real Results Every Single Week.",
            name: 'Sarah Johnson',
            role: 'YouTube Creator',
            achievement: '+210% Engagement Rate',
        },
        {
            quote:
                "From Optimization To Strategy, Everything Was Handled Professionally. My Audience Growth Is Now Consistent And Predictable.",
            name: 'Michael Lee',
            role: 'Content Strategist',
            achievement: '+320% Subscriber Growth',
        },
    ];

    const testimonial = testimonials[currentSlide];

    const slideAnim = {
        hidden: { opacity: 0, x: 60 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -60, transition: { duration: 0.4 } },
    };

    return (
        <div className="relative mt-10 my-5    min-h-screen bg-[#0F0F0F] text-white flex flex-col items-center justify-center px-4 overflow-hidden">

            <div className="w-full max-w-7xl">

                {/* Badge */}
                <div className="flex justify-center mb-12 mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm md:text-base flex items-center gap-2 font-medium"
                    >
                        ⭐ Customer Success Stories
                    </motion.div>
                </div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-4"
                >
                    <span className="text-white block">What Our</span>
                    <span className="text-yellow-400 block">Creators Say</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-gray-300 mb-12 text-base md:text-lg"
                >
                    Join Thousands Of Creators Who've Transformed Their Channels With Optimizify
                </motion.p>

                {/* Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ boxShadow: "0 0 8px rgb(255, 204, 0)" }}
                    className="relative w-full max-w-7xl mx-auto border border-yellow-500 rounded-3xl p-6 md:p-10 mb-12 bg-[#2E2E2E] backdrop-blur overflow-hidden"
                >

                    {/* Floating Circles (ORIGINAL STYLE) */}
                    <motion.div
                        className="absolute left-5 bottom-5 w-20 h-20 rounded-full blur-5xl pointer-events-none z-0"
                        style={{ backgroundColor: '#FFD166', opacity: 0.35 }}
                        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut'
                        }}
                    />

                    <motion.div
                        className="absolute right-10 top-5 w-20 h-20 rounded-full blur-4xl pointer-events-none z-0"
                        style={{ backgroundColor: '#06D6A0', opacity: 0.35 }}
                        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut'
                        }}
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            variants={slideAnim}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="relative z-10"
                        >

                            {/* Stars */}
                            <div className="flex justify-center gap-2 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={24}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-center text-gray-200 italic text-base md:text-lg leading-relaxed mb-8">
                                "{testimonial.quote}"
                            </p>

                            {/* Creator Info */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">

                                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                        {testimonial.name
                                            .split(" ")
                                            .map(word => word[0])
                                            .join("")}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.role} • {testimonial.achievement}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="flex justify-center items-center gap-3 mt-8 relative z-10">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-3 w-3 rounded-full transition-all duration-300 ${currentSlide === index
                                        ? 'bg-yellow-400 scale-110'
                                        : 'bg-gray-600 hover:bg-gray-400'
                                    }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ boxShadow: "0 0 8px rgb(255, 204, 0)" }}
                    className="border border-gray-600 rounded-2xl mb-12  mt-12 p-8 md:p-12 bg-[#191919] text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Need A Custom Solution?
                    </h2>

                    <p className="text-gray-300 mb-6 text-sm md:text-base">
                        Let's Discuss Your Specific Requirements And Create A Tailored Plan
                        For Your Unique Needs.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
                    >
                        Contact Sales
                    </motion.button>
                </motion.div>

            </div>
        </div>
    );
}