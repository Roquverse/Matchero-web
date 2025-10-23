import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetail: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  
  // Sample job data - in a real app, this would come from an API
  const jobData = {
    1: {
      companyName: 'Palmpay',
      jobTitle: 'Senior Product Designer',
      location: 'Lagos, Nigeria',
      jobType: 'Remote',
      salary: '$249.7-474k',
      level: 'Senior and Expert level',
      companyLogo: '/palmpay.png',
      heroImage: '/job-hero.png',
      role: {
        description: "We're looking for a Senior Product Designer to join our team and help shape the future of financial services in Africa. You'll work closely with our product and engineering teams to create intuitive, user-centered designs that solve real problems for millions of users.",
        idealCandidate: "The ideal candidate has 5+ years of experience in product design, with a strong portfolio showcasing user-centered design thinking and experience with fintech or financial products."
      },
      responsibilities: [
        "Lead the design of new features and improvements to our mobile and web applications",
        "Conduct user research and usability testing to inform design decisions",
        "Collaborate with product managers and engineers to define product requirements",
        "Create wireframes, prototypes, and high-fidelity designs using Figma"
      ],
      mustHave: [
        "5+ years of experience in product design",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Experience with user research and usability testing",
        "Strong portfolio demonstrating user-centered design thinking"
      ],
      summary: {
        description: "Palmpay is a leading fintech company in Africa, providing digital financial services to millions of users across the continent. We're building the future of financial inclusion, making banking accessible to everyone.",
        roleNature: "This role offers the opportunity to work on products that directly impact millions of users' daily lives, with a focus on creating intuitive, accessible financial tools."
      },
      benefits: [
        "Competitive salary and equity package",
        "Flexible remote work arrangements",
        "Professional development budget and conference attendance"
      ],
      funding: "Palmpay recently raised $50M in Series B funding led by Tiger Global, bringing our total funding to $100M. This investment will fuel our expansion across Africa and the development of new financial products."
    }
  };

  const job = jobData[parseInt(jobId || '1') as keyof typeof jobData] || jobData[1];


  const handleLike = () => {
    console.log('Job liked');
    // Add like logic here
  };

  const handleDislike = () => {
    console.log('Job disliked');
    // Add dislike logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 job-listing-container">
      {/* Header Section */}
      <div className="bg-cyan-20 py-16 job-hero-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
              <li>/</li>
              <li><Link to="/candidate" className="hover:text-gray-900">For jobseekers</Link></li>
              <li>/</li>
              <li><Link to="/jobs" className="hover:text-gray-900">Jobs</Link></li>
              <li>/</li>
              <li className="text-gray-900">{job.jobTitle}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Company Logo and Name */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#8B5CF6' }}>
                  <img src={job.companyLogo} alt={`${job.companyName} Logo`} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-lg font-semibold text-purple-600">{job.companyName}</span>
              </div>

              {/* Job Title */}
              <h1 className="text-display-serif-2-regular text-gray-900 mb-6">
                {job.jobTitle}
              </h1>

              {/* Job Details Bar */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="font-medium">{job.companyName}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{job.location} {job.jobType}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 8v1h-6v4a2 2 0 01-2 2H8.5a2 2 0 01-2-2V9H1V8a5 5 0 0110.5-1 6.97 6.97 0 00-1.5 4.33A5 5 0 0112.93 17z" />
                  </svg>
                  <span>{job.level}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  to="/signup"
                  className="bg-green-100 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-80 transition-colors flex items-center gap-2"
                >
                  Apply to {job.companyName}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <div className="flex gap-2">
                  <button
                    onClick={handleLike}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8l2 2m0 0l2-2m-2 2V8" />
                    </svg>
                  </button>
                  <button
                    onClick={handleDislike}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 8V6m7 8l-2-2m0 0l-2 2m2-2v8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Hero Image
            <div className="job-hero-image-section">
              <div className="job-hero-image-container">
                <img 
                  src={job.heroImage} 
                  alt="Professional looking up" 
                  className="job-hero-image"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDF0F6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,106.7C960,128,1200,192,1320,224L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" className='wave-hero'></path></svg>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 job-content-container" style={{ marginTop: '-350px' }}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Role Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Role</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{job.role.description}</p>
              <p className="text-gray-700 leading-relaxed">{job.role.idealCandidate}</p>
            </div>

            {/* Responsibilities Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Must Have Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Must have</h2>
              <ul className="space-y-3">
                {job.mustHave.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Summary Card */}
            <div className="bg-blue-600 rounded-xl p-6 shadow-sm text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-xl font-bold">Summary</h2>
                </div>
                <span className="text-blue-200 text-xs bg-blue-500 px-2 py-1 rounded">Powered by matchero AI</span>
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">{job.summary.description}</p>
              <p className="text-blue-100 leading-relaxed">{job.summary.roleNature}</p>
            </div>

            {/* Company Benefits Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900">Company benefits</h2>
              </div>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Funding Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900">Funding</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{job.funding}</p>
            </div>
          </div>
        </div>

        {/* Bottom Apply Button */}
        <div className="text-center mt-12">
          <Link
            to="/signup"
            className="bg-green-100 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-80 transition-colors flex items-center gap-2 mx-auto"
          >
            Apply to {job.companyName}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
