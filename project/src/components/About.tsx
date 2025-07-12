import React from 'react';
import { BookOpen, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            About <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Education Journey</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Hi, I'm Babulal Sidh from Shri Dunaghar, Bikaner. I passed my 10th in 2020 from Shanti Niketan Public School and 12th in 2022 from Bharti Niketan School, both under the Rajasthan Board.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="text-pink-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Current Focus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I'm currently pursuing a B.Tech in AI & Data Science at Arya College of Engineering, Jaipur, diving deep into the fascinating world of artificial intelligence and machine learning.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Heart className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Personal Philosophy</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I enjoy reading spiritual and self-development books. My strength lies in doing hard work, soft work, and smart work — whatever the situation demands.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl text-gray-400">📚</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;