import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isNonHome = location.pathname !== '/';
  const isHomeActive = location.pathname === '/';
  const isCandidateActive = location.pathname.startsWith('/candidate');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200" style={{padding: '20px 0px'}}>
      <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={isNonHome ? '/blue-logo.svg' : '/logo.svg'} alt="Matchero Logo" className="w-50 h-50 object-contain"/>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              ) : (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6"/>
                  <line x1="3" x2="21" y1="12" y2="12"/>
                  <line x1="3" x2="21" y1="18" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block overflow-hidden transition-all duration-300 basis-full grow`}>
          <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
            <Link to="/" className={`p-2 flex items-center text-sm ${isHomeActive ? 'text-blue-600' : 'text-gray-800 hover:text-gray-500'} focus:outline-none`} aria-current="page">
              Matchero
            </Link>

            <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
              For recruiters
            </a>

            <Link to="/candidate" className={`p-2 flex items-center text-sm ${isCandidateActive ? 'text-blue-600' : 'text-gray-800 hover:text-gray-500'} focus:outline-none`}>
              For jobseekers
            </Link>

            <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
              Product
            </a>

            <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
              Blog
            </a>

            {/* Button Group */}
            <div className="relative flex items-center gap-x-3 md:ps-2.5 mt-1 md:mt-0 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2">
              <a className="p-2 flex items-center justify-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </a>
              
              <a className="px-4 py-2 flex items-center text-sm text-white bg-green-800 hover:bg-green-900 rounded-lg focus:outline-none focus:bg-green-900" href="#">
                <span className="mr-2 text-white">Log in</span>
                <svg className="shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header