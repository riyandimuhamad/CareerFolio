import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Landing from './pages/Landing';
import Catalog from './pages/Catalog';
import Preview from './pages/Preview';
import Order from './pages/Order';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/layout/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/success" element={<Success />} />
          
          {/* Admin Routes */}
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
