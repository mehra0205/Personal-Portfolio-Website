import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'm.rohan8907@gmail.com',
      href: 'mailto:m.rohan8907@gmail.com',
      color: 'emerald'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9560904113',
      href: 'tel:+919560904113',
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, Uttar Pradesh, India',
      href: '#',
      color: 'teal'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohan-mehra-8818b4266',
      color: 'emerald'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mehra0205',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss opportunities to work together and create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const colorClasses = getColorClasses(item.color);
                  
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg shadow-md hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-200 group border border-emerald-500/20"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                        <p className="text-lg text-white font-semibold">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  const colorClasses = getColorClasses(social.color);
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gradient-to-r ${colorClasses} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-emerald-500/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing teams. 
                Whether you have a specific project in mind or just want to connect, I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:m.rohan8907@gmail.com"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send me an email</span>
                </a>
                
                {/* Resume Download */}
                <div className="pt-4 border-t border-emerald-500/20">
                  <p className="text-sm text-gray-400 mb-3">Want to know more about my experience?</p>
                  <button className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;