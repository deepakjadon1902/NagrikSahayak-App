import React from 'react';
import { ServicesGrid } from '../components/ServicesGrid';

export function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Government Services at Your Fingertips
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Access all Uttar Pradesh government services easily and securely. 
          Find information, apply for documents, and track your applications in one place.
        </p>
      </div>

      <ServicesGrid />

      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
  <p>🙏 Thank you for choosing our app. We’re grateful for your trust in us!</p>
</div>

    </main>
  );
}