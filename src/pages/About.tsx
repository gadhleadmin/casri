import React from 'react';
import { Users, Target, Eye, Award, Mail, MapPin,Zap, MessageCircle, Send } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Ahmed Gadhle',
      role: 'Founder & CEO',
      image: 'https://tse1.mm.bing.net/th/id/OIP.B9Be599AIIH8WzH19qQAqwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      expertise: 'Full-Stack Development, Business Strategy',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'Amina Hassan',
      role: 'Creative Director',
      image: 'https://tse3.mm.bing.net/th/id/OIP.7H_95Fwsda-IkPmDr5WBjwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      expertise: 'UI/UX Design, Brand Development',
      gradient: 'from-purple-600 to-pink-700'
    },
    {
      name: 'Mohamed Ali',
      role: 'Lead Developer',
      image: 'https://i1.rgstatic.net/ii/profile.image/1143990757924866-1649760059685_Q512/Abdirahman-Gure-2.jpg',
      expertise: 'React, Node.js, Cloud Architecture',
      gradient: 'from-emerald-600 to-teal-700'
    },
    {
      name: 'Fatima Omar',
      role: 'Mobile App Specialist',
      image: 'https://tse1.mm.bing.net/th/id/OIP.WBX5NXiwpNTs0NxCl_voFQHaLH?w=1024&h=1536&rs=1&pid=ImgDetMain&o=7&rm=3',
      expertise: 'React Native, Flutter, iOS/Android',
      gradient: 'from-orange-600 to-red-700'
    }
  ];

  const milestones = [
    { 
      year: '2020', 
      event: 'CasriDev Technologies Founded', 
      description: 'Started with a vision to transform digital experiences in Somaliland',
      gradient: 'from-blue-500 to-indigo-600'
    },
    { 
      year: '2021', 
      event: 'First Major Mobile App Success', 
      description: 'Delivered a revolutionary mobile app that gained 100K+ downloads locally',
      gradient: 'from-emerald-500 to-teal-600'
    },
    { 
      year: '2022', 
      event: 'Team Expansion & New Services', 
      description: 'Grew to 10 team members and added comprehensive app development services',
      gradient: 'from-purple-500 to-pink-600'
    },
    { 
      year: '2023', 
      event: 'Regional Recognition', 
      description: 'Recognized as "Leading Digital Innovation Company in Horn of Africa"',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      year: '2024', 
      event: '150+ Projects Milestone', 
      description: 'Reached milestone of 150 successful project deliveries across East Africa',
      gradient: 'from-cyan-500 to-blue-600'
    },
    { 
      year: '2025', 
      event: 'AI-Powered Development Launch', 
      description: 'Launched innovative AI-powered development framework for local businesses',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  const values = [
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners in their success.',
      gradient: 'from-emerald-600 to-teal-700'
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
      gradient: 'from-purple-600 to-pink-700'
    },
    {
      icon: <Eye className="h-10 w-10 text-white" />,
      title: 'Transparency',
      description: 'We maintain open communication and honest relationships with all stakeholders.',
      gradient: 'from-orange-600 to-red-700'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="About Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-8 animate-fade-in-up">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">CasriDev</span>
          </h1>
          <p className="text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Founded on the principle of excellence, CasriDev Technologies has been at the forefront of digital innovation in Somaliland, 
            helping businesses transform their ideas into powerful digital solutions.
          </p>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float animation-delay-500"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8 animate-slide-in-left">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              CasriDev Technologies was born from a simple yet powerful vision: to bridge the gap between innovative 
              ideas and their digital realization in Somaliland and the Horn of Africa. Founded in 2020 by a team of passionate developers and designers, 
              we started with the belief that every business deserves access to cutting-edge technology solutions.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Over the past five years, we've evolved from a small startup in Hargeisa to a recognized leader in web development, 
              mobile app creation, and comprehensive IT solutions. Our journey has been marked by continuous learning, 
              adaptation, and an unwavering commitment to our clients' success across the region.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100 animate-scale-in animation-delay-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-3 animate-count-up">
                  150+
                </div>
                <div className="text-gray-600 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100 animate-scale-in animation-delay-500">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent mb-3 animate-count-up">
                  98%
                </div>
                <div className="text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CasriDev Team in Hargeisa"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/30 to-pink-600/30"></div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-800 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden animate-slide-in-left">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mission Background"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl w-fit mb-8 animate-pulse-gentle">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                To empower businesses in Somaliland and East Africa with innovative digital solutions that drive growth, enhance efficiency, 
                and create meaningful connections between brands and their audiences. We are committed to 
                delivering excellence through cutting-edge technology and exceptional service.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 via-pink-700 to-rose-800 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden animate-slide-in-right">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vision Background"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl w-fit mb-8 animate-pulse-gentle">
                <Eye className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-purple-100 leading-relaxed">
                To be the leading technology partner for businesses across the Horn of Africa, recognized for our innovation, 
                reliability, and transformative impact. We envision a future where every business in our region, regardless 
                of size, has access to world-class digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Our Values
            </h2>
            <p className="text-2xl text-gray-600 animate-fade-in-up animation-delay-200">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div 
                  className={`bg-gradient-to-br ${value.gradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 text-white text-center relative overflow-hidden animate-scale-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-white/90 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Our Journey
            </h2>
            <p className="text-2xl text-gray-600 animate-fade-in-up animation-delay-200">
              Key milestones in our growth and evolution
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 animate-pulse"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center animate-slide-in-up ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent mb-3 animate-count-up`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className={`w-6 h-6 bg-gradient-to-r ${milestone.gradient} rounded-full border-4 border-white shadow-xl animate-pulse-gentle`}></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Meet Our Team
            </h2>
            <p className="text-2xl text-gray-600 animate-fade-in-up animation-delay-200">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div 
                  className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100 animate-scale-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Contact Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative">
            <h2 className="text-5xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with innovative digital solutions. 
              Get in touch with our team today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-up animation-delay-200">
                <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-xl animate-pulse-gentle">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <a href="mailto:info@casriev.com" className="text-lg font-medium hover:text-cyan-200 transition-colors">
                  info@casriev.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-up animation-delay-400">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl animate-pulse-gentle">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <a href="https://wa.me/252654740397" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-green-200 transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-up animation-delay-600">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-3 rounded-xl animate-pulse-gentle">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <a href="https://t.me/ahmedgadhle78" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-200 transition-colors">
                  Telegram
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-slide-in-up animation-delay-800">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 p-3 rounded-xl animate-pulse-gentle">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-medium">Hargeisa, Somaliland</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-1000">
              <a 
                href="https://wa.me/252654740397" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/25 animate-bounce-gentle"
              >
                Schedule Consultation
              </a>
              <a 
                href="mailto:info@casriev.com"
                className="border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
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

export default About;