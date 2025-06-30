import React from 'react';
import { Code, Brain, Users, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'emerald',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js (Learning)', 'Responsive Web Design', 'UI/UX Prototyping (Figma, Adobe XD)', 'Tailwind CSS (Learning)']
    },
    {
      title: 'Programming Languages',
      icon: Brain,
      color: 'green',
      skills: ['C (Intermediate)', 'Python (Beginner)']
    },
    {
      title: 'Tools & Technologies',
      icon: GitBranch,
      color: 'teal',
      skills: ['Git & GitHub (Version Control)', 'Figma', 'Adobe XD']
    },
    {
      title: 'Additional Skills',
      icon: Users,
      color: 'lime',
      skills: ['Project & Time Management', 'Public Speaking & Team Collaboration', 'Communication & Presentation']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      green: 'bg-green-500/20 text-green-400 border-green-500/30',
      teal: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
      lime: 'bg-lime-500/20 text-lime-400 border-lime-500/30'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-emerald-500/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-500/20"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${colorClasses.split(' ')[0]} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.split(' ')[1]}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClasses} hover:shadow-md transition-shadow duration-200 backdrop-blur-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;