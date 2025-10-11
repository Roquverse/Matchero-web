import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: "Decision-Making",
      description: "Make fair, data-driven hiring decisions.",
    },
    {
      title: "Sourcing",
      description: "Find and engage top talent faster.",
    },
    {
      title: "Candidate Experience",
      description: "Deliver smooth, branded journeys.",
    },
    {
      title: "Onboarding",
      description: "Get new hires productive from day one.",
    },
    {
      title: "Integrations",
      description: "Connect easily with your existing tools.",
    },
    {
      title: "AI",
      description: "Automate tasks and uncover hidden insights.",
    },
  ];

  return (
    <section className="bg-hero-green py-10 pb-32 md:pb-10 relative features-section">
      {/* Blue vertical line */}
      <div className="absolute top-0 left-1/2 w-1 h-10 bg-green-700 divider-line"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
