import React from 'react';
import { Globe, Palette, Headphones, CheckCircle, ArrowRight, Smartphone, Code, Zap, MessageCircle, Send } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
      features: [
        'Responsive Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps',
        'API Integration',
        'Performance Optimization'
      ],
      gradient: 'from-blue-500 via-indigo-600 to-purple-600',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-white" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Updates'
      ],
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      icon: <Palette className="h-12 w-12 text-white" />,
      title: 'Graphic Design',
      description: 'Creative visual solutions that make your brand memorable and impactful in the digital world.',
      features: [
        'Logo Design',
        'Brand Identity',
        'Marketing Materials',
        'UI/UX Design',
        'Print Design',
        'Digital Illustrations'
      ],
      gradient: 'from-purple-500 via-pink-600 to-rose-600',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      icon: <Headphones className="h-12 w-12 text-white" />,
      title: 'IT Support',
      description: 'Comprehensive technical support to keep your systems running smoothly and efficiently.',
      features: [
        '24/7 Help Desk',
        'Remote Assistance',
        'System Monitoring',
        'Troubleshooting',
        'Maintenance',
        'Training & Consultation'
      ],
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Services Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-8 animate-fade-in-up">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Services</span>
          </h1>
          <p className="text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            We offer comprehensive digital solutions designed to help your business thrive in today's competitive landscape. 
            From concept to completion, we're your trusted technology partner in Somaliland and beyond.
          </p>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float animation-delay-500"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 animate-slide-in-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 mb-6 animate-pulse-gentle">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-white animate-bounce-gentle">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">What's Included:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className={`flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in-left`}
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 animate-pulse-gentle" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/252654740397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-gentle`}
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Get Quote
                  </a>
                  <a
                    href="https://t.me/ahmedgadhle78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border-2 border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                  >
                    <Send className="mr-3 h-6 w-6" />
                    Discuss Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl shadow-2xl p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Process Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Process</span>
              </h2>
              <p className="text-2xl text-indigo-100 animate-fade-in-up animation-delay-200">
                A proven methodology that ensures successful project delivery every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Discovery', 
                  description: 'Understanding your needs and goals',
                  icon: <Code className="h-8 w-8" />,
                  gradient: 'from-cyan-400 to-blue-500',
                  delay: '0'
                },
                { 
                  step: '02', 
                  title: 'Planning', 
                  description: 'Strategic roadmap and timeline',
                  icon: <Zap className="h-8 w-8" />,
                  gradient: 'from-emerald-400 to-teal-500',
                  delay: '200'
                },
                { 
                  step: '03', 
                  title: 'Development', 
                  description: 'Building your solution with precision',
                  icon: <Globe className="h-8 w-8" />,
                  gradient: 'from-purple-400 to-pink-500',
                  delay: '400'
                },
                { 
                  step: '04', 
                  title: 'Launch', 
                  description: 'Deployment and ongoing support',
                  icon: <ArrowRight className="h-8 w-8" />,
                  gradient: 'from-orange-400 to-red-500',
                  delay: '600'
                }
              ].map((phase, index) => (
                <div 
                  key={index} 
                  className={`text-center relative group animate-scale-in`}
                  style={{ animationDelay: `${phase.delay}ms` }}
                >
                  <div className={`bg-gradient-to-r ${phase.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle`}>
                    {phase.icon}
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent mb-4 animate-count-up`}>
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-indigo-100 text-lg">{phase.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-50 animate-pulse"></div>
                  )}
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
            <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">Ready to Get Started?</h2>
            <p className="text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss your project requirements and create a solution that drives results for your business in Somaliland and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
              <a
                href="https://wa.me/252654740397"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 animate-bounce-gentle"
              >
                Schedule a Consultation
              </a>
              <a
                href="mailto:info@casriev.com"
                className="border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;