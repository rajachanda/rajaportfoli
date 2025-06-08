import React from 'react';
import { ExternalLink, Github, Calendar, Code, Database, Globe, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Eco-Vending Machine",
      description: "An innovative system that incentivizes recycling by offering rewards for depositing recyclable waste, enhancing community engagement and waste collection efficiency.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      features: [
        "Reward system for recycling",
        "Real-time waste tracking",
        "User dashboard and analytics",
        "Community engagement features",
        "Environmental impact metrics"
      ],
      category: "Full-Stack Development",
      status: "Completed",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Blog App",
      description: "A full-stack blogging platform featuring a responsive and visually engaging interface with efficient data handling, user authentication, and robust API management.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      features: [
        "User authentication system",
        "Rich text editor",
        "Comment system",
        "Responsive design",
        "API management",
        "Content moderation"
      ],
      category: "Full-Stack Development",
      status: "Completed",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Movie Box Office Trend Analysis",
      description: "Comprehensive analysis of movie datasets using R and Power BI to visualize box office trends, genre popularity, and revenue patterns with interactive dashboards.",
      technologies: ["R", "Power BI", "Data Analytics"],
      features: [
        "Interactive dashboards",
        "Revenue trend analysis",
        "Genre success metrics",
        "Budget impact visualization",
        "Predictive modeling",
        "Statistical insights"
      ],
      category: "Data Analytics",
      status: "Completed",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Movie Ticket Booking System",
      description: "A comprehensive database system to manage movie schedules, seat availability, and bookings with real-time updates and user-friendly interface.",
      technologies: ["SQL", "Database Design", "System Architecture"],
      features: [
        "Seat selection system",
        "Real-time availability",
        "Booking management",
        "Schedule management",
        "Payment integration",
        "Admin dashboard"
      ],
      category: "Database Management",
      status: "Completed",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Bus Pass Automation",
      description: "A digital platform using the MERN stack to automate the bus pass application process, replacing manual forms and Excel systems for improved efficiency.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      features: [
        "Digital application forms",
        "Admin dashboard",
        "Automated processing",
        "Data management system",
        "Status tracking",
        "Document upload"
      ],
      category: "Full-Stack Development",
      status: "Ongoing",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === "Completed" 
      ? "bg-green-500/20 text-green-400 border-green-500/30" 
      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack Development":
        return <Code className="w-5 h-5" />;
      case "Data Analytics":
        return <Database className="w-5 h-5" />;
      case "Database Management":
        return <Database className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Projects Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects spanning full-stack development, data analytics, and system design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card rounded-2xl overflow-hidden animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        {getCategoryIcon(project.category)}
                        <span className="text-sm text-gray-400">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Code size={20} className="text-blue-400 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start group">
                        <span className="text-blue-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200">•</span>
                        <span className="group-hover:text-white transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <Github size={18} className="mr-2" />
                    View Code
                  </button>
                  {project.status === "Completed" && (
                    <button className="flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105">
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </button>
                  )}
                  {project.status === "Ongoing" && (
                    <button className="flex items-center px-6 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105">
                      <Calendar size={18} className="mr-2" />
                      In Progress
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in My Work?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            I'm always excited to discuss new projects and opportunities. Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/vishwanath-raja-chanda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
            <a
              href="mailto:rajachanda1105@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ExternalLink size={20} className="mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;