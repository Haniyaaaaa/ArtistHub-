import React, { useState } from 'react';
import { User } from '../types/Artist';

interface SignupModalProps {
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    role: 'creator',
    profession: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    // Handle signup logic here
    alert('Thank you for signing up! We will contact you soon.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Join ArtistsHub</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              I am a...
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                formData.role === 'creator' 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}>
                <input
                  type="radio"
                  name="role"
                  value="creator"
                  checked={formData.role === 'creator'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    formData.role === 'creator' ? 'border-indigo-500 bg-indigo-500' : 'border-gray-400'
                  }`}></div>
                  <span className="font-medium">Creator</span>
                </div>
              </label>
              
              <label className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                formData.role === 'hiring' 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}>
                <input
                  type="radio"
                  name="role"
                  value="hiring"
                  checked={formData.role === 'hiring'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    formData.role === 'hiring' ? 'border-indigo-500 bg-indigo-500' : 'border-gray-400'
                  }`}></div>
                  <span className="font-medium">Hiring</span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profession
            </label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            >
              <option value="">Select your profession</option>
              <option value="graphic-designer">Graphic Designer</option>
              <option value="architect">Architect</option>
              <option value="fashion-designer">Fashion Designer</option>
              <option value="Textile-designer">Textile Designer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;