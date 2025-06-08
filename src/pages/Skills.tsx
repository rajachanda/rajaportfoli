import React from 'react';
import { Code, Database, Wrench, BookOpen, Award, Calendar } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={32} />,
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 88 },
        { name: "Python", level: 82 },
        { name: "JavaScript", level: 85 },
        { name: "R", level: 75 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Technologies & Tools",
      icon: <Wrench className="text-green-400\" size={32} />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Node.js", level: 78 },
        { name: "MERN Stack", level: 82 },
        { name: "Flutter", level: 70 },
        { name: "Git/GitHub", level: 88 }
      ]
    },
    {
      title: "Database & Analytics",
      icon: <Database className="text-purple-400" size={32} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "Power BI", level: 75 },
        { name: "Tableau", level: 72 },
        { name: "Data Analysis", level: 80 }
      ]
    },
    {
      title: "Coursework",
      icon: <BookOpen className="text-orange-400\" size={32} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "Database Management Systems", level: 85 },
        { name: "Operating Systems", level: 82 },
        { name: "Software Engineering", level: 80 },
        { name: "Computer Networks", level: 78 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Cybersecurity Course",
      description: "40-hour 'Ready for Cyber Security' course by Microsoft",
      date: "2024",
      icon: "🔒"
    },
    {
      title: "Tableau Training",
      description: "6-week comprehensive online training program",
      date: "2024",
      icon: "📊"
    },
    {
      title: "Java Full Course",
      description: "Complete Java programming course from Springboard",
      date: "2024",
      icon: "☕"
    },
    {
      title: "Android Development",
      description: "Workshop at BITS-Pilani, Hyderabad",
      date: "2025",
      icon: "📱"
    },
    {
      title: "VIZCRAFT Workshop",
      description: "Appreciation certificate from CONVERGENCE 2K23",
      date: "2023",
      icon: "🎨"
    },
    {
      title: "Top 100 Coders",
      description: "Recognition from KRITHOMEDH, VNR VJIET",
      date: "2024",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and programming proficiency
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-blue-500/50 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <section className="animate-fadeInUp">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-yellow-400 mr-4" size={40} />
              <h2 className="text-3xl font-bold text-white">Certifications & Training</h2>
            </div>
            <p className="text-gray-400 text-lg">Professional development and continuous learning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-blue-500/50 card-hover animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">{cert.title}</h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{cert.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 animate-fadeInUp">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Technical Proficiency Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
                <div className="text-gray-300 text-sm">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Technologies & Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Database Systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">6+</div>
                <div className="text-gray-300 text-sm">Certifications</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;