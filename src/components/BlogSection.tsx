import React from 'react';
import BlogCard from './BlogCard';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      title: "5 Ways AI Is Transforming Recruitment in Africa",
      description: "Discover how artificial intelligence is revolutionizing the hiring process across Africa, making recruitment more efficient and inclusive.",
      readMoreText: "Read article"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=face",
      title: "Why Startups Need Smarter Hiring Tools to Scale Fast",
      description: "Learn why modern startups require intelligent hiring solutions to grow rapidly and build high-performing teams.",
      readMoreText: "Read article"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=face",
      title: "Why Job Seekers Should Care About AI Interviews",
      description: "Understand how AI-powered interviews are changing the job search landscape and what candidates need to know.",
      readMoreText: "Read article"
    }
  ];

  const handleReadMore = (postId: number) => {
    console.log(`Read more clicked for post ${postId}`);
    // Add navigation logic here
  };

  const handleViewFullBlog = () => {
    console.log('View full blog clicked');
    // Add navigation to full blog page
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xl-2">
            Matchero insights and latest advice:
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              readMoreText={post.readMoreText}
              onReadMore={() => handleReadMore(post.id)}
            />
          ))}
        </div>

        {/* View Full Blog Button */}
        <div className="text-center">
          <button
            onClick={handleViewFullBlog}
            className="flex justify-center items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-base-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
          >
            View full blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;