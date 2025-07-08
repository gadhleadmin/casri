import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Monitor, Menu, X, User, LogOut, Settings, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'News & Events', href: '/news' },
    { name: 'About', href: '/about' },
  ];

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-white/20 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl group-hover:from-cyan-500 group-hover:via-blue-600 group-hover:to-indigo-700 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/25">
              <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                CasriDev
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 -mt-1">Technologies</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 xl:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                    : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* User Menu or Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 px-3 py-2 rounded-xl transition-all duration-300"
                >
                  <img
                    src={user.avatar || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fahmadgadhle&psig=AOvVaw3qary5EvT2c2QDZPT-NoW-&ust=1751955679557000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDuy9GNqo4DFQAAAAAdAAAAABAE'}
                    alt={user.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-indigo-200"
                  />
                  <span className="text-gray-700 font-medium text-sm hidden xl:block">{user.name.split(' ')[0]}</span>
                  <ChevronDown className="h-3 w-3 text-gray-500" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Admin Dashboard</span>
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 xl:px-6 py-2 rounded-xl font-medium text-sm hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                >
                  Sign In
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 sm:p-3 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-indigo-100 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center space-x-3 px-4 py-2">
                    <img
                      src={user.avatar || 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100'}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border border-indigo-200"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Settings className="h-5 w-5" />
                      <span>Admin Dashboard</span>
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                  <a
                    href="https://wa.me/252654740397"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white px-6 py-4 rounded-2xl font-bold hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 mt-4"
                  >
                    Get in Touch
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;