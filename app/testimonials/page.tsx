'use client';

import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  author: string;
  readTime: string;
  badge?: string;
  featured?: boolean;
}

interface TestimonialsProps {
  posts?: BlogPost[];
  stats?: Array<{ value: string; label: string }>;
}

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    date: '⭐⭐⭐⭐⭐',
    title: 'Avoid These Mistakes That Kill Your YouTube Rankings!',
    description:
      'YouTube Has Become One Of The Most Powerful Platforms For Reaching A Global Audience, But Growing Your Channel Isn\'t...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '2',
    date: '⭐⭐⭐⭐⭐',
    title: 'How To Turn A Low-Performing Video Into A High-Ranking One',
    description:
      'Every Creator Eventually Runs Into A Frustrating Situation: You Upload A Video You Swear Is Packed With Value... Yet It Barely...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '3',
    date: '⭐⭐⭐⭐⭐',
    title: 'How Does The YouTube Algorithm Work?',
    description:
      'If You\'ve Ever Wondered Why Some YouTube Videos Blow Up Overnight While Others Barely Move, You\'re Not Alone. The Secret...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '4',
    date: '⭐⭐⭐⭐⭐',
    title: 'YouTube Keyword Research With Intent: The Smarter Way To Grow Your Channel',
    description:
      'Creating Content Without Strategy Is Like Uploading A Video Into A Void And Hoping It Magically Goes Viral.That\'s Why Smart...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '5',
    date: '⭐⭐⭐⭐⭐',
    title: 'YouTube SEO-Optimized Titles & Descriptions: The Secret To Visibility & Views',
    description:
      'In Today\'s Digital Age, Creating Great Content Isn\'t Enough. You Could Have The Most Engaging, High-Quality Video But If...',
    author: 'Optimizify Team',
    readTime: '5 min',
    featured: true,
  },
  {
    id: '6',
    date: '⭐⭐⭐⭐⭐',
    title: 'The Ultimate Guide To YouTube Search Trends: How To Rank Higher And Get More Views',
    description:
      'The Ultimate Guide To YouTube Search: How To Rank Higher And Get More ViewsYouTube Is The Second Largest Search Engine In The...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '7',
    date: '⭐⭐⭐⭐⭐',
    title: 'White Label YouTube Marketing Agency: The Ultimate Guide To Scaling Your Brand',
    description:
      'White Label YouTube Marketing Agency: The Ultimate Guide To Scaling Your BrandinThe Fast-Evolving Digital Landscape, Businesses...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '8',
    date: '⭐⭐⭐⭐⭐',
    title: 'The Ultimate Guide To YouTube Name Generators: How To Find The Perfect Channel Name',
    description:
      'The Ultimate Guide To YouTube Name GeneratorsHow To Find The Perfect Channel NameIf You\'re Planning To Start A YouTube...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
];

const defaultStats = [
  { value: "1M+", label: "Keywords Ranked" },
  { value: "2.5K+", label: "Channels Optimized" },
  { value: "368%", label: "Rank Increase" },
  { value: "368%", label: "Rank Increase" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Testimonials({ posts = defaultPosts, stats = defaultStats }: TestimonialsProps) {
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // সব পোস্ট দেখাবে
    setDisplayPosts(posts);
  }, [posts]);

  // যদি কোন পোস্ট না থাকে
  if (displayPosts.length === 0) {
    return (
      <section className="w-full bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our <span className="text-yellow-400">Blog</span>
          </h1>
          <p className="text-gray-400">No posts available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Client <span className="text-yellow-400">Success Stories</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover Insights, Tips, And Strategies To Optimize Your Digital Presence. Stay Ahead With Our Latest Thoughts
              On YouTube Growth, SEO, And Digital Marketing.
            </p>

            {/* Stats Section - সম্পূর্ণ gap এবং padding মুক্ত */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 text-center">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-yellow-400 leading-none">{stat.value}</div>
                  <div className="text-gray-400 text-sm leading-none mt-0">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Regular Posts Grid with Stagger Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="h-[400px] relative bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,200,0,0.3)] transition-all duration-300 flex flex-col cursor-pointer p-6">

                  {/* SVG in top right corner */}
                  <div className="absolute top-3 right-3 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#FFC727] opacity-30 group-hover:opacity-70 transition-all duration-300 group-hover:scale-110"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Success Story Badge */}
                      <div className="inline-flex items-center gap-1 bg-yellow-400 text-black px-2 py-0.5 rounded-full w-fit mb-3">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                        <span className="text-xs font-medium">Success Story</span>
                      </div>

                      {/* Date with gold color */}
                      <div className="flex items-center gap-2 text-yellow-400 text-sm mb-3">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {post.date}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-[20px] leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-800 group-hover:border-yellow-400/30 transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold group-hover:scale-110 transition-transform duration-300">
                            O
                          </div>
                          <span className="text-xs text-gray-400">{post.author} • {post.readTime}</span>
                        </div>
                       <Link href={`/testimonials/case/${post.id}`}>
                        <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_8px_rgba(255,215,0,0.4)] group-hover:shadow-[0_0_12px_rgba(255,215,0,0.6)]">
                          Read More →
                        </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        whileHover={{
          boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
          borderColor: "#FFC727",
        }}
        className="border border-gray-700 mt-18 rounded-2xl p-10 bg-[#101010] backdrop-blur text-center max-w-4xl mx-auto "
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Join Our <span className="text-yellow-400">Success Stories</span>?
        </h2>

        <p className="text-gray-400 mb-8 text-base md:text-lg max-w-2xl mx-auto">
          Let's create your next success story together. Start your journey towards digital excellence today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black font-semibold px-14 py-6  rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 w-full sm:w-auto"
          >
            Get Started Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-yellow-400 px-10 py-6 text-yellow-400 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}