import "./Header.css";
const Header = () => {
  return (
    <header className="w-full bg-white py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              {/* Snowflake-like icon */}
              <img src="/logo.svg" alt="Logo" className="w-30" />
            </a>
          </div>

          {/* Navigation, Search, and Login - Right Side */}
          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 nav-links">
              <a href="/" className="text-gray-700 hover:text-cyan-100 transition-colors">Matchero</a>
              <a href="/recruiters" className="text-gray-700 hover:text-cyan-100 transition-colors">For recruiters</a>
              <a href="/jobseekers" className="text-cyan-100 font-medium">For jobseekers</a>
              
              {/* Product Dropdown */}
              <div className="relative">
                <button className="text-gray-700 hover:text-cyan-100 transition-colors flex items-center space-x-1">
                  <span>Product</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <a href="/blog" className="text-gray-700 hover:text-cyan-100 transition-colors">Blog</a>
            </div>

            {/* Search Icon */}
            <button className="p-2 text-gray-700 hover:text-cyan-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Log in Button */}
            <button className="inline-flex items-center space-x-2 bg-green-100 text-white px-4 py-2 rounded-lg hover:bg-green-80 transition-colors">
              <span>Log in</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-cyan-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
