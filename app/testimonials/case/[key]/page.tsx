'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  content?: string;
}

// লোকাল ডাটা (একই ডাটা টেস্টিমোনিয়ালস পেজ থেকে)
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    date: '⭐⭐⭐⭐⭐',
    title: 'Avoid These Mistakes That Kill Your YouTube Rankings!',
    description: 'YouTube Has Become One Of The Most Powerful Platforms For Reaching A Global Audience, But Growing Your Channel Isn\'t...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
      <p class="text-gray-300 mb-4">YouTube has become one of the most powerful platforms for reaching a global audience. With over 2 billion logged-in monthly users, it's the second largest search engine in the world. But growing your channel isn't just about uploading videos—it's about strategy, consistency, and understanding the algorithm.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Common Mistakes to Avoid</h2>
      <p class="text-gray-300 mb-4">Many creators make critical mistakes that kill their YouTube rankings. Here are the most common ones:</p>
      <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong class="text-yellow-400">Ignoring SEO:</strong> Not optimizing titles, descriptions, and tags</li>
        <li><strong class="text-yellow-400">Inconsistent Upload Schedule:</strong> The algorithm favors consistent creators</li>
        <li><strong class="text-yellow-400">Poor Thumbnails:</strong> Your thumbnail is the first thing viewers see</li>
        <li><strong class="text-yellow-400">Not Engaging with Audience:</strong> Comments matter for engagement metrics</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">How to Fix These Issues</h2>
      <p class="text-gray-300">The good news is that all these mistakes are fixable. Start by conducting proper keyword research, create a content calendar, invest time in thumbnail design, and always respond to comments.</p>
    `
  },
  {
    id: '2',
    date: '⭐⭐⭐⭐⭐',
    title: 'How To Turn A Low-Performing Video Into A High-Ranking One',
    description: 'Every Creator Eventually Runs Into A Frustrating Situation: You Upload A Video You Swear Is Packed With Value... Yet It Barely...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Problem with Low-Performing Videos</h2>
      <p class="text-gray-300 mb-4">Every creator eventually runs into a frustrating situation: you upload a video you swear is packed with value... yet it barely gets any views. This is more common than you think, and often it's not about the content quality but about optimization.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Step-by-Step Revival Strategy</h2>
      <p class="text-gray-300 mb-4">Here's how to turn that low-performing video into a ranking machine:</p>
      <ol class="list-decimal list-inside text-gray-300 mb-4 space-y-2">
        <li><strong class="text-yellow-400">Audit Your Title and Thumbnail:</strong> A/B test different options</li>
        <li><strong class="text-yellow-400">Optimize Description:</strong> Add timestamps and keywords</li>
        <li><strong class="text-yellow-400">Update Tags:</strong> Research and add relevant tags</li>
        <li><strong class="text-yellow-400">Promote in Communities:</strong> Share in relevant subreddits and Facebook groups</li>
      </ol>
    `
  },
  {
    id: '3',
    date: '⭐⭐⭐⭐⭐',
    title: 'How Does The YouTube Algorithm Work?',
    description: 'If You\'ve Ever Wondered Why Some YouTube Videos Blow Up Overnight While Others Barely Move, You\'re Not Alone. The Secret...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Understanding the Algorithm</h2>
      <p class="text-gray-300 mb-4">If you've ever wondered why some YouTube videos blow up overnight while others barely move, you're not alone. The secret lies in understanding how the YouTube algorithm actually works.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Key Factors</h2>
      <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong class="text-yellow-400">Watch Time:</strong> The most important metric</li>
        <li><strong class="text-yellow-400">Click-Through Rate (CTR):</strong> How often people click your video</li>
        <li><strong class="text-yellow-400">Audience Retention:</strong> How much of the video people watch</li>
        <li><strong class="text-yellow-400">Engagement:</strong> Likes, comments, and shares</li>
      </ul>
    `
  },
  {
    id: '4',
    date: '⭐⭐⭐⭐⭐',
    title: 'YouTube Keyword Research With Intent: The Smarter Way To Grow Your Channel',
    description: 'Creating Content Without Strategy Is Like Uploading A Video Into A Void And Hoping It Magically Goes Viral.That\'s Why Smart...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Why Keyword Research Matters</h2>
      <p class="text-gray-300 mb-4">Creating content without strategy is like uploading a video into a void and hoping it magically goes viral. That's why smart creators start with keyword research.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Understanding Search Intent</h2>
      <p class="text-gray-300 mb-4">There are four types of search intent:</p>
      <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong class="text-yellow-400">Informational:</strong> Users want to learn something</li>
        <li><strong class="text-yellow-400">Navigational:</strong> Users want to find a specific channel</li>
        <li><strong class="text-yellow-400">Transactional:</strong> Users want to buy something</li>
        <li><strong class="text-yellow-400">Commercial Investigation:</strong> Users research before buying</li>
      </ul>
    `
  }
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function TestimonialCasePage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // params.key থেকে আইডি বের করা
    const id = params.key as string;
    
    // পোস্ট খুঁজে বের করা
    const foundPost = defaultPosts.find(p => p.id === id);
    setPost(foundPost || null);
    setLoading(false);
  }, [params.key]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Success Story Not Found</h1>
          <p className="text-gray-400 mb-8">The success story you're looking for doesn't exist.</p>
          <Link 
            href="/testimonials" 
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Success Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/testimonials" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Success Stories
            </Link>
          </motion.div>

          {/* Content */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
          >
            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-400 text-2xl mb-6">
              {post.date}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-800">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                  {post.author[0]}
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} read</span>
              </div>
            </div>

            {/* Description */}
            <div className="text-xl text-gray-300 leading-relaxed mb-8 italic border-l-4 border-yellow-400 pl-6">
              {post.description}
            </div>

            {/* Main Content */}
            {post.content && (
              <div 
                className="text-gray-300 space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}

            {/* Related/Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 p-8 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl border border-yellow-400/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-gray-400 mb-6">
                Join hundreds of creators who've transformed their YouTube channels with our strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/testimonials" 
                  className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Read More Stories
                </Link>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}