import React from 'react';
import { Heart, Code, Palette, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const techStack = [
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Palette },
    { name: 'JavaScript', icon: Zap },
    { name: 'React', icon: Code }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Built with modern technologies</h3>
            <div className="flex justify-center space-x-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon size={20} />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>© {currentYear} Babulal Sidh</span>
              <span>|</span>
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using HTML, CSS, JS</span>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>Designed and developed with passion for clean code and beautiful UI</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;