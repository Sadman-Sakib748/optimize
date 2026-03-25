'use client';

import Image from 'next/image';
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

interface BlogCardsProps {
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    date: 'December 12, 2025',
    title: 'Avoid These Mistakes That Kill Your YouTube Rankings!',
    description: 'YouTube Has Become One Of The Most Powerful Platforms For Reaching A Global Audience, But Growing Your Channel Isn\'t...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '2',
    date: 'November 27, 2025',
    title: 'How To Turn A Low-Performing Video Into A High-Ranking One',
    description: 'Every Creator Eventually Runs Into A Frustrating Situation: You Upload A Video You Swear Is Packed With Value... Yet It Barely...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '3',
    date: 'October 29, 2025',
    title: 'How Does The YouTube Algorithm Work?',
    description: 'If You\'ve Ever Wondered Why Some YouTube Videos Blow Up Overnight While Others Barely Move, You\'re Not Alone. The Secret...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '4',
    date: 'August 8, 2025',
    title: 'YouTube Keyword Research With Intent: The Smarter Way To Grow Your Channel',
    description: 'Creating Content Without Strategy Is Like Uploading A Video Into A Void And Hoping It Magically Goes Viral.That\'s Why Smart...',
    author: 'Optimizify Team',
    readTime: '5 min',
  },
  {
    id: '5',
    date: 'August 8, 2025',
    title: 'YouTube SEO-Optimized Titles & Descriptions: The Secret To Visibility & Views',
    description: 'In Today\'s Digital Age, Creating Great Content Isn\'t Enough. You Could Have The Most Engaging, High-Quality Video But If...',
    author: 'Optimizify Team',
    readTime: '5 min',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bouDbBmDmXzV02Iy21QOHtTDj7y4v2.png',
    featured: true,
  },
  {
    id: '6',
    date: 'February 4, 2025',
    title: 'The Ultimate Guide To YouTube Search Trends: How To Rank Higher And Get More Views',
    description: 'The Ultimate Guide To YouTube Search: How To Rank Higher And Get More ViewsYouTube Is The Second Largest Search Engine In The...',
    author: 'Optimizify Team',
    readTime: '5 min',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD39bInT5rObWD62h4gmeO4E36nyPc.png',
  },
  {
    id: '7',
    date: 'February 4, 2025',
    title: 'White Label YouTube Marketing Agency: The Ultimate Guide To Scaling Your Brand',
    description: 'White Label YouTube Marketing Agency: The Ultimate Guide To Scaling Your BrandinThe Fast-Evolving Digital Landscape, Businesses...',
    author: 'Optimizify Team',
    readTime: '5 min',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD39bInT5rObWD62h4gmeO4E36nyPc.png',
  },
  {
    id: '8',
    date: 'February 4, 2025',
    title: 'The Ultimate Guide To YouTube Name Generators: How To Find The Perfect Channel Name',
    description: 'The Ultimate Guide To YouTube Name GeneratorsHow To Find The Perfect Channel NameIf You\'re Planning To Start A YouTube...',
    author: 'Optimizify Team',
    readTime: '5 min',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD39bInT5rObWD62h4gmeO4E36nyPc.png',
  },
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

export default function BlogCards({ posts = defaultPosts }: BlogCardsProps) {
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // সব পোস্ট দেখাবে, শুধু featured: true বাদ দেবে
    const filtered = posts.filter((post) => !post.featured);
    console.log('Original posts:', posts); // ডিবাগ: সব পোস্ট দেখুন
    console.log('Filtered posts:', filtered); // ডিবাগ: ফিল্টার করা পোস্ট দেখুন
    setDisplayPosts(filtered);
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our <span className="text-yellow-400">Blog</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover Insights, Tips, And Strategies To Optimize Your Digital Presence. Stay Ahead With Our Latest Thoughts
            On YouTube Growth, SEO, And Digital Marketing.
          </p>
        </motion.div>

        {/* Regular Posts Grid with Stagger Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayPosts.map((post, index) => {
            // ডিবাগ: প্রতিটি পোস্টের id চেক করুন
            console.log(`Post ${index}:`, post.id, post.title);
            
            return (
              <motion.div
                key={post.id || index}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Link href={`/blogs/${post.id}`}>
                  <div className={`${post.image ? 'h-[600px]' : 'h-96'} bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-colors duration-300 flex flex-col cursor-pointer p-3 gap-5`}>
                    {/* Image - only if post has image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden bg-gray-900">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>

                      <h3 className="text-[24px] font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.description}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">
                            O
                          </div>
                          <span className="text-xs text-gray-400">{post.author}</span>
                        </div>
                        <span className="bg-yellow-400 text-black px-5 py-2 rounded-full text-base font-semibold hover:bg-yellow-500 transition-colors">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}