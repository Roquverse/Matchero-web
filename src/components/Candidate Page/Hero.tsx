const Hero = () => {

  return (
    <div className="relative hero-section">
      {/* Main Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">  
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8" style={{ width: '461px', height: '471px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-display-serif-1 font-regular text-gray-900 leading-tight" style={{ fontSize: '48px', lineHeight: '56px' }}>
                Your next role,
              </h1>
              <h1 className="text-display-serif-1 font-regular text-gray-900 leading-tight" style={{ fontSize: '48px', lineHeight: '56px' }}>
               <span className="italic">intelligently </span>matched
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 font-regular leading-relaxed max-w-lg" style={{ fontSize: '24px', lineHeight: '32px', fontFamily: 'var(--font-family-sans)' }}>
              No endless job listings. No generic suggestions. We bring you roles that align with your skills, values, and ambition.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center bg-green-100 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-80 transition-colors" style={{ fontSize: '16px', lineHeight: '28px', fontFamily: 'var(--font-family-sans)', width: '60%'}}>
              Join free. Start matching.
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-full rounded-2xl flex items-center justify-center rounded-2xl hero-image" style={{ width: '700px'}}>
                <img src="/hero 2.png" alt="Hero Image" style={{ }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;