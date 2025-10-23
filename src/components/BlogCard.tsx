import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  readMoreText?: string;
  onReadMore?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  readMoreText = "Read article",
  onReadMore
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg feature-card-container">
      {/* Blog Image */}
      <div className="feature-card-image">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full br-3 object-cover"
        />
      </div>
      
      {/* Blog Content */}
      <div className="feature-card-content">
        <h3 className="text-xl semibold mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-base regular mb-4 line-clamp-3">
          {description}
        </p>
        <button 
          onClick={onReadMore}
          className="text-green-100 font-semibold text-base hover:text-green-80 transition-colors duration-200 flex items-center gap-1"
        >
          {readMoreText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
