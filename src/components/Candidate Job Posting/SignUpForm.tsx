import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidate sign up</h1>
      <p className="text-gray-600 mb-8">
        Already a member? <Link to="/login" className="text-green-100 underline">Login here.</Link>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Your first name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-100 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Your last name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-100 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="name@company.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-100 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-100 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
            Confirm password *
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-100 transition-colors"
            required
          />
        </div>

        <div className="text-sm text-gray-600">
          <p>
            By signing up you agree to our{' '}
            <Link to="/terms" className="text-green-100 underline">Terms and Conditions</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-green-100 underline">Privacy Policy</Link>
            {' '}and to receive further email communications from Matchero. You can opt out anytime.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-green-100 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-80 transition-colors"
        >
          Get started now
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
