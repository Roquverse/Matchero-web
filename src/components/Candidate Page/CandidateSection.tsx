import { Link } from 'react-router-dom';

const CandidateSection = () => {
  return (
    <div className="candidate-sections">
    <div className="top-section relative">
      {/* Profile Pictures Scattered Across Map */}
      
      {/* North America East Coast - with speech bubble */}
      <div className="absolute" style={{ top: '5%', left: '8%' }}>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
            <img 
              src="/headshots/headie1.png" 
              alt="East Coast Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Speech Bubble */}
          <div className="absolute top-0 left-16 bg-white rounded-lg" style={{ width: '240px', height: '93px', marginTop: '-25px', padding: '20px' }}>
            <p style={{ fontSize: '18px', fontWeight: '400', fontFamily: 'var(--font-family-sans)' }}>Congratulations</p>
            <p style={{ fontSize: '14px', fontWeight: '400', fontFamily: 'var(--font-family-sans)' }}>We are offering you the role!</p>
          </div>
        </div>
      </div>

      {/* North America Midwest */}
      <div className="absolute" style={{ top: '30%', left: '18%' }}>
        <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
          <img 
            src="/headshots/headie3.png" 
            alt="Midwest Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Caribbean/Northern South America */}
      <div className="absolute" style={{ top: '39%', left: '12%' }}>
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
          <img 
            src="/headshots/headie2.png" 
            alt="Caribbean Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

         {/* Caribbean/Northern South America */}
      <div className="absolute" style={{ top: '58%', left: '20%' }}>
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
          <img 
            src="/headshots/headie4.png" 
            alt="Caribbean Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Europe (United Kingdom) */}
      <div className="absolute" style={{ top: '23%', left: '45%' }}>
        <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
          <img 
            src="/headshots/headie5.png" 
            alt="UK Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* North Africa (Morocco/Algeria) */}
      <div className="absolute" style={{ top: '38%', left: '45%' }}>
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
          <img 
            src="/headshots/headie6.png" 
            alt="North Africa Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* West Africa (Nigeria/Niger) */}
      <div className="absolute" style={{ top: '53%', left: '50%', zIndex: '1' }}>
        <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
          <img 
            src="/headshots/headie7.png" 
            alt="West Africa Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* West Africa (Nigeria/Niger) */}
      <div className="absolute" style={{ top: '53%', left: '51%' }}>
        <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden">
          <img 
            src="/headshots/headie8.png" 
            alt="West Africa Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side Content - Dark Text Over Map */}
      <div className="relative z-10 flex items-center justify-end">
        <div className="max-w-2xl mr-8 lg:mr-16" style={{ marginTop: '180px' }}>
          <h1 className="text-display-serif-2-regular text-gray-900 mb-6">
            Multi-Language Access
          </h1>
          <h3 className="text-xl-2-regular text-gray-700 mb-4">
            Designed for global talent — English, French, and Spanish supported at launch.
          </h3>
          <p className="text-gray-700 font-regular leading-relaxed mb-8">
            Tell us what you value—team culture, location, tech stack.
          </p>
          <button className="inline-flex items-center border-2 border-gray-900 text-gray-900 bg-white px-8 py-4 rounded-lg text-base-semibold hover:bg-gray-900 hover:text-white transition-colors">
            Join free. Start matching.
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '40px' }}>
        
        {/* Heading */}
        <div className="mb-12" style={{ zIndex: '9999' }}>
          <h2 className="text-display-serif-2-regular text-gray-900">
            Explore open roles
          </h2>
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1 - Palmpay */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Image with Logo Overlay */}
            <div className="relative">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/blog1.png" 
                  alt="Palmpay Team" 
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: '#f3f4f6' }}
                />
              </div>
              {/* Logo Overlay */}
              <div className="absolute top-4 left-4 flex items-center justify-center" style={{ width: '70px', height: '70px', borderRadius: '10px' }}>
                    <img src="/palmpay.png" alt="Palmpay Logo" className="object-cover rounded-lg"/>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Palmpay
              </h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Senior Product Designer
              </h4>
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span style={{fontWeight: '600'}}>Lagos, Nigeria • </span> <span style={{paddingLeft: '5px'}}>Remote</span>
              </div>
              <button className="" style={{ fontSize: '16px', fontWeight: '700', color: '#3A6202'}}>
                View role →
              </button>
            </div>
          </div>

          {/* Card 2 - ZOPA */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Image with Logo Overlay */}
            <div className="relative">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/blog2.png" 
                  alt="ZOPA Team" 
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: '#f3f4f6' }}
                />
              </div>
              {/* Logo Overlay */}
              <div className="absolute top-4 left-4 flex items-center justify-center bg-teal-600" style={{ width: '70px', height: '70px', borderRadius: '10px', backgroundColor: '#00c8b4' }}>
                    <img src="/zopa.png" alt="ZOPA Logo" className="object-cover rounded-lg"/>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ZOPA
              </h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Senior Security Engineer
              </h4>
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span style={{fontWeight: '600'}}>Lagos, Nigeria • </span> <span style={{paddingLeft: '5px'}}>Remote</span>
              </div>
              <button className="" style={{ fontSize: '16px', fontWeight: '700', color: '#3A6202'}}>
                View role →
              </button>
            </div>
          </div>

          {/* Card 3 - ZOPA (Second) */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Image with Logo Overlay */}
            <div className="relative">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/blog2.png" 
                  alt="ZOPA Team" 
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: '#f3f4f6' }}
                />
              </div>
              {/* Logo Overlay */}
              <div className="absolute top-4 left-4 flex items-center justify-center" style={{ width: '70px', height: '70px', borderRadius: '10px', backgroundColor: '#00c8b4' }}>
                    <img src="/zopa.png" alt="ZOPA Logo" className="object-cover rounded-lg"/>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ZOPA
              </h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Senior Product Designer
              </h4>
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span style={{fontWeight: '600'}}>Lagos, Nigeria • </span> <span style={{paddingLeft: '5px'}}>Remote</span>
              </div>
              <button className="" style={{ fontSize: '16px', fontWeight: '700', color: '#3A6202'}}>
                View role →
              </button>
            </div>
          </div>

        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/jobs"
            className="inline-flex items-center border-2 border-gray-900 text-gray-900 bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            View all open roles →
          </Link>
        </div>
        </div>
    </div>
  );
};

export default CandidateSection;