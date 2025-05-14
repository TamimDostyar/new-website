import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-deepPurple text-gray-200">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;