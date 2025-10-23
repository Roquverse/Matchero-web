import { useState } from 'react';
import PrelineModal from './PrelineModal';
import PrelineAlert from './PrelineAlert';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <section className="bg-green-20 hero-section">
        {/* Left Content Block */}
        <div className="hero-content">
          <div className="hero-frame">
            <h1>
              <em>Smarter</em> Hiring, h<b>uman touch,</b> real results
            </h1>
            <p className="hero-description">
              <b>Matchero</b> helps businesses hire faster and fairer with an all-in-one ATS, AI video interviews, and seamless onboarding.
            </p>
            
            {/* Email Input Group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base-regular"
              />
              <button 
                className="btn-preline-primary px-8 py-4 whitespace-nowrap"
                onClick={() => setShowModal(true)}
              >
                Request demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Privacy Notice */}
            <p className="privacy-notice">
              By clicking "request demo", you agree to the use of your data in accordance with Matchero's{' '}
              <a href="#" className="text-green-700 underline hover:text-green-800">Privacy Notice</a>, 
              including for marketing purposes.
            </p>
            
            {/* Video Link */}
            <div 
              className="flex items-center text-gray-700 hover:text-green-700 cursor-pointer"
              onClick={() => setShowAlert(true)}
            >
              <span className="hero-video">Watch 1 min video</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" stroke="#020617" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Image Collage */}
        <div className="hero-image-container">
            {/* Main Image */}
            <div className="hero-image">
                <img src="/hero.png" alt="Happy professional woman" />
            </div>
        </div>

        {/* Preline Components Demo */}
        {showAlert && (
          <div className="fixed top-4 right-4 z-50 max-w-sm">
            <PrelineAlert
              type="info"
              title="Video Coming Soon!"
              message="Our demo video is currently in production. Stay tuned for an amazing showcase of Matchero's capabilities!"
              onClose={() => setShowAlert(false)}
            />
          </div>
        )}

        <PrelineModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Request Demo"
          footer={
            <div className="flex gap-x-2">
              <button
                type="button"
                className="btn-preline-secondary px-4 py-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-preline-primary px-4 py-2"
                onClick={() => {
                  setShowModal(false);
                  setShowAlert(true);
                }}
              >
                Submit Request
              </button>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="input-preline"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="input-preline"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="input-preline"
                rows={3}
                placeholder="Tell us about your hiring needs..."
              />
            </div>
          </div>
        </PrelineModal>
      </section>
    );
  };
  
  export default Hero;
