const WhyMatcheroSection = () => {
  const features = [
    {
      title: "Africa-First Approach",
      description: "Built with English and French support. NDPR-ready compliance. and mobile-friendly design for emerging markets."
    },
    {
      title: "360° Hiring Ecosystem",
      description: "From sourcing to onboarding, everything lives in one intuitive platform."
    },
    {
      title: "Human-Centric Automation",
      description: "AI works alongside recruiters to accelerate, not replace, human decision-making."
    },
    {
      title: "Scalable for All Teams",
      description: "Whether you're a startup, agency, or enterprise, Matchero adapts to your growth."
    },
    {
      title: "Transparent & Trusted",
      description: "Every score, decision, and data point is structured, auditable, and designed to inspire confidence."
    }
  ];

  return (
    <section className="bg-blue-50 py-20 relative overflow-hidden">
      {/* Background Map Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 font-source-serif why-matchero-heading">
            Why Matchero?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                  <img src="/check.svg" alt="" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3  why-content-heading">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed why-content-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {features.slice(3).map((feature, index) => (
              <div key={index + 3} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                <img src="/check.svg" alt="" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 why-content-heading">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed why-content-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMatcheroSection;





