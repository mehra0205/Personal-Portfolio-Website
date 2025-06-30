import React from 'react';
import { GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Black and Green Textured Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated geometric pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>
        
        {/* Green accent lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-600 to-transparent opacity-20"></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-15"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-green-300 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-50 animate-bounce"></div>
        </div>

        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.03'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z'/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-semibold text-emerald-400">Rohan Mehra</span>, a passionate Front-End Web Developer and a B.Tech student specializing in Computer Science with Artificial Intelligence and Machine Learning at KIET Group of Institutions. I completed my schooling at DAV Public School, Noida.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm currently deepening my skills in front-end development while transitioning toward full-stack web development. With a strong foundation in design thinking and a keen eye for UI/UX, I enjoy building clean, user-centered digital experiences.
            </p>

            <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-6 rounded-xl border-l-4 border-emerald-500 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Career Goals</h3>
                  <p className="text-gray-300">
                    I aim to become a proficient Full-Stack Developer, blending my front-end expertise with back-end technologies to build scalable web applications. I'm also interested in cloud computing, API integration, and real-world software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-500/20 hover:shadow-emerald-500/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Education</h3>
                  <p className="text-gray-400">Current & Background</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <p className="font-medium">B.Tech - CS with AI/ML</p>
                  <p className="text-gray-400">KIET Group of Institutions</p>
                </div>
                <div>
                  <p className="font-medium">High School</p>
                  <p className="text-gray-400">DAV Public School, Noida</p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-500/20 hover:shadow-emerald-500/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Passions</h3>
                  <p className="text-gray-400">What drives me</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Clean, accessible web design</li>
                <li>• User experience optimization</li>
                <li>• Modern development practices</li>
                <li>• Problem-solving through code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;