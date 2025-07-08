import React, { useState } from 'react';
import { useContent, PortfolioProject } from '../../contexts/ContentContext';
import { Plus, Edit, Trash2, Star, Tag, Calendar } from 'lucide-react';

const PortfolioManager = () => {
  const { portfolioProjects, addPortfolioProject, updatePortfolioProject, deletePortfolioProject } = useContent();
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'website' as 'website' | 'app' | 'design' | 'system' | 'support',
    description: '',
    image: '',
    technologies: '',
    client: '',
    year: new Date().getFullYear().toString(),
    featured: false,
    status: 'draft' as 'draft' | 'published'
  });

  const categories = [
    { value: 'website', label: 'Website' },
    { value: 'app', label: 'Mobile App' },
    { value: 'design', label: 'Graphic Design' },
    { value: 'system', label: 'System' },
    { value: 'support', label: 'IT Support' }
  ];

  const gradients = [
    'from-blue-600 to-indigo-700',
    'from-emerald-600 to-teal-700',
    'from-purple-600 to-pink-700',
    'from-orange-600 to-red-700',
    'from-cyan-600 to-blue-700',
    'from-violet-600 to-purple-700'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      gradient: gradients[Math.floor(Math.random() * gradients.length)]
    };

    if (editingProject) {
      updatePortfolioProject(editingProject.id, projectData);
    } else {
      addPortfolioProject(projectData);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'website',
      description: '',
      image: '',
      technologies: '',
      client: '',
      year: new Date().getFullYear().toString(),
      featured: false,
      status: 'draft'
    });
    setShowForm(false);
    setEditingProject(null);
  };

  const handleEdit = (project: PortfolioProject) => {
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(', '),
      client: project.client,
      year: project.year,
      featured: project.featured,
      status: project.status
    });
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deletePortfolioProject(id);
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      website: 'bg-blue-100 text-blue-800',
      app: 'bg-emerald-100 text-emerald-800',
      design: 'bg-purple-100 text-purple-800',
      system: 'bg-orange-100 text-orange-800',
      support: 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Portfolio Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologies (comma-separated)</label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="React, Node.js, MongoDB"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Featured Project</span>
                </label>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
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
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                >
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">All Projects ({portfolioProjects.length})</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                )}
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {portfolioProjects.length === 0 && (
            <div className="col-span-full p-12 text-center text-gray-500">
              <Tag className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No projects yet. Create your first project!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioManager;