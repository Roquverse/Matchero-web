import React from 'react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id: number;
  companyName: string;
  jobTitle: string;
  location: string;
  jobType: string;
  companyLogo: string;
  backgroundImage: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  companyName,
  jobTitle,
  location,
  jobType,
  companyLogo,
  backgroundImage
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      {/* Image with Logo Overlay */}
      <div className="relative">
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <img 
            src={backgroundImage} 
            alt={`${companyName} Team`} 
            className="w-full h-full object-cover"
            style={{ backgroundColor: '#f3f4f6' }}
          />
        </div>
        {/* Logo Overlay */}
        <div className="absolute top-4 left-4 flex items-center justify-center" style={{ width: '70px', height: '70px', borderRadius: '10px', backgroundColor: '#00c8b4' }}>
          <img src={companyLogo} alt={`${companyName} Logo`} className="object-cover rounded-lg"/>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {companyName}
        </h3>
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          {jobTitle}
        </h4>
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span style={{fontWeight: '600'}}>{location} • </span> 
          <span style={{paddingLeft: '5px'}}>{jobType}</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link 
            to="/signup"
            className="flex-1 bg-cyan-100 text-white px-4 py-2 rounded-lg text-base-semibold hover:bg-cyan-80 transition-colors duration-200 flex items-center justify-center"
          >
            Match me
          </Link>
          <Link 
            to={`/jobs/${id}`}
            className="flex-1 border border-gray-300 text-green-100 px-4 py-2 rounded-lg text-base-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-1"
            style={{ fontSize: '16px', fontWeight: '700', color: '#3A6202'}}
          >
            View role →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
