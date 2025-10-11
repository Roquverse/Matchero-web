const VideoSection = () => {
  return (
    <section className="bg-white py-20 video-section">
      <div className="max-w-6xl mx-auto px-8">
      
        {/* Header */}
        <div className="text-center mb-16 video-top-container">
          <h2 className="mb-6 font-source-serif video-section-heading">
            Hiring reimagined
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-sans video-section-description">
            See how Matchero transforms the recruitment journey from job posting to onboarding in a single platform.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative mx-auto video-player-container">
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Background */}
            <div className="relative h-[500px] lg:h-[600px]">
              <img 
                src="/video.png"
                alt="Professional woman with laptop"
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group">
                  
                  <span className="text-lg font-semibold text-gray-900">Watch 1 min video</span>
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-green-800 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
