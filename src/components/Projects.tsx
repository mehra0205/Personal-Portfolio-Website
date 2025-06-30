import React from 'react';
import { ExternalLink, Github, Heart, Bus } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sanjeevni – Smart Healthcare Web App',
      description: 'A complete hospital management solution that revolutionizes healthcare delivery with modern web technologies.',
      icon: Heart,
      features: [
        'Patient self-check-in & queue tracking',
        'Doctor availability & appointment booking',
        'Blood bank request & management',
        'Medical record history access',
        '24x7 ambulance request system',
        'Admin dashboard for resource management'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'Figma', 'React (Planned)'],
      role: 'UI/UX Designer & Front-End Developer',
      color: 'red',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      title: 'BuddyBus – Smart Travel Companion',
      description: 'A web platform that improves college transport by offering comprehensive travel management solutions.',
      icon: Bus,
      features: [
        'Real-time bus tracking & schedules',
        'Student route planning',
        'Emergency support feature',
        'Admin & driver panel'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      role: 'Designer & Front-End Contributor',
      additionalWork: 'Pitch deck, research paper & Figma UI created',
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-emerald-500/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-500/20 overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-white/90 text-sm">{project.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-colors border border-emerald-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Work */}
                  {project.additionalWork && (
                    <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/20">
                      <p className="text-sm text-gray-300">
                        <span className="font-medium text-emerald-400">Additional Work:</span> {project.additionalWork}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;