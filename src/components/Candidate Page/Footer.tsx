const Footer = () => {
  return (
    <footer className="bg-white border-t border-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Section - Company Info & Call to Action */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.svg" alt="" />
            </div>

            {/* Email Input & Button */}
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:border-cyan-100"
              />
              <button className="bg-green-100 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-80 transition-colors flex items-center gap-2">
                Request demo
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-600 leading-relaxed">
              By clicking "request demo", you agree to the use of your data in accordance with Matchero's{' '}
              <span className="underline cursor-pointer">Privacy Notice</span>, including for marketing purposes.
            </p>

            {/* Video Link */}
            <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
              <span className="font-medium">Watch 1 min video</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Column 1: For recruiters */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">For recruiters</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sourcing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Decision-Making</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Candidate Experience</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Onboarding</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">AI</a></li>
              </ul>
            </div>

            {/* Column 2: For jobseekers */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">For jobseekers</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Live jobs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Interview Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Upskill</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sign up</a></li>
              </ul>
            </div>

            {/* Column 3: Product */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Overview</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Get in touch</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="border-t border-cyan-100"></div>
    </footer>
  );
};

export default Footer;
