import React from 'react';
import { ExternalLink, Github, Mail, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Email Tone Checker',
      description: 'A sophisticated AI-powered application that analyzes email content and determines the emotional tone, helping users communicate more effectively.',
      tech: ['Python', 'AI', 'Machine Learning', 'NLP'],
      github: '#',
      live: '#',
      color: 'from-gray-800 to-gray-900',
      accent: 'from-purple-500 to-purple-600',
      icon: Mail
    },
    {
      title: 'LinuxWorld Internship Project',
      description: 'Live project showcasing practical implementation of AI/ML concepts with real-world applications and industry-standard practices.',
      tech: ['Python', 'Linux', 'AI/ML', 'Data Science'],
      github: '#',
      live: '#',
      color: 'from-green-500 to-green-600',
      accent: 'from-green-400 to-green-500',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          My <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="text-white" size={64} />
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.accent} text-white text-sm rounded-full font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.accent} text-white rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;