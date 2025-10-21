const NextSection = () => {
  return (
    <div className="bg-cyan-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 - Smart screening */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Image Placeholder */}
            <div className="h-64 bg-cyan-100 flex items-center justify-center">
              <div className="text-cyan-100 text-lg font-medium">Image Placeholder</div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart screening, less stress
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use our AI Interviewer tool to prepare, practice, and perform better when you apply.
              </p>
              <button className="inline-flex items-center text-gray-900 border border-gray-900 bg-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors">
                Learn more →
              </button>
            </div>
          </div>

          {/* Card 2 - Onboarding made simple */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Image Placeholder */}
            <div className="h-64 bg-cyan-100 flex items-center justify-center">
              <div className="text-cyan-100 text-lg font-medium">Image Placeholder</div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Onboarding made simple
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Once hired, we provide role-specific guidance to help you start strong.
              </p>
              <button className="inline-flex items-center text-gray-900 border border-gray-900 bg-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors">
                Learn more →
              </button>
            </div>
          </div>

          {/* Card 3 - Growth insights */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Image Placeholder */}
            <div className="h-64 bg-cyan-100 flex items-center justify-center">
              <div className="text-cyan-100 text-lg font-medium">Image Placeholder</div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Growth insights
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                See how you compare, get feedback, and discover where your next steps should be.
              </p>
              <button className="inline-flex items-center text-gray-900 border border-gray-900 bg-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors">
                View features →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NextSection;
