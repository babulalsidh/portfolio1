import React, { useState, useEffect } from 'react';
import { Code, Brain, Terminal, Database } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['C', 'C++', 'Python'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      title: 'Concepts',
      icon: Brain,
      skills: ['DSA', 'AI', 'ML'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100'
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: ['Linux', 'Jupyter', 'Streamlit', 'Notepad'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          My <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl shadow-xl transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`bg-white p-4 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700">{skill}</span>
                      <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full animate-pulse`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;