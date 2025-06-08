import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Home = () => {
  const [downloadError, setDownloadError] = useState(false);

  const handleResumeDownload = async () => {
    try {
      const resumeUrl = '/resume.pdf';  // Changed path

      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error('Resume not found');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'VishwanathRajaChanda_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadError(true);
      setTimeout(() => setDownloadError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 animate-fadeInUp">
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300">
              <img
                src="/profile.jpg"  // Changed path
                alt="Vishwanath Raja Chanda"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.currentTarget.src = '/profile-fallback.jpg';  // Changed path
                }}
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent animate-fadeInUp animation-delay-200">
            Vishwanath Raja Chanda
          </h1>
          
          <div className="space-y-4 mb-8 animate-fadeInUp animation-delay-400">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 font-light">
              Aspiring Software Developer
            </p>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creative and Collaborative Learner | Computer Science Student
            </p>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Innovative problem-solver passionate about emerging technologies and impactful projects
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp animation-delay-600">
            <Link
              to="/projects"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <ExternalLink size={20} />
              <span>View My Projects</span>
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </Link>
            <button
              className={`group border-2 ${
                downloadError ? 'border-red-500 text-red-400' : 'border-gray-500 text-gray-400'
              } hover:bg-gray-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}
              onClick={handleResumeDownload}
            >
              <Download size={20} />
              <span>{downloadError ? 'Resume Not Available' : 'Download Resume'}</span>
            </button>
          </div>

          {/* Social Links in Hero Section */}
          <div className="flex justify-center space-x-8 mb-12 animate-fadeInUp animation-delay-800">
            <a
              href="https://github.com/rajachanda"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <Github size={32} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vishwanath-raja-chanda-43888a28b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <Linkedin size={32} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:rajachanda1105@gmail.com"
              className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <Mail size={32} />
              <span className="sr-only">Email</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-blue-400 mx-auto opacity-75" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Key Highlights</h2>
            <p className="text-gray-400 text-lg">Academic excellence and technical achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gray-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-600/50 transition-all duration-300 transform hover:scale-105 border border-gray-600/30">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">9.45</h3>
              <p className="text-gray-300 font-medium">Current CGPA</p>
              <p className="text-gray-500 text-sm mt-1">B.Tech CSE</p>
            </div>
            
            <div className="text-center bg-gray-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-600/50 transition-all duration-300 transform hover:scale-105 border border-gray-600/30">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">5+</h3>
              <p className="text-gray-300 font-medium">Projects Completed</p>
              <p className="text-gray-500 text-sm mt-1">Full-Stack & Analytics</p>
            </div>
            
            <div className="text-center bg-gray-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-600/50 transition-all duration-300 transform hover:scale-105 border border-gray-600/30">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">2359</h3>
              <p className="text-gray-300 font-medium">TS EAMCET Rank</p>
              <p className="text-gray-500 text-sm mt-1">State Level</p>
            </div>
            
            <div className="text-center bg-gray-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-600/50 transition-all duration-300 transform hover:scale-105 border border-gray-600/30">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">96.5%</h3>
              <p className="text-gray-300 font-medium">JEE Mains</p>
              <p className="text-gray-500 text-sm mt-1">Percentile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievement Spotlight */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">🏆 Recent Achievement</h2>
              <p className="text-xl text-blue-200 mb-2">2nd Prize Winner</p>
              <p className="text-lg text-gray-300 mb-6">HACK4SDG Hackathon at IIT Hyderabad (October 2024)</p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                Learn More About My Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image Section */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img
                src="/rajaportfoli/profile.jpg"
                alt="Raja Chanda"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.currentTarget.src = '/rajaportfoli/profile-fallback.jpg';
                }}
              />
            </div>

            {/* Profile Info Section */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Raja Chanda</h1>
              <h2 className="text-2xl text-blue-600 mb-6">Full Stack Developer</h2>
              <p className="text-lg text-gray-600 mb-6">
                Passionate developer with expertise in React, TypeScript, and modern web technologies.
              </p>
              
              {/* Social Links in Profile Section */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://github.com/rajachanda" className="text-gray-700 hover:text-blue-600">
                  <Github size={24} />
                </a>
                <a href="mailto:rajachanda1105@gmail.com" className="text-gray-700 hover:text-blue-600">
                  <Mail size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vishwanath-raja-chanda-43888a28b/" className="text-gray-700 hover:text-blue-600">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;