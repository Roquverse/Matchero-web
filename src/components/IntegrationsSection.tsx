import { useEffect, useState } from 'react';

const IntegrationsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const integrations = [
    { name: 'Oracle', logo: '/partner/Oracle_logo 1.svg', alt: 'Oracle' },
    { name: 'LinkedIn', logo: '/partner/LinkedIn_2021 1.svg', alt: 'LinkedIn' },
    { name: 'Workday', logo: '/partner/Workday_Logo_0 1.svg', alt: 'Workday' },
    { name: 'Google Drive', logo: '/partner/Google.png', alt: 'Google Drive' },
    { name: 'BambooHR', logo: '/partner/338d20c8723f9c93bca1046de48ea40f1e6450be.png', alt: 'BambooHR' }
  ];

  // Auto-slide functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % integrations.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [integrations.length]);

  return (
    <section className="bg-blue-50 py-10 relative ">
      {/* Background Map Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100"></div>
      </div>
      
      <div className="mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl integrations-heading mb-4">
            Matchero fits into <em>your</em> workflow
          </h2>
          <p className="text-2xl text-gray-700 font-source-serif integrations-description">
            not the other way around.
          </p>
        </div>

        {/* Desktop: Full Width Layout */}
        <div className="hidden lg:flex items-center justify-between w-full mb-16 px-4">
          {/* Oracle */}
          <div className="flex items-center justify-center flex-1">
            <img src="/partner/Oracle_logo 1.svg" alt="Oracle" className="h-12 object-contain" />
          </div>
          
          {/* LinkedIn */}
          <div className="flex items-center justify-center flex-1">
            <img src="/partner/LinkedIn_2021 1.svg" alt="LinkedIn" className="h-12 object-contain" />
          </div>
          
          {/* Workday */}
          <div className="flex items-center justify-center flex-1">
            <img src="/partner/Workday_Logo_0 1.svg" alt="Workday" className="h-12 object-contain" />
          </div>
          
          {/* Matchero */}
          <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-lg border border-gray-200 mx-8">
            <div className="flex items-center mb-2">
              <img src="/logo.svg" alt="Matchero" className="h-8 object-contain" />
            </div>
            <span className="text-xs text-gray-600 text-center font-source-serif">ATS, Hiring & Onboarding</span>
          </div>
          
          {/* Google Drive */}
          <div className="flex items-center justify-center flex-1">
            <img src="/partner/Google.png" alt="Google Drive" className="h-12 object-contain" />
          </div>
          
          {/* LinkedIn (duplicate) */}
          <div className="flex items-center justify-center flex-1">
            <img src="/partner/LinkedIn_2021 1.svg" alt="LinkedIn" className="h-12 object-contain" />
          </div>

          {/* BambooHR */}
          <div className="flex items-center justify-center flex-1">
            <img src="/partner/338d20c8723f9c93bca1046de48ea40f1e6450be.png" alt="BambooHR" className="h-12 object-contain" />
          </div>
        </div>

        {/* Mobile: Auto-sliding Carousel */}
        <div className="lg:hidden mb-16">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {integrations.map((integration, index) => (
                <div key={index} className="w-full flex-shrink-0 flex items-center justify-center px-8">
                  <img 
                    src={integration.logo} 
                    alt={integration.alt} 
                    className="h-16 object-contain max-w-xs" 
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile Matchero Logo (Centered) */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center mb-2">
                  <img src="/logo.svg" alt="Matchero" className="h-8 object-contain" />
                </div>
                <span className="text-xs text-gray-600 text-center font-source-serif">ATS, Hiring & Onboarding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-sans">
            Our platform connects effortlessly with the tools you already use, from job boards and CRMs to communication platforms and HR software.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            As your team grows, Matchero grows with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
