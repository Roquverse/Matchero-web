import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import VideoSection from '../components/VideoSection';
import WhyMatcheroSection from '../components/WhyMatcheroSection';
import IntegrationsSection from '../components/IntegrationsSection';
import BlogSection from '../components/BlogSection';
import "../components/Styles/index.css"

const Home = () => {
  return (
    <div className="bg-white relative">
      {/* Hero Section */}
      <Hero />

      {/* Mid-Section */}
      <section className="bg-green-20 py-20">
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

      {/* Blog Section */}
      <BlogSection />
    </div>
  )
}

export default Home

