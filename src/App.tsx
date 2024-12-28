import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DocumentServices } from './pages/DocumentServices';
import { EducationServices } from './pages/EducationServices';
import { BusinessServices } from './pages/BusinessServices';
import { HealthcareServices } from './pages/HealthcareServices';
import { TransportServices } from './pages/TransportServices';
import { HousingServices } from './pages/HousingServices';
import { WelfareServices } from './pages/WelfareServices';
import { RevenueServices } from './pages/RevenueServices';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/documents" element={<DocumentServices />} />
          <Route path="/services/education" element={<EducationServices />} />
          <Route path="/services/business" element={<BusinessServices />} />
          <Route path="/services/healthcare" element={<HealthcareServices />} />
          <Route path="/services/transport" element={<TransportServices />} />
          <Route path="/services/housing" element={<HousingServices />} />
          <Route path="/services/welfare" element={<WelfareServices />} />
          <Route path="/services/revenue" element={<RevenueServices />} />
        </Routes>

        <footer className="bg-gray-800 text-white mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-bold mb-4 text-blue-600">🌟 About NagrikSahayak</h3>
  <p className="mb-4 text-gray-700">
    NagrikSahayak is your trusted digital platform, designed to simplify access to a wide range of government services online.  
  </p>
</div>

<div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-bold mb-4 text-blue-600">🌐 Connect With Us</h3>
  <p className="mb-4 text-gray-700">
    Follow us on social media to stay updated with the latest news and features!
  </p>
  <div className="flex space-x-6 justify-center">
    <a 
      href="https://www.linkedin.com/in/deepak-jadon-612487272/" 
      className="text-gray-500 hover:text-blue-600 transition duration-200"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className="sr-only">LinkedIn</span>
      🔗 LinkedIn
    </a>
    <a 
      href="https://github.com/deepakjadon1902" 
      className="text-gray-500 hover:text-blue-600 transition duration-200"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className="sr-only">GitHub</span>
      💻 GitHub
    </a>
  </div>
</div>

            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center bg-gray-900 text-white">
  <p className="text-sm font-medium">
    © 2024 <span className="text-blue-400">NagrikSahayak</span>. All rights reserved.
  </p>
  <p className="text-xs text-gray-400 mt-1">
    Empowering citizens, simplifying governance.
  </p>
</div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;