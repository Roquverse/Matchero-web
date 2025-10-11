interface FeatureCardProps {
  title: string;
  description: string;
  imageContent?: React.ReactNode;
}

const FeatureCard = ({ title, description, imageContent }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg">
      <div className="h-48 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
        {imageContent}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="w-50 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
        View features →
      </button>
    </div>
  );
};

export default FeatureCard;
