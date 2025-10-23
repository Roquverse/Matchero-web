import FeatureCard from '../FeatureCard';

const NextSection = () => {
  const features = [
    {
      id: 1,
      title: "Smart screening, less stress",
      description: "Use our AI Interviewer tool to prepare, practice, and perform better when you apply.",
      buttonText: "Learn more →",
      imageContent: (
        <div className="h-64 bg-cyan-100 flex items-center justify-center">
          <div className="text-cyan-100 text-lg font-medium">Image Placeholder</div>
        </div>
      )
    },
    {
      id: 2,
      title: "Onboarding made simple",
      description: "Once hired, we provide role-specific guidance to help you start strong.",
      buttonText: "Learn more →",
      imageContent: (
        <div className="h-64 bg-cyan-100 flex items-center justify-center">
          <div className="text-cyan-100 text-lg font-medium">Image Placeholder</div>
        </div>
      )
    },
    {
      id: 3,
      title: "Growth insights",
      description: "See how you compare, get feedback, and discover where your next steps should be.",
      buttonText: "View features →",
      imageContent: (
        <div className="h-64 bg-cyan-100 flex items-center justify-center">
          <div className="text-cyan-100 text-lg font-medium">Image Placeholder</div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-cyan-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageContent={feature.imageContent}
              buttonText={feature.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextSection;
