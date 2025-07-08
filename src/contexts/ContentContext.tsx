import React, { createContext, useContext, useState, useEffect } from 'react';

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  gradient: string;
  author: string;
  status: 'draft' | 'published';
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'website' | 'app' | 'design' | 'system' | 'support';
  description: string;
  image: string;
  technologies: string[];
  client: string;
  year: string;
  gradient: string;
  featured: boolean;
  status: 'draft' | 'published';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  image: string;
  bgImage: string;
  icon: string;
  status: 'active' | 'inactive';
}

interface ContentContextType {
  // News
  newsPosts: NewsPost[];
  addNewsPost: (post: Omit<NewsPost, 'id'>) => void;
  updateNewsPost: (id: string, post: Partial<NewsPost>) => void;
  deleteNewsPost: (id: string) => void;
  
  // Portfolio
  portfolioProjects: PortfolioProject[];
  addPortfolioProject: (project: Omit<PortfolioProject, 'id'>) => void;
  updatePortfolioProject: (id: string, project: Partial<PortfolioProject>) => void;
  deletePortfolioProject: (id: string) => void;
  
  // Services
  services: Service[];
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initial mock data
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([
    {
      id: '1',
      title: 'CasriDev Launches Revolutionary AI-Powered Development Framework',
      excerpt: 'Our innovative framework reduces development time by 50% while improving code quality and performance across all platforms in Somaliland.',
      content: 'Full article content here...',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      gradient: 'from-blue-600 to-indigo-700',
      author: 'Ahmed Gadhle',
      status: 'published'
    }
  ]);

  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([
    {
      id: '1',
      title: 'Somaliland E-Commerce Platform',
      category: 'website',
      description: 'Complete e-commerce solution for local businesses with payment integration and inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'Hargeisa Shopping Center',
      year: '2024',
      gradient: 'from-blue-600 to-indigo-700',
      featured: true,
      status: 'published'
    }
  ]);

  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
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
      bgImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1600',
      icon: 'Globe',
      status: 'active'
    }
  ]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedNews = localStorage.getItem('casridev_news');
    const savedPortfolio = localStorage.getItem('casridev_portfolio');
    const savedServices = localStorage.getItem('casridev_services');

    if (savedNews) {
      try {
        setNewsPosts(JSON.parse(savedNews));
      } catch (error) {
        console.error('Error loading news from localStorage:', error);
      }
    }

    if (savedPortfolio) {
      try {
        setPortfolioProjects(JSON.parse(savedPortfolio));
      } catch (error) {
        console.error('Error loading portfolio from localStorage:', error);
      }
    }

    if (savedServices) {
      try {
        setServices(JSON.parse(savedServices));
      } catch (error) {
        console.error('Error loading services from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('casridev_news', JSON.stringify(newsPosts));
  }, [newsPosts]);

  useEffect(() => {
    localStorage.setItem('casridev_portfolio', JSON.stringify(portfolioProjects));
  }, [portfolioProjects]);

  useEffect(() => {
    localStorage.setItem('casridev_services', JSON.stringify(services));
  }, [services]);

  // News functions
  const addNewsPost = (post: Omit<NewsPost, 'id'>) => {
    const newPost: NewsPost = {
      ...post,
      id: Date.now().toString()
    };
    setNewsPosts(prev => [newPost, ...prev]);
  };

  const updateNewsPost = (id: string, updatedPost: Partial<NewsPost>) => {
    setNewsPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...updatedPost } : post
    ));
  };

  const deleteNewsPost = (id: string) => {
    setNewsPosts(prev => prev.filter(post => post.id !== id));
  };

  // Portfolio functions
  const addPortfolioProject = (project: Omit<PortfolioProject, 'id'>) => {
    const newProject: PortfolioProject = {
      ...project,
      id: Date.now().toString()
    };
    setPortfolioProjects(prev => [newProject, ...prev]);
  };

  const updatePortfolioProject = (id: string, updatedProject: Partial<PortfolioProject>) => {
    setPortfolioProjects(prev => prev.map(project => 
      project.id === id ? { ...project, ...updatedProject } : project
    ));
  };

  const deletePortfolioProject = (id: string) => {
    setPortfolioProjects(prev => prev.filter(project => project.id !== id));
  };

  // Services functions
  const addService = (service: Omit<Service, 'id'>) => {
    const newService: Service = {
      ...service,
      id: Date.now().toString()
    };
    setServices(prev => [newService, ...prev]);
  };

  const updateService = (id: string, updatedService: Partial<Service>) => {
    setServices(prev => prev.map(service => 
      service.id === id ? { ...service, ...updatedService } : service
    ));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  const value = {
    newsPosts,
    addNewsPost,
    updateNewsPost,
    deleteNewsPost,
    portfolioProjects,
    addPortfolioProject,
    updatePortfolioProject,
    deletePortfolioProject,
    services,
    addService,
    updateService,
    deleteService
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};