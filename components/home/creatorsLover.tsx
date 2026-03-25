'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    titleColor: string;
    image: string;
    text: string;
    stat: string;
    statColor: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Rachel Marie Lawson',
        title: 'Blissful Living 4 U',
        titleColor: 'text-yellow-400',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        text: '"Optimizely Has Been Amazing. They Have Significantly Increased Our YouTube Subscribers And Views For All The Content We Have Working With Them. They Promptly Address Any Questions I Hear, And Their Friendly And Helpful Support Is Excellent Experience When It Comes To YouTube."',
        stat: '+252% YouTube Search Views',
        statColor: 'text-yellow-400',
    },
    {
        id: 2,
        name: 'Robert Stroke',
        title: 'Awareness That Heals',
        titleColor: 'text-yellow-400',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        text: '"The Optimizely Team Are Not Only Creative, Comprehensive And Intelligent In Everything They Promise"',
        stat: '+117% YouTube Search Views',
        statColor: 'text-yellow-400',
    },
    {
        id: 3,
        name: 'Jonathan Breeden',
        title: 'Breeden Law',
        titleColor: 'text-yellow-400',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        text: '"This Company Did Everything That They Promised They Would Do. I Absolutely Recommend Optimizely. They Take Great Care Of My Account And Deliver On Everything They Have Promised"',
        stat: '+284% YouTube Search Views',
        statColor: 'text-yellow-400',
    },
];

export default function CreatorsLover() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const getVisibleTestimonials = () => {
        // Mobile e shudhu ekta card, desktop e 3 ta card
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            return [testimonials[currentIndex]];
        }
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center mb-16"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="w-20 h-20 rounded-full border-2 border-amber-700/60 
               flex items-center justify-center mb-8 bg-neutral-900 
               shadow-[0_0_30px_rgba(255,215,0,0.6)] animate-glow"
                >
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-center mb-4"
                >
                    <span className="text-gradient-gold">CREATORS</span>{' '}
                    <span className="text-white">LOVE US</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className="text-center text-gray-300 text-[15px] md:text-[17px] max-w-2xl leading-relaxed px-4"
                >
                    Join Thousands Of Successful YouTube Creators Who&apos;ve Transformed Their Channels
                    <br className="hidden md:block" />
                    With Optimizely
                </motion.p>
            </motion.div>

            {/* Testimonials Carousel */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex items-center gap-14 relative">
                    {/* Left Arrow - Medium devices e show, mobile e hidden */}
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex absolute -left-4 lg:left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-yellow-600/20 rounded-full transition border border-yellow-600/30 hover:border-yellow-400 items-center justify-center"
                    >
                        <ChevronLeft className="w-5 h-5 text-yellow-400" />
                    </button>

                    <div className="w-full bg-[#0a0a0a] grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            {getVisibleTestimonials().map((testimonial, idx) => {
                                const isCenter = idx === 1;
                                return (
                                    <motion.div
                                        key={testimonial.id}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        className={`relative border border-yellow-600 rounded-lg p-6 md:p-8 bg-[#141414] backdrop-blur
                            transform transition-all duration-500 ease-in-out overflow-hidden
                            ${isCenter ? 'md:scale-105 z-10' : 'scale-100 z-0'} group`}
                                    >
                                        <motion.div
                                            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.7)]"
                                        />

                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 opacity-0 group-hover:opacity-30 transition-all duration-700 blur-3xl pointer-events-none group-hover:w-48 group-hover:h-48"></div>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="absolute -top-3 -right-2 w-12 h-12 text-[#FFC727] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                        </svg>

                                        <div className="flex items-start gap-4 mb-6 relative z-10">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-yellow-600/30 group-hover:ring-yellow-400 transition-all duration-300"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-bold text-white text-sm md:text-base group-hover:text-gradient-gold transition-colors duration-300">{testimonial.name}</h3>
                                                <p className={`${testimonial.titleColor} text-xs md:text-sm font-semibold`}>
                                                    {testimonial.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-1 mb-6 relative z-10">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="text-gray-300 text-[14px] md:text-[16px] leading-relaxed mb-8 min-h-20 relative z-10 group-hover:text-white transition-colors duration-300">
                                            {testimonial.text}
                                        </p>

                                        <button className="w-full border bg-yellow-600/20 border-yellow-600 rounded-lg py-4 md:py-5 px-4 md:px-6 text-yellow-400 font-extrabold text-sm md:text-base hover:bg-yellow-600/20 transition-all duration-300 relative z-10">
                                            {testimonial.stat}
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow - Medium devices e show, mobile e hidden */}
                    <button
                        onClick={handleNext}
                        className="hidden md:flex absolute -right-4 lg:right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-yellow-600/20 rounded-full transition border border-yellow-600/30 hover:border-yellow-400 items-center justify-center"
                    >
                        <ChevronRight className="w-5 h-5 text-yellow-400" />
                    </button>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mb-16">
                {[...Array(testimonials.length)].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`
                transition-all duration-300
                rounded-full
                ${idx === currentIndex
                                ? 'bg-gradient-gold w-3 h-3 md:w-4 md:h-4 shadow-[0_0_10px_rgba(255,215,0,0.7)]'
                                : 'bg-gray-500 w-2 h-2 md:w-2 md:h-2 hover:bg-yellow-400/50'
                            }
            `}
                    />
                ))}
            </div>

            {/* Stats Section */}
            <div className="max-w-3xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="border border-yellow-600 rounded-2xl p-6 md:p-10 bg-[#141414]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-yellow-600">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <p className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">100%</p>
                            <p className="text-gray-300 font-extrabold text-xs md:text-sm">YouTube SEO Compatibility</p>
                        </motion.div>

                        <motion.div
                            className="text-center md:px-8 pt-6 md:pt-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <p className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">2.5K+</p>
                            <p className="text-gray-300 font-extrabold text-xs md:text-sm">Channels Optimized</p>
                        </motion.div>

                        <motion.div
                            className="text-center md:pl-8 pt-6 md:pt-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <p className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">95%</p>
                            <p className="text-gray-300 font-extrabold text-xs md:text-sm">Ranking Success</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}