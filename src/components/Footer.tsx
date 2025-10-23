import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const isNonHome = location.pathname !== '/'
  const bgClass = isNonHome ? 'bg-white' : 'bg-green-20'
  const logoSrc = isNonHome ? '/blue-logo.svg' : '/logo.svg'

  return (
    <footer className={`${bgClass} py-16`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Logo and Email Form */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-8">
              <img src={logoSrc} alt="Matchero" className="w-30 h-30" />
            </div>

            {/* Email Form */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base font-sans"
                />
                <button className="btn-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors whitespace-nowrap font-sans flex items-center">
                  Request demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-6 max-w-md">
                By clicking "request demo", you agree to the use of your data in accordance with Matchero's{' '}
                <a href="#" className="text-green-700 underline hover:text-green-800">Privacy Notice</a>, 
                including for marketing purposes.
              </p>
              
              {/* Video Link */}
              <div className="flex items-center text-gray-700 hover:text-green-700 cursor-pointer">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="font-medium text-base font-sans">Watch 1 min video</span>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Recruiters */}
            <div className="footer-text">
              <h3 className="text-base semibold mb-4">For recruiters</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Sourcing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Decision-Making</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Candidate Experience</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Onboarding</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">AI</a></li>
              </ul>
            </div>

            {/* For Jobseekers */}
            <div className="footer-text">
              <h3 className="text-base semibold mb-4">For jobseekers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">How it works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Live jobs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Interview Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Upskill</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Sign up</a></li>
              </ul>
            </div>

            {/* Product */}
            <div className="footer-text">
              <h3 className="text-base semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Overview</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Get in touch</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;