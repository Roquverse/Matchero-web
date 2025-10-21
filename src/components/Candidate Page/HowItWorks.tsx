const HowItWorks = () => {
  return (
    <div className="how-it-works py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center" style={{ marginTop: '-250px', gap: '250px' }}>
          
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-full rounded-2xl overflow-hidden" style={{ width: '595px', height: '595px' }}>
                <img 
                  src="/image2.png" 
                  alt="How It Works" 
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: '#f3f4f6', border: '2px solid #d1d5db' }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 htw-text">
            {/* Heading */}
            <h2 className="text-heading-3 font-weight-semibold font-family-serif">
              How It Works
            </h2>

            {/* Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="space-y-2">
                <h3 className="text-xl-semibold font-weight-semibold font-family-sans">
                  Sign up & set your criteria
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tell us what you value—team culture, location, tech stack.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <h3 className="text-xl-semibold font-semibold text-family-sans">
                  Get matched & notified
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our algorithm brings you roles you love.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Accept interview & onboard
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If you get the offer, we guide you into the next chapter.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center border-2 border-gray-900 text-gray-900 bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
              Join free. Start matching.
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
