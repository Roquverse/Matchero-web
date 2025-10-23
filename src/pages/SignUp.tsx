import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/Candidate Job Posting/SignUpForm';
import FAQAccordion from '../components/Candidate Job Posting/FAQAccordion';

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyan-20">
      {/* Header Section */}
      <div className="bg-cyan-20 py-16">
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
              <li className="text-cyan-100">Sign up</li>
            </ol>
          </nav>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Sign Up Form */}
            <div>
              <SignUpForm />
            </div>

            {/* Right Column - FAQ Accordion */}
            <div>
              <FAQAccordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
