import React, { ReactNode } from 'react';

interface ServiceLayoutProps {
  title: string;
  children: ReactNode;
}

export function ServiceLayout({ title, children }: ServiceLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}