// lib/data/blogData.ts

export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    date: 'December 12, 2025',
    title: 'Avoid These Mistakes That Kill Your YouTube Rankings!',
    description: 'YouTube Has Become One Of The Most Powerful Platforms For Reaching A Global Audience, But Growing Your Channel Isn\'t...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2>Introduction</h2>
      <p>YouTube has become one of the most powerful platforms for reaching a global audience, but growing your channel isn't just about uploading videos. Many creators make critical mistakes that hurt their rankings without even realizing it.</p>
      
      <h2>Mistake #1: Ignoring SEO</h2>
      <p>The biggest mistake creators make is ignoring SEO. Your video might be great, but if nobody can find it, it won't matter. You need to optimize your titles, descriptions, and tags for search.</p>
      
      <h2>Mistake #2: Poor Thumbnails</h2>
      <p>Thumbnails are the first thing viewers see. If your thumbnail doesn't grab attention, people will scroll past your video. Make sure your thumbnails are custom, high-quality, and relevant to your content.</p>
      
      <h2>Conclusion</h2>
      <p>Avoid these mistakes and you'll be on your way to better YouTube rankings. Remember, success on YouTube takes time and consistency.</p>
    `
  },
  {
    id: '2',
    date: 'November 27, 2025',
    title: 'How To Turn A Low-Performing Video Into A High-Ranking One',
    description: 'Every Creator Eventually Runs Into A Frustrating Situation: You Upload A Video You Swear Is Packed With Value... Yet It Barely...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2>Understanding Why Videos Underperform</h2>
      <p>Every creator eventually runs into a frustrating situation: you upload a video you swear is packed with value... yet it barely gets any views.</p>
      
      <h2>Step 1: Analyze Your Analytics</h2>
      <p>Start by diving deep into YouTube Analytics. Look at your click-through rate (CTR) and average view duration.</p>
      
      <h2>Step 2: Optimize Your Thumbnail and Title</h2>
      <p>If your CTR is low, the issue is likely your thumbnail and title. A/B test different options to see what resonates.</p>
    `
  },
  {
    id: '3',
    date: 'October 29, 2025',
    title: 'How Does The YouTube Algorithm Work?',
    description: 'If You\'ve Ever Wondered Why Some YouTube Videos Blow Up Overnight While Others Barely Move, You\'re Not Alone. The Secret...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2>The YouTube Algorithm Explained</h2>
      <p>If you've ever wondered why some YouTube videos blow up overnight while others barely move, you're not alone.</p>
      
      <h2>Key Ranking Factors</h2>
      <p>The algorithm considers several factors: watch time, click-through rate, audience retention, and engagement.</p>
    `
  },
  {
    id: '4',
    date: 'August 8, 2025',
    title: 'YouTube Keyword Research With Intent: The Smarter Way To Grow Your Channel',
    description: 'Creating Content Without Strategy Is Like Uploading A Video Into A Void And Hoping It Magically Goes Viral.That\'s Why Smart...',
    author: 'Optimizify Team',
    readTime: '5 min',
    content: `
      <h2>Why Keyword Intent Matters</h2>
      <p>Creating content without strategy is like uploading a video into a void and hoping it magically goes viral.</p>
      
      <h2>Types of Search Intent</h2>
      <p>There are four main types of search intent: informational, navigational, commercial, and transactional.</p>
    `
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
    content: `
      <h2>The Power of SEO on YouTube</h2>
      <p>In today's digital age, creating great content isn't enough. You could have the most engaging video but if nobody can find it, it won't matter.</p>
      
      <h2>Crafting SEO-Friendly Titles</h2>
      <p>Your title should include your target keyword naturally, create curiosity, and promise value.</p>
    `
  },
  {
    id: '6',
    date: 'February 4, 2025',
    title: 'The Ultimate Guide To YouTube Search Trends: How To Rank Higher And Get More Views',
    description: 'The Ultimate Guide To YouTube Search: How To Rank Higher And Get More ViewsYouTube Is The Second Largest Search Engine In The...',
    author: 'Optimizify Team',
    readTime: '5 min',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD39bInT5rObWD62h4gmeO4E36nyPc.png',
    content: `
      <h2>Understanding YouTube Search</h2>
      <p>YouTube is the second largest search engine in the world, after Google.</p>
      
      <h2>Current Search Trends</h2>
      <p>Stay updated with what people are searching for in your niche.</p>
    `
  },
  {
    id: '7',
    date: 'February 4, 2025',
    title: 'White Label YouTube Marketing Agency: The Ultimate Guide To Scaling Your Brand',
    description: 'White Label YouTube Marketing Agency: The Ultimate Guide To Scaling Your BrandinThe Fast-Evolving Digital Landscape, Businesses...',
    author: 'Optimizify Team',
    readTime: '5 min',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD39bInT5rObWD62h4gmeO4E36nyPc.png',
    content: `
      <h2>What is White Label YouTube Marketing?</h2>
      <p>White label YouTube marketing allows agencies to offer YouTube services under their own brand.</p>
    `
  },
  {
    id: '8',
    date: 'February 4, 2025',
    title: 'The Ultimate Guide To YouTube Name Generators: How To Find The Perfect Channel Name',
    description: 'The Ultimate Guide To YouTube Name GeneratorsHow To Find The Perfect Channel NameIf You\'re Planning To Start A YouTube...',
    author: 'Optimizify Team',
    readTime: '5 min',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD39bInT5rObWD62h4gmeO4E36nyPc.png',
    content: `
      <h2>Why Your Channel Name Matters</h2>
      <p>Your channel name sets the tone for your brand and helps viewers remember you.</p>
    `
  }
];