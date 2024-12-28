import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ServiceLinkProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

export function ServiceLink({ title, description, icon, url }: ServiceLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            {title}
            <ExternalLink className="h-4 w-4 ml-2 text-gray-400" />
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}