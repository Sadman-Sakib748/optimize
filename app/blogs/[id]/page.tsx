import { blogPosts } from '@/lib/data/blogData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

// params-কে Promise হিসেবে টাইপ করুন
interface Props {
  params: Promise<{
    id: string;
  }>;
}

// মেটাডাটা জেনারেট করুন
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((item) => item.id === id);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Optimizify Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

// ফাংশনটিকে async করুন এবং params-কে await করুন
export default async function BlogDetails({ params }: Props) {
  // ১. প্রথমে params-কে await করুন
  const { id } = await params;
  console.log('Blog ID:', id);
  
  // ২. তারপর id ব্যবহার করে পোস্ট খুঁজুন
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#0A0A0A] py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* ব্যাক বাটন */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blogs</span>
        </Link>

        {/* হেডার তথ্য */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-yellow-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* ফিচার ইমেজ */}
        {post.image && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden border border-yellow-600/20 shadow-2xl shadow-yellow-600/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        {/* ডেসক্রিপশন */}
        <div className="mb-10">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed border-l-4 border-yellow-400 pl-6 italic">
            {post.description}
          </p>
        </div>

        {/* মূল কন্টেন্ট */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content ? (
            <div className="text-gray-300 leading-relaxed space-y-6">
              {typeof post.content === 'string' 
                ? post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300">
                      {paragraph}
                    </p>
                  ))
                : post.content
              }
            </div>
          ) : (
            <div className="text-gray-400 text-center py-12 border border-gray-800 rounded-xl">
              <p className="text-lg">✨ Content is being prepared ✨</p>
              <p className="text-sm mt-2">Check back soon for the full article!</p>
            </div>
          )}
        </div>

        {/* ব্যাজ থাকলে দেখাবে */}
        {post.badge && (
          <div className="mt-10 inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
            {post.badge}
          </div>
        )}

        {/* রিলেটেড পোস্ট সেকশন */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(item => item.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.id}`}
                  className="group block p-6 bg-[#111111] border border-gray-800 rounded-xl hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/5"
                >
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {relatedPost.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{relatedPost.date}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <div className="mt-4 text-yellow-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read More →
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// generateStaticParams ঠিক আছে
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}