import React from 'react';
import { Landmark, Receipt, FileText, Calculator } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function RevenueServices() {
  const services = [
    {
      title: 'Property Tax',
      description: 'Pay and view property tax details',
      icon: <Landmark className="h-5 w-5" />,
      url: 'https://nagarnigam.up.nic.in/'
    },
    {
      title: 'Water Tax',
      description: 'Pay water tax and view bills',
      icon: <Receipt className="h-5 w-5" />,
      url: 'https://upjn.org/'
    },
    {
      title: 'Land Records',
      description: 'Access and verify land records',
      icon: <FileText className="h-5 w-5" />,
      url: 'https://upbhulekh.gov.in/'
    },
    {
      title: 'Tax Calculator',
      description: 'Calculate various government taxes',
      icon: <Calculator className="h-5 w-5" />,
      url: 'https://tin.up.nic.in/'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Revenue Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceLink key={index} {...service} />
        ))}
      </div>
    </div>
  );
}