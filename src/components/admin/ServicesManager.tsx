import React, { useState } from 'react';
import { useContent, Service } from '../../contexts/ContentContext';
import { Plus, Edit, Trash2, Globe, Smartphone, Palette, Headphones, Settings, Code } from 'lucide-react';

const ServicesManager = () => {
  const { services, addService, updateService, deleteService } = useContent();
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    features: '',
    image: '',
    bgImage: '',
    icon: 'Globe',
    status: 'active' as 'active' | 'inactive'
  });

  const iconOptions = [
    { value: 'Globe', label: 'Globe', icon: <Globe className="h-5 w-5" /> },
    { value: 'Smartphone', label: 'Smartphone', icon: <Smartphone className="h-5 w-5" /> },
    { value: 'Palette', label: 'Palette', icon: <Palette className="h-5 w-5" /> },
    { value: 'Headphones', label: 'Headphones', icon: <Headphones className="h-5 w-5" /> },
    { value: 'Settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
    { value: 'Code', label: 'Code', icon: <Code className="h-5 w-5" /> }
  ];

  const gradients = [
    'from-blue-500 via-indigo-600 to-purple-600',
    'from-emerald-500 via-teal-600 to-cyan-600',
    'from-purple-500 via-pink-600 to-rose-600',
    'from-orange-500 via-red-500 to-pink-600',
    'from-cyan-500 via-blue-600 to-indigo-600',
    'from-violet-500 via-purple-600 to-pink-600'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceData = {
      ...formData,
      features: formData.features.split('\n').filter(feature => feature.trim()),
      gradient: gradients[Math.floor(Math.random() * gradients.length)]
    };

    if (editingService) {
      updateService(editingService.id, serviceData);
    } else {
      addService(serviceData);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      features: '',
      image: '',
      bgImage: '',
      icon: 'Globe',
      status: 'active'
    });
    setShowForm(false);
    setEditingService(null);
  };

  const handleEdit = (service: Service) => {
    setFormData({
      title: service.title,
      description: service.description,
      features: service.features.join('\n'),
      image: service.image,
      bgImage: service.bgImage,
      icon: service.icon,
      status: service.status
    });
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      deleteService(id);
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getIconComponent = (iconName: string) => {
    const iconMap = {
      Globe: <Globe className="h-8 w-8 text-white" />,
      Smartphone: <Smartphone className="h-8 w-8 text-white" />,
      Palette: <Palette className="h-8 w-8 text-white" />,
      Headphones: <Headphones className="h-8 w-8 text-white" />,
      Settings: <Settings className="h-8 w-8 text-white" />,
      Code: <Code className="h-8 w-8 text-white" />
    };
    return iconMap[iconName as keyof typeof iconMap] || <Globe className="h-8 w-8 text-white" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Services Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Service</span>
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                  <select
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    {iconOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Features (one per line)</label>
                <textarea
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Responsive Design&#10;E-commerce Solutions&#10;Content Management Systems"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Image URL</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://example.com/service-image.jpg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
                  <input
                    type="url"
                    value={formData.bgImage}
                    onChange={(e) => setFormData({ ...formData, bgImage: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://example.com/background-image.jpg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  {editingService ? 'Update Service' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Services Grid */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">All Services ({services.length})</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4">
                      {getIconComponent(service.icon)}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {services.length === 0 && (
            <div className="col-span-full p-12 text-center text-gray-500">
              <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No services yet. Create your first service!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesManager;