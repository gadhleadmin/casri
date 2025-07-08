import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import NewsManager from '../components/admin/NewsManager';
import PortfolioManager from '../components/admin/PortfolioManager';
import ServicesManager from '../components/admin/ServicesManager';
import { 
  Users, 
  BarChart3, 
  Settings, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  Calendar,
  Globe,
  Smartphone,
  Palette,
  Headphones,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Newspaper,
  Briefcase,
  Wrench
} from 'lucide-react';

const Admin = () => {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const stats = [
    { 
      title: 'Total Projects', 
      value: '156', 
      change: '+12%', 
      icon: <FileText className="h-8 w-8" />,
      gradient: 'from-blue-500 to-indigo-600'
    },
    { 
      title: 'Active Clients', 
      value: '48', 
      change: '+8%', 
      icon: <Users className="h-8 w-8" />,
      gradient: 'from-emerald-500 to-teal-600'
    },
    { 
      title: 'Revenue (USD)', 
      value: '$125K', 
      change: '+23%', 
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-600'
    },
    { 
      title: 'Pending Requests', 
      value: '12', 
      change: '+3', 
      icon: <MessageSquare className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      client: 'Hargeisa Shopping Center',
      type: 'Website',
      status: 'In Progress',
      progress: 75,
      dueDate: '2025-02-15',
      priority: 'High'
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      client: 'Somaliland Bank',
      type: 'Mobile App',
      status: 'Review',
      progress: 90,
      dueDate: '2025-02-10',
      priority: 'Critical'
    },
    {
      id: 3,
      name: 'Brand Identity Design',
      client: 'Hargeisa Grill House',
      type: 'Design',
      status: 'Completed',
      progress: 100,
      dueDate: '2025-01-30',
      priority: 'Medium'
    },
    {
      id: 4,
      name: 'IT Infrastructure Setup',
      client: 'Somaliland University',
      type: 'IT Support',
      status: 'Planning',
      progress: 25,
      dueDate: '2025-03-01',
      priority: 'High'
    }
  ];

  const clients = [
    {
      id: 1,
      name: 'Hargeisa Shopping Center',
      email: 'info@hargeisamall.com',
      phone: '+252 63 123 4567',
      projects: 3,
      totalValue: '$45,000',
      status: 'Active',
      joinDate: '2024-06-15'
    },
    {
      id: 2,
      name: 'Somaliland Bank',
      email: 'tech@somalilandbank.com',
      phone: '+252 63 234 5678',
      projects: 2,
      totalValue: '$65,000',
      status: 'Active',
      joinDate: '2024-03-20'
    },
    {
      id: 3,
      name: 'Hargeisa Grill House',
      email: 'contact@hargeisgrill.com',
      phone: '+252 63 345 6789',
      projects: 1,
      totalValue: '$8,500',
      status: 'Completed',
      joinDate: '2024-12-10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Active': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'news', name: 'News & Events', icon: <Newspaper className="h-5 w-5" /> },
    { id: 'portfolio', name: 'Portfolio', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'services', name: 'Services', icon: <Wrench className="h-5 w-5" /> },
    { id: 'projects', name: 'Projects', icon: <FileText className="h-5 w-5" /> },
    { id: 'clients', name: 'Clients', icon: <Users className="h-5 w-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar || 'https://tse1.mm.bing.net/th/id/OIP.B9Be599AIIH8WzH19qQAqwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-200"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                      <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
                    </div>
                    <div className={`bg-gradient-to-r ${stat.gradient} p-3 rounded-xl text-white`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Projects */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Recent Projects</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{project.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{project.client}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{project.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{project.progress}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{project.dueDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900 transition-colors duration-200">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && <NewsManager />}
        {activeTab === 'portfolio' && <PortfolioManager />}
        {activeTab === 'services' && <ServicesManager />}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>New Project</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Filter className="h-5 w-5" />
                  <span>Filter</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentProjects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(project.priority)}`}>
                        {project.priority}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.client}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-500">{project.type}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Due: {project.dueDate}</span>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 transition-colors duration-200">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors duration-200">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add Client</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search clients..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Filter className="h-5 w-5" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Value</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{client.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{client.email}</div>
                          <div className="text-sm text-gray-500">{client.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{client.projects}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{client.totalValue}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(client.status)}`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{client.joinDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900 transition-colors duration-200">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900 transition-colors duration-200">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                    Update Profile
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">System Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Auto Backup</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;