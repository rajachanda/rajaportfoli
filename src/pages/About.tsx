import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Computer Science student with a drive for innovation and problem-solving
          </p>
        </div>

        {/* Career Objective */}
        <section className="mb-16 bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="text-blue-400 mr-4" size={32} />
            <h2 className="text-2xl font-bold text-white">Career Objective</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Innovative and driven Computer Science student with a passion for problem-solving and development. 
            Eager to contribute to impactful projects by leveraging creativity and critical thinking. 
            Committed to continuous learning and thriving in collaborative environments. 
            Aspiring to join a forward-thinking organization to apply expertise in emerging technologies.
          </p>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="text-blue-400 mr-4" size={32} />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          
          <div className="space-y-6">
            {/* Current Education */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <span className="text-gray-400 text-sm">September 2023 - Present</span>
              </div>
              <p className="text-gray-300 mb-2">VNR Vignana Jyothi Institute of Engineering and Technology</p>
              <p className="text-gray-400">CGPA: 9.45 | Hyderabad</p>
            </div>

            {/* Class 12 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">
                  Class 12 - Board of Intermediate Education, Telangana
                </h3>
                <span className="text-gray-400 text-sm">June 2021 - May 2023</span>
              </div>
              <p className="text-gray-300 mb-2">Sri Guru College</p>
              <p className="text-gray-400">Marks: 973/1000 | Hyderabad</p>
            </div>

            {/* Class 10 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">
                  Class 10 - State Board of Secondary Education
                </h3>
                <span className="text-gray-400 text-sm">June 2020 - May 2021</span>
              </div>
              <p className="text-gray-300 mb-2">SPR School of Excellence</p>
              <p className="text-gray-400">GPA: 10 | Nalgonda</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="text-blue-400 mr-4" size={32} />
            <h2 className="text-2xl font-bold text-white">Key Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🏆 HACK4SDG Hackathon</h3>
              <p className="text-gray-300">Secured 2nd prize at IIT Hyderabad (October 2024)</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 TS EAMCET 2023</h3>
              <p className="text-gray-300">Achieved rank 2359 in state-level examination</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🎯 JEE Mains</h3>
              <p className="text-gray-300">Achieved 96.5 percentile in national entrance exam</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🌟 GDGC Solution Challenge</h3>
              <p className="text-gray-300">Selected for final round (February 2024)</p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Personal Interests & Strengths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Hobbies</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Designing & Creative Arts</li>
                <li>• Singing & Music</li>
                <li>• Podcast & Movie Enthusiast</li>
                <li>• Technology Innovation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Core Strengths</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Communication Skills</li>
                <li>• Leadership & Team Management</li>
                <li>• Creative Problem Solving</li>
                <li>• Public Speaking & Negotiation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;