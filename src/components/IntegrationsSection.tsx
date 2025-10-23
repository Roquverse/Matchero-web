import { useEffect, useState } from 'react';

interface Integration {
  name: string;
  logo: string;
  alt: string;
  isMatchero?: boolean;
}

const IntegrationsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const integrations: Integration[] = [
    { name: 'Oracle', logo: '/partner/Oracle_logo 1.svg', alt: 'Oracle' },
    { name: 'LinkedIn', logo: '/partner/LinkedIn_2021 1.svg', alt: 'LinkedIn' },
    { name: 'Workday', logo: '/partner/Workday_Logo_0 1.svg', alt: 'Workday' },
    { name: 'Google Drive', logo: '/partner/Google.png', alt: 'Google Drive' },
    { name: 'BambooHR', logo: '/partner/338d20c8723f9c93bca1046de48ea40f1e6450be.png', alt: 'BambooHR' }
  ];

  // Create a centered array with Matchero in the middle
  const getDisplayIntegrations = (): Integration[] => {
    const middleIndex = Math.floor(integrations.length / 2);
    const beforeMatchero = integrations.slice(0, middleIndex);
    const afterMatchero = integrations.slice(middleIndex);
    
    return [
      ...beforeMatchero,
      { name: 'Matchero', logo: '/logo.svg', alt: 'Matchero', isMatchero: true },
      ...afterMatchero
    ];
  };

  // Auto-slide functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % integrations.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [integrations.length]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    // Pause auto-slide (this would need to be implemented with a ref to the interval)
  };

  const handleMouseLeave = () => {
    // Resume auto-slide
  };

  return (
    <section className="bg-blue-50 py-10 relative ">
      {/* Background Map Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100"></div>
      </div>
      
      <div className="mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl-2 integrations-heading mb-4">
            Matchero fits into <em>your</em> workflow
          </h2>
          <p className="text-base integrations-description">
            not the other way around.
          </p>
        </div>

        {/* Desktop: Full Width Layout */}
        <div className="hidden lg:flex items-center justify-between w-full mb-16 px-4">
          {getDisplayIntegrations().map((integration, index) => (
            <div key={index} className="flex items-center justify-center flex-1">
              {integration.isMatchero ? (
                <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-lg border border-gray-200 mx-8">
                  <div className="flex items-center mb-2">
                    <img src={integration.logo} alt={integration.alt} className="h-8 object-contain" />
                  </div>
                  <span className="text-xs text-gray-600 text-center font-source-serif">ATS, Hiring & Onboarding</span>
                </div>
              ) : (
                <img 
                  src={integration.logo} 
                  alt={integration.alt} 
                  className="h-12 object-contain" 
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Auto-sliding Carousel */}
        <div className="lg:hidden mb-16">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
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
            
            {/* Mobile Slider Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {integrations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-green-100' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mx-auto integrations-footer">
          <p className="text-base regular font-sans">
            Our platform connects effortlessly with the tools you already use, from job boards and CRMs to communication platforms and HR software.
          </p>
          <p className="text-base regular bold font-sans">
            As your team grows, Matchero grows with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
