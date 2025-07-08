// import React from 'react';  // KA SAAR TAN
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Zap, MessageCircle, Send, Mail } from 'lucide-react';

// Halkan wixii hore ayuu ka socdaa

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      title: 'Expert Team',
      description: 'Our skilled professionals deliver exceptional results with years of experience.'
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.'
    },
    {
      icon: <Award className="h-6 w-6 text-violet-500" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control ensure premium results every time.'
    },
    {
      icon: <Users className="h-6 w-6 text-rose-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex items-center min-h-screen">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in-up">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 animate-pulse">
                CasriDev Technologies
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 px-4">
              Transforming ideas into digital reality through innovative web development, 
              stunning design, mobile apps, and comprehensive IT solutions in Somaliland and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-600 px-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 animate-bounce-gentle"
              >
                Start Your Project
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 animate-fade-in-up animation-delay-800 px-4">
              <a
                href="https://wa.me/252654740397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp
              </a>
              <a
                href="https://t.me/ahmedgadhle78"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Telegram
              </a>
              <a
                href="mailto:info@casriev.com"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Email
              </a>
            </div>
          </div>
        </div>
        {/* Floating elements with responsive sizes */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-float animation-delay-700"></div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fade-in-up">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4">
              Comprehensive digital solutions tailored to elevate your business to new heights in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies.',
                gradient: 'from-blue-500 via-blue-60 to-indigo-60',
                image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🌐',
                delay: '0'
              },
              {
                title: 'App Development',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                gradient: 'from-emerald-500 via-teal-60 to-cyan-60',
                image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '📱',
                delay: '100'
              },
              {
                title: 'Graphic Design',
                description: 'Creative visual solutions that make your brand stand out.',
                gradient: 'from-purple-500 via-blue-60 to-vipl-70',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🎨',
                delay: '200'
              },
              {
                title: 'IT Support',
                description: 'Reliable technical support to keep your systems running smoothly.',
                gradient: 'from-orange-500 via-red-100 to-pink-100',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🛠️',
                delay: '300'
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 overflow-hidden border border-gray-100 animate-slide-in-up`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl animate-bounce-gentle">{service.icon}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/services"
              className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 font-bold text-lg sm:text-xl group transition-all duration-300 animate-pulse-gentle"
            >
              View All Services
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose CasriDev */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"> CasriDev?</span>
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4">
              We combine technical expertise with creative innovation to deliver solutions that exceed expectations in Somaliland and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-in-left`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle">
                  {feature.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-indigo-100 leading-relaxed text-base sm:text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed', gradient: 'from-cyan-400 to-blue-500', delay: '0' },
              { number: '50+', label: 'Happy Clients', gradient: 'from-emerald-400 to-teal-500', delay: '200' },
              { number: '5+', label: 'Years Experience', gradient: 'from-pink-400 to-violet-500', delay: '400' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-scale-in`}
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className={`text-4xl sm:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 animate-count-up`}>
                  {stat.number}
                </div>
                <div className="text-indigo-100 font-semibold text-base sm:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Technology workspace"
            className="w-full h-full object-cover opacity-20"
          />
        </div>


        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-cyan-100 mb-8 sm:mb-12 leading-relaxed animate-fade-in-up animation-delay-200 px-4">
            Let's discuss your project and create something amazing together. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-400 px-4">
            <a
              href="https://wa.me/252654740397"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 animate-bounce-gentle"
            >
              Get Started Today
            </a>
            <Link
              to="/services"
              className="border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;