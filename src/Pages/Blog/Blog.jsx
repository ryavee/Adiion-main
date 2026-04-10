import React, { useEffect } from 'react';
import blogBanner from './blog-banner.jpg';
import aiAutomation from './ai-automation.jpg';
import saasTrends from './saas-trends.jpg';
import cybersecurity from './cybersecurity.jpg';

const blogPosts = [
  {
    title: 'Revolutionizing Businesses with AI Automation',
    date: 'May 25, 2025',
    summary: 'Explore how AI and machine learning are transforming industries with automation and predictive insights.',
    image: aiAutomation,
  },
  {
    title: 'SaaS Trends to Watch in 2025',
    date: 'May 10, 2025',
    summary: 'From vertical SaaS to no-code platforms, discover the latest SaaS innovations shaping business software.',
    image: saasTrends,
  },
  {
    title: 'Why Cybersecurity Is Non-Negotiable',
    date: 'April 30, 2025',
    summary: 'Learn why every business must prioritize cybersecurity in an increasingly digital-first world.',
    image: cybersecurity,
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif] bg-[#f5f7fa]">

      {/* Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white px-5"
        style={{
          backgroundImage: `url(${blogBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-[2] max-w-[800px]">
          <h1
            className="text-[2.8rem] font-medium mb-[10px]"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
          >
            Insights & Innovations from Adiion
          </h1>
          <p
            className="text-[1.2rem] font-medium text-[#ddd]"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Explore the latest trends, ideas, and updates in tech, automation, and innovation.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-[60px] px-5 max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.4rem] text-[#15157d] mb-10">Latest Articles</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-[5px]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-5">
                <h3 className="text-[1.2rem] text-[#0a0a0a] mb-[10px]">{post.title}</h3>
                <span className="block text-[0.9rem] text-[#888] mb-[10px]">{post.date}</span>
                <p className="text-[1rem] text-[#555] leading-[1.5] mb-[15px]">{post.summary}</p>
                <button className="bg-[#15157d] text-white border-none px-4 py-[10px] rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-[#0f0f63]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blog;