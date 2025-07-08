import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <Admin />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;