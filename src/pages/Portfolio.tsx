import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter, Smartphone, Globe, Palette, Settings, MessageCircle, Send } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Somaliland E-Commerce Platform',
      category: 'website',
      description: 'Complete e-commerce solution for local businesses with payment integration and inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'Hargeisa Shopping Center',
      year: '2024',
      gradient: 'from-blue-600 to-indigo-700',
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'app',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Biometric Auth'],
      client: 'Somaliland Bank',
      year: '2024',
      gradient: 'from-emerald-600 to-teal-700'
    },
    {
      id: 3,
      title: 'Restaurant Brand Identity',
      category: 'design',
      description: 'Complete brand identity design including logo, menu design, and marketing materials.',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      client: 'Hargeisa Grill House',
      year: '2024',
      gradient: 'from-purple-600 to-pink-700'
    },
    {
      id: 4,
      title: 'Hospital Management System',
      category: 'system',
      description: 'Comprehensive hospital management system with patient records, appointments, and billing.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'MySQL', 'Vue.js'],
      client: 'Hargeisa General Hospital',
      year: '2023',
      gradient: 'from-cyan-600 to-blue-700'
    },
    {
      id: 5,
      title: 'IT Infrastructure Setup',
      category: 'support',
      description: 'Complete IT infrastructure setup including network configuration, security, and maintenance.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Network Setup', 'Security', 'Cloud Migration'],
      client: 'Somaliland University',
      year: '2023',
      gradient: 'from-orange-600 to-red-700'
    },
    {
      id: 6,
      title: 'Education Portal Website',
      category: 'website',
      description: 'Online learning platform with course management, student tracking, and virtual classrooms.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'PostgreSQL', 'WebRTC'],
      client: 'Hargeisa Education Center',
      year: '2024',
      gradient: 'from-indigo-600 to-purple-700'
    },
    {
      id: 7,
      title: 'Delivery Tracking App',
      category: 'app',
      description: 'Real-time delivery tracking application with GPS integration and customer notifications.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Google Maps API', 'Firebase'],
      client: 'Hargeisa Express Delivery',
      year: '2024',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      id: 8,
      title: 'Corporate Logo Design Suite',
      category: 'design',
      description: 'Professional logo design and brand guidelines for multiple local businesses.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Adobe Creative Suite', 'Brand Guidelines'],
      client: 'Various Clients',
      year: '2023-2024',
      gradient: 'from-pink-600 to-rose-700'
    },
    {
      id: 9,
      title: 'Inventory Management System',
      category: 'system',
      description: 'Advanced inventory management system with barcode scanning and automated reordering.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Barcode API'],
      client: 'Somaliland Wholesale Market',
      year: '2023',
      gradient: 'from-violet-600 to-purple-700'
    },
    {
      id: 10,
      title: 'Network Security Implementation',
      category: 'support',
      description: 'Enterprise-level network security setup with firewall configuration and monitoring.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Firewall Setup', 'VPN', 'Security Monitoring'],
      client: 'Government Office',
      year: '2024',
      gradient: 'from-red-600 to-pink-700'
    },
    {
      id: 11,
      title: 'Tourism Website Portal',
      category: 'website',
      description: 'Beautiful tourism website showcasing Somaliland attractions with booking functionality.',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Custom Theme', 'Booking System'],
      client: 'Somaliland Tourism Board',
      year: '2024',
      gradient: 'from-teal-600 to-cyan-700'
    },
    {
      id: 12,
      title: 'Fitness Tracking Mobile App',
      category: 'app',
      description: 'Comprehensive fitness tracking app with workout plans and progress monitoring.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Health APIs', 'Charts.js'],
      client: 'Hargeisa Fitness Center',
      year: '2023',
      gradient: 'from-lime-600 to-green-700'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Eye className="h-5 w-5" />, count: projects.length },
    { id: 'website', name: 'Websites', icon: <Globe className="h-5 w-5" />, count: projects.filter(p => p.category === 'website').length },
    { id: 'app', name: 'Mobile Apps', icon: <Smartphone className="h-5 w-5" />, count: projects.filter(p => p.category === 'app').length },
    { id: 'design', name: 'Graphic Design', icon: <Palette className="h-5 w-5" />, count: projects.filter(p => p.category === 'design').length },
    { id: 'system', name: 'Systems', icon: <Settings className="h-5 w-5" />, count: projects.filter(p => p.category === 'system').length },
    { id: 'support', name: 'IT Support', icon: <Filter className="h-5 w-5" />, count: projects.filter(p => p.category === 'support').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Portfolio Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-8 animate-fade-in-up">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Portfolio</span>
          </h1>
          <p className="text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Discover our successful projects across web development, mobile apps, graphic design, systems, and IT support 
            that have transformed businesses across Somaliland and beyond.
          </p>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float animation-delay-500"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Filter Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  activeFilter === category.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        {activeFilter === 'all' && (
          <div className="mb-20">
            {projects.filter(project => project.featured).map(project => (
              <div key={project.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-fade-in-up">
                <div className="lg:flex">
                  <div className="lg:w-1/2 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                        Featured Project
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-bold capitalize`}>
                        {project.category}
                      </span>
                      <span className="text-gray-500 font-medium">{project.year}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 text-xl mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Client:</h4>
                      <p className="text-gray-600 font-medium">{project.client}</p>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://wa.me/252654740397"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl font-bold group hover:shadow-lg transition-all duration-300`}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Discuss Similar Project
                      </a>
                      <button className="inline-flex items-center border-2 border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 px-6 py-3 rounded-xl font-bold transition-all duration-300">
                        <Eye className="mr-2 h-5 w-5" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(project => !project.featured || activeFilter !== 'all').map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100 group animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-bold capitalize`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-medium">
                    Client: <span className="text-gray-700">{project.client}</span>
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/252654740397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl shadow-2xl p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Stats Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
                Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Statistics</span>
              </h2>
              <p className="text-2xl text-indigo-100 animate-fade-in-up animation-delay-200">
                Our track record of successful project deliveries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '150+', label: 'Total Projects', gradient: 'from-cyan-400 to-blue-500', delay: '0' },
                { number: '50+', label: 'Happy Clients', gradient: 'from-emerald-400 to-teal-500', delay: '200' },
                { number: '25+', label: 'Mobile Apps', gradient: 'from-purple-400 to-pink-500', delay: '400' },
                { number: '98%', label: 'Success Rate', gradient: 'from-orange-400 to-red-500', delay: '600' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-scale-in`}
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 animate-count-up`}>
                    {stat.number}
                  </div>
                  <div className="text-indigo-100 font-semibold text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="CTA Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">Ready to Start Your Project?</h2>
            <p className="text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss your project requirements and create a solution that drives results for your business in Somaliland and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
              <a
                href="https://wa.me/252654740397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 animate-bounce-gentle"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Start Your Project
              </a>
              <a
                href="https://t.me/ahmedgadhle78"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                <Send className="mr-3 h-6 w-6" />
                Discuss Ideas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;