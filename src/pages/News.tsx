import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Award, Users, Smartphone, Code, Palette, MessageCircle, Send } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'CasriDev Launches Revolutionary AI-Powered Development Framework',
      excerpt: 'Our innovative framework reduces development time by 50% while improving code quality and performance across all platforms in Somaliland.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      id: 2,
      title: 'Mobile App Development Workshop: React Native & Flutter in Hargeisa',
      excerpt: 'Join our expert developers for an intensive workshop on modern mobile app development techniques and best practices.',
      date: '2025-01-20',
      readTime: '3 min read',
      category: 'Events',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-emerald-600 to-teal-700'
    },
    {
      id: 3,
      title: 'CasriDev Recognized as Top Digital Innovation Agency in Horn of Africa',
      excerpt: 'We\'re proud to be recognized among the top 5 digital innovation agencies in the Horn of Africa for our cutting-edge solutions.',
      date: '2025-01-10',
      readTime: '4 min read',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-pink-700'
    },
    {
      id: 4,
      title: 'The Future of Web Design: Immersive Experiences in 2025',
      excerpt: 'Explore the emerging design trends that will shape the digital landscape, including AR/VR integration and AI-driven UX.',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-pink-600 to-rose-700'
    },
    {
      id: 5,
      title: 'Client Success: E-commerce Platform Drives 400% Growth for Local Business',
      excerpt: 'Learn how our custom mobile-first e-commerce solution helped a Hargeisa startup achieve unprecedented growth and market expansion.',
      date: '2025-01-05',
      readTime: '5 min read',
      category: 'Case Study',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-600 to-red-700'
    },
    {
      id: 6,
      title: 'CasriDev Team Expansion: Welcoming World-Class Talent to Somaliland',
      excerpt: 'We\'re excited to welcome five new team members who bring diverse skills, fresh perspectives, and global experience to our Hargeisa office.',
      date: '2025-01-03',
      readTime: '3 min read',
      category: 'Company',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-cyan-600 to-blue-700'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Advanced React & Next.js Workshop',
      date: '2025-01-25',
      time: '2:00 PM - 6:00 PM',
      type: 'Workshop',
      description: 'Deep dive into advanced React patterns, Next.js 14 features, and modern development practices.',
      gradient: 'from-blue-500 to-indigo-600',
      icon: <Code className="h-5 w-5" />
    },
    {
      title: 'AI in Mobile App Development Seminar',
      date: '2025-02-08',
      time: '6:00 PM - 8:00 PM',
      type: 'Seminar',
      description: 'Exploring how artificial intelligence is revolutionizing mobile app development and user experiences.',
      gradient: 'from-emerald-500 to-teal-600',
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      title: 'Design Thinking & UX Innovation Summit',
      date: '2025-02-15',
      time: '9:00 AM - 5:00 PM',
      type: 'Summit',
      description: 'Full-day event featuring industry leaders discussing the future of design and user experience.',
      gradient: 'from-purple-500 to-pink-600',
      icon: <Palette className="h-5 w-5" />
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="News Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-8">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Events</span>
          </h1>
          <p className="text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments, insights, and upcoming events from CasriDev Technologies in Somaliland.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Article */}
        {newsArticles.filter(article => article.featured).map(article => (
          <div key={article.id} className="mb-20 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="lg:flex">
              <div className="lg:w-1/2 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-60`}></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                    Featured
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`bg-gradient-to-r ${article.gradient} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                    {article.category}
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">{article.readTime}</span>
                    </div>
                  </div>
                  <button className={`inline-flex items-center bg-gradient-to-r ${article.gradient} text-white px-6 py-3 rounded-xl font-bold group hover:shadow-lg transition-all duration-300`}>
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
              Latest News
            </h2>
            <div className="space-y-8">
              {newsArticles.filter(article => !article.featured).map(article => (
                <article key={article.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-60`}></div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className={`bg-gradient-to-r ${article.gradient} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{formatDate(article.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">{article.readTime}</span>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-purple-600 font-bold group-hover:translate-x-2 transition-all duration-300">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8">
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="relative p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`bg-gradient-to-r ${event.gradient} p-2 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                        {event.icon}
                      </div>
                      <span className={`bg-gradient-to-r ${event.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {event.type}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                      {event.title}
                    </h4>
                    <div className="text-sm text-gray-600 mb-3 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Highlights */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Highlights Background"
                  className="w-full h-full object-cover opacity-10"
                />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  Company Highlights
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">300% Growth</div>
                      <div className="text-indigo-200">Average client success rate</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">Top 5 Agency</div>
                      <div className="text-indigo-200">Horn of Africa recognition 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">15+ Team Members</div>
                      <div className="text-indigo-200">Expert professionals in Hargeisa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Newsletter Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative">
            <h3 className="text-4xl font-bold mb-6">Stay in the Loop</h3>
            <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, insights, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4 mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-2 border-white/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/25 focus:border-white/50 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 font-medium"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/25">
                Subscribe
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/252654740397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Updates
              </a>
              <a
                href="https://t.me/ahmedgadhle78"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Telegram Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;