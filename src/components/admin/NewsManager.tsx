import React, { useState } from 'react';
import { useContent, NewsPost } from '../../contexts/ContentContext';
import { Plus, Edit, Trash2, Eye, Calendar, Clock, Tag, Star } from 'lucide-react';

const NewsManager = () => {
  const { newsPosts, addNewsPost, updateNewsPost, deleteNewsPost } = useContent();
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    readTime: '',
    featured: false,
    status: 'draft' as 'draft' | 'published'
  });

  const categories = ['Technology', 'Events', 'Awards', 'Design', 'Case Study', 'Company'];
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
    
    const postData = {
      ...formData,
      date: new Date().toISOString().split('T')[0],
      gradient: gradients[Math.floor(Math.random() * gradients.length)],
      author: 'Admin'
    };

    if (editingPost) {
      updateNewsPost(editingPost.id, postData);
    } else {
      addNewsPost(postData);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      image: '',
      readTime: '',
      featured: false,
      status: 'draft'
    });
    setShowForm(false);
    setEditingPost(null);
  };

  const handleEdit = (post: NewsPost) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image: post.image,
      readTime: post.readTime,
      featured: post.featured,
      status: post.status
    });
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deleteNewsPost(id);
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">News & Events Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add News Post</span>
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {editingPost ? 'Edit News Post' : 'Add New Post'}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Read Time</label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="5 min read"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Featured Post</span>
                </label>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">All Posts ({newsPosts.length})</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {newsPosts.map((post) => (
            <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{post.title}</h4>
                    {post.featured && (
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span>{post.category}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-blue-600 hover:text-blue-900 transition-colors duration-200 p-2"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:text-red-900 transition-colors duration-200 p-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {newsPosts.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No news posts yet. Create your first post!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsManager;