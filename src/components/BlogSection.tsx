const BlogSection = () => {
  const articles = [
    {
      title: "5 Ways AI Is Transforming Recruitment in Africa",
      description: "Discover how artificial intelligence is revolutionizing the hiring process across African markets.",
      image: "/blog/ai-recruitment-africa.jpg",
      author: "Featured Article"
    },
    {
      title: "Why Startups Need Smarter Hiring Tools to Scale Fast",
      description: "Learn how modern recruitment technology can accelerate your startup's growth.",
      image: "/blog/startup-hiring-tools.jpg",
      author: "Growth Tips"
    },
    {
      title: "Why Job Seekers Should Care About AI Interviews",
      description: "Understanding how AI-powered interviews can benefit your job search journey.",
      image: "/blog/ai-interviews-jobseekers.jpg",
      author: "Career Advice"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-source-serif text-gray-900 mb-4">
            Matchero insights and latest advice:
          </h2>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 blog-card-heading">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed blog-card-description">
                  {article.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
                >
                  Read article →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Blog Button */}
        <div>
          <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-lg">
            View full blog →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
