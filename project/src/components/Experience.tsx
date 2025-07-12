import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'B.Tech in AI & Data Science',
      institution: 'Arya College of Engineering, Jaipur',
      period: '2022 - 2026',
      type: 'education',
      description: 'Specializing in Artificial Intelligence and Data Science with hands-on experience in machine learning projects.',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600'
    },
    {
      title: '12th Grade',
      institution: 'Bharti Niketan School, Rajasthan Board',
      period: '2022',
      type: 'education',
      description: 'Completed higher secondary education with excellent grades.',
      icon: BookOpen,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: '10th Grade',
      institution: 'Shanti Niketan Public School, Rajasthan Board',
      period: '2020',
      type: 'education',
      description: 'Completed secondary education with distinction.',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },

  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Experience & <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-purple-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                    <exp.icon className="text-white" size={24} />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <div className="flex items-center text-gray-600">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-lg font-semibold text-gray-700 mb-2">{exp.institution}</p>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                      
                      <div className="mt-4">
                        <span className={`inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${exp.color} rounded-full`}>
                          {exp.type === 'education' ? 'Education' : 'Experience'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;