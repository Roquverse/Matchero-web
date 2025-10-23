import React, { useState } from 'react';
import JobCard from './JobCard';

const JobListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const jobListings = [
    {
      id: 1,
      companyName: 'Palmpay',
      jobTitle: 'Senior Product Designer',
      location: 'Lagos, Nigeria',
      jobType: 'Remote',
      companyLogo: '/palmpay.png',
      backgroundImage: '/blog1.png'
    },
    {
      id: 2,
      companyName: 'ZOPA',
      jobTitle: 'Senior Security Engineer',
      location: 'United Kingdom, London',
      jobType: 'Hybrid',
      companyLogo: '/zopa.png',
      backgroundImage: '/blog2.png'
    },
    {
      id: 3,
      companyName: 'ZOPA',
      jobTitle: 'Senior Product Designer',
      location: 'Lagos, Nigeria',
      jobType: 'Remote',
      companyLogo: '/zopa.png',
      backgroundImage: '/blog2.png'
    },
    {
      id: 4,
      companyName: 'Google',
      jobTitle: 'Frontend Developer',
      location: 'San Francisco, CA',
      jobType: 'Remote',
      companyLogo: '/partner/Google.png',
      backgroundImage: '/blog1.png'
    },
    {
      id: 5,
      companyName: 'LinkedIn',
      jobTitle: 'UX Researcher',
      location: 'New York, NY',
      jobType: 'Hybrid',
      companyLogo: '/partner/LinkedIn_2021 1.svg',
      backgroundImage: '/blog2.png'
    },
    {
      id: 6,
      companyName: 'Oracle',
      jobTitle: 'Backend Engineer',
      location: 'Austin, TX',
      jobType: 'On-site',
      companyLogo: '/partner/Oracle_logo 1.svg',
      backgroundImage: '/blog1.png'
    },
    {
      id: 7,
      companyName: 'Workday',
      jobTitle: 'Data Scientist',
      location: 'Seattle, WA',
      jobType: 'Remote',
      companyLogo: '/partner/Workday_Logo_0 1.svg',
      backgroundImage: '/blog2.png'
    },
    {
      id: 8,
      companyName: 'BambooHR',
      jobTitle: 'Product Manager',
      location: 'Salt Lake City, UT',
      jobType: 'Hybrid',
      companyLogo: '/partner/338d20c8723f9c93bca1046de48ea40f1e6450be.png',
      backgroundImage: '/blog1.png'
    },
    {
      id: 9,
      companyName: 'Microsoft',
      jobTitle: 'DevOps Engineer',
      location: 'Redmond, WA',
      jobType: 'Hybrid',
      companyLogo: '/partner/Google.png',
      backgroundImage: '/blog2.png'
    }
  ];



  const handleLoadMore = () => {
    console.log('Load more clicked');
    // Add load more logic here
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Add search logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 job-listing-container">
      {/* Header Section */}
      <div className="bg-cyan-20 py-16 job-hero-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-gray-900">Home</a></li>
              <li>/</li>
              <li><a href="/candidate" className="hover:text-gray-900">For jobseekers</a></li>
              <li>/</li>
              <li><a href="/jobs" className="hover:text-gray-900">Jobs</a></li>
              <li>/</li>
              <li className="text-gray-900">Application</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-display-serif-2-regular text-gray-900 mb-4">
                Open roles
              </h1>
              <p className="text-xl-2-regular text-gray-700 mb-8">
                Start a Matchero profile to unlock matches like these
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Press enter to search"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base-regular focus:ring-2 focus:ring-cyan-100 focus:border-cyan-100"
                  />
                </div>
              </form>
            </div>

            {/* Right Hero Image */}
            <div className="job-hero-image-section">
              <div className="job-hero-image-container">
                <img 
                  src="/job-hero.png" 
                  alt="Professional looking up" 
                  className="job-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDF0F6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,106.7C960,128,1200,192,1320,224L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" className='wave-hero'></path></svg>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 job-content-container">
        <h2 className="text-display-serif-2-regular text-gray-900 mb-12">
          Explore open roles
        </h2>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {jobListings.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              location={job.location}
              jobType={job.jobType}
              companyLogo={job.companyLogo}
              backgroundImage={job.backgroundImage}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center border-2 border-gray-900 text-gray-900 bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            Load more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
