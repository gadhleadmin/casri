import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, Loader } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = await login(email, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Login Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80"></div>
      </div>

      <div className="relative max-w-md w-full space-y-8">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 rounded-2xl shadow-lg">
                <LogIn className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-2">Sign in to your CasriDev account</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3 animate-fade-in-up">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin h-5 w-5 mr-2" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 font-bold transition-all duration-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-20 animate-float animation-delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float animation-delay-500"></div>
    </div>
  );
};

export default Login;