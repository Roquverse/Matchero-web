import FeaturesSection from '../components/FeaturesSection';
import VideoSection from '../components/VideoSection';
import WhyMatcheroSection from '../components/WhyMatcheroSection';
import IntegrationsSection from '../components/IntegrationsSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-hero-green">
        
        <div className="flex flex-col lg:flex-row hero-container">
          {/* Left Content Block */}
          <div className="flex-1 flex items-center justify-center p-8 lg:p-16 relative">
            
            <div className="max-w-2xl relative z-10">
              <h1 className="text-6xl font-serif hero-heading mb-4">
                <em>Smarter</em> Hiring, human touch, real results
              </h1>
              <p className="text-2xl text-gray-700 mb-10 leading-relaxed font-sans">
              <b>Matchero</b> helps businesses hire faster and fairer with an all-in-one ATS, AI video interviews, and seamless onboarding.
              </p>
              
              {/* Email Input Group */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-sans"
                />
                <button className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors whitespace-nowrap text-lg font-sans flex items-center">
                  Request demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Privacy Notice */}
              <p className="text-base text-gray-700 mb-8 max-w-md font-sans">
                By clicking "request demo", you agree to the use of your data in accordance with Matchero's{' '}
                <a href="#" className="text-green-700 underline hover:text-green-800">Privacy Notice</a>, 
                including for marketing purposes.
              </p>
              
              {/* Video Link */}
              <div className="flex items-center text-gray-700 hover:text-green-700 cursor-pointer">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="font-medium text-lg font-sans">Watch 1 min video</span>
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="flex-1 relative flex items-center justify-center" >
            <div className="relative w-full">
              {/* Main Image */}
              <div className="relative">
                <img 
                  src="/hero.png"
                  alt="Happy professional woman"
                  className="w-full object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Section */}
      <section className="bg-hero-green py-20">
        <div className="max-w-6xl mx-auto px-8 text-center flex justify-center">
          <h2 className="font-source-serif hero-card-heading">
            A smart 360° hiring ecosystem designed to source, evaluate, and onboard talent smarter, faster, and more effectively.
          </h2>
        </div>
      </section>


      {/* Features Section */}
      <FeaturesSection />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d9f99d" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,106.7C960,128,1200,192,1320,224L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

      {/* Video Section */}
      <VideoSection/>

      {/* Why Matchero Section */}
      <WhyMatcheroSection />

      {/* Integrations Section */}
      <IntegrationsSection />
    </div>
  )
}

export default Home

