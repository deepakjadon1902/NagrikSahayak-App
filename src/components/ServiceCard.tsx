import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export function ServiceCard({ title, description, icon, onClick }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-indigo-100 rounded-lg">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button 
        onClick={onClick}
        className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
      >
        Access Service
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
}