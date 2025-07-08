import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock users database (in production, this would be a real database)
  const mockUsers: User[] = [
    {
      id: '1',
      email: 'admin@casriev.com',
      name: 'Ahmed Gadhle',
      role: 'admin',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      createdAt: '2024-01-01'
    },
    {
      id: '2',
      email: 'user@example.com',
      name: 'John Doe',
      role: 'user',
      createdAt: '2024-01-15'
    }
  ];

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('casridev_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('casridev_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication (in production, this would be a real API call)
    const foundUser = mockUsers.find(u => u.email === email);
    
    if (foundUser && (password === 'password' || (email === 'admin@casriev.com' && password === 'admin123'))) {
      setUser(foundUser);
      localStorage.setItem('casridev_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('casridev_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('casridev_user');
  };

  const isAdmin = user?.role === 'admin';

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};