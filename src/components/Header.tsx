const Header = () => {

  return (
<header className="bg-white border-b border-gray-200 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full" style={{padding: '20px 0px'}}>
  <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
    {/* Logo w/ Collapse Button */}
    <div className="flex items-center justify-between">
      <img src="/logo.svg" alt="Matchero Logo" className="w-50 h-50 object-contain"/>

      {/* Collapse Button */}
      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-header-classic-collapse" aria-expanded="false" aria-controls="hs-header-classic" aria-label="Toggle navigation" data-hs-collapse="#hs-header-classic">
          <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      {/* End Collapse Button */}
    </div>
    {/* End Logo w/ Collapse Button */}

    {/* Collapse */}
    <div id="hs-header-classic" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-header-classic-collapse">
      <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
          <a className="p-2 flex items-center text-sm text-blue-600 focus:outline-hidden focus:text-blue-600" href="#" aria-current="page">
            Matchero
          </a>

          <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
            For recruiters
          </a>

          <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
            For jobseekers
          </a>

          {/* Dropdown */}
          <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--adaptive:adaptive] [--is-collapse:true] md:[--is-collapse:false] ">
            <button id="hs-header-classic-dropdown" type="button" className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              Product
              <svg className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-classic-dropdown">
              <div className="py-1 md:px-1 space-y-0.5">
                <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                  About
                </a>

                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                  <button id="hs-header-classic-dropdown-sub" type="button" className="hs-dropdown-toggle w-full py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500">
                    Sub Menu
                    <svg className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:mx-2.5! md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-classic-dropdown-sub">
                    <div className="p-1 space-y-0.5 md:space-y-1">
                      <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                        About
                      </a>

                      <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                        Downloads
                      </a>

                      <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                        Team Account
                      </a>
                    </div>
                  </div>
                </div>

                <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                  Downloads
                </a>

                <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                  Team Account
                </a>
              </div>
            </div>
          </div>
          {/* End Dropdown */}

          <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
            Blog
          </a>

          

          {/* Button Group */}
          <div className="relative flex items-center gap-x-3 md:ps-2.5 mt-1 md:mt-0 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2">
            <a className="p-2 flex items-center justify-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
              <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </a>
            
            <a className="px-4 py-2 flex items-center text-sm text-white bg-green-800 hover:bg-green-900 rounded-lg focus:outline-hidden focus:bg-green-900" href="#">
              <span className="mr-2">Log in</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </a>
          </div>
          {/* End Button Group */}
        </div>
      </div>
    </div>
    {/* End Collapse */}
  </nav>
</header>
  )
}

export default Header

