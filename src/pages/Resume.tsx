import React from 'react';
import { Download, Eye, Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // This would typically link to your actual resume PDF
    alert('Resume download functionality would be implemented here with your actual PDF file.');
  };

  const handleViewOnline = () => {
    // This would typically open your resume in a new tab
    alert('Online resume viewer would be implemented here.');
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download or view my complete resume with detailed information about my experience and qualifications
          </p>
        </div>

        {/* Resume Actions */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get My Resume</h2>
            <p className="text-gray-300">
              Access my complete resume in PDF format or view it online
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download size={20} className="mr-2" />
              Download PDF
            </button>
            <button
              onClick={handleViewOnline}
              className="flex items-center justify-center px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Eye size={20} className="mr-2" />
              View Online
            </button>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Phone className="text-blue-400 mx-auto mb-2" size={24} />
              <p className="text-gray-300 text-sm">Phone</p>
              <p className="text-white font-medium">8885648652</p>
            </div>
            <div className="text-center">
              <Mail className="text-blue-400 mx-auto mb-2" size={24} />
              <p className="text-gray-300 text-sm">Email</p>
              <p className="text-white font-medium">rajachanda1105@gmail.com</p>
            </div>
            <div className="text-center">
              <Linkedin className="text-blue-400 mx-auto mb-2" size={24} />
              <p className="text-gray-300 text-sm">LinkedIn</p>
              <p className="text-white font-medium">vishwanath-raja-chanda</p>
            </div>
            <div className="text-center">
              <MapPin className="text-blue-400 mx-auto mb-2" size={24} />
              <p className="text-gray-300 text-sm">Location</p>
              <p className="text-white font-medium">Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Resume Summary */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Resume Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Summary */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Education</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• B.Tech CSE, VNR VJIET (CGPA: 9.45)</li>
                <li>• Class 12: 973/1000 marks</li>
                <li>• Class 10: Perfect GPA (10/10)</li>
              </ul>
            </div>

            {/* Key Skills */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Core Competencies</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Full-Stack Development (MERN)</li>
                <li>• Data Analysis & Visualization</li>
                <li>• Database Management</li>
                <li>• Software Engineering Principles</li>
              </ul>
            </div>

            {/* Recent Achievements */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Recent Achievements</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 2nd Prize - HACK4SDG Hackathon (IIT Hyderabad)</li>
                <li>• TS EAMCET Rank: 2359</li>
                <li>• JEE Mains: 96.5 percentile</li>
                <li>• Multiple certifications completed</li>
              </ul>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Leadership & Activities</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Vice Chairperson - XploR-XR Club</li>
                <li>• Active Volunteer - CSI SBC</li>
                <li>• Multiple club memberships</li>
                <li>• Event coordination experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Interested in learning more about my background and experience?
          </p>
          <a
            href="mailto:rajachanda1105@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} className="mr-2" />
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;