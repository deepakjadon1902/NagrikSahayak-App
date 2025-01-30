import React from 'react';
import { FileText, FileCheck, FileSignature, FileSearch } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function DocumentServices() {
  const services = [
    {
      title: 'Birth Certificate',
      description: 'Apply for a new birth certificate or get a duplicate copy',
      icon: <FileText className="h-5 w-5" />,
      url: 'https://dc.crsorgi.gov.in/crs/'
    },
    {
      title: 'Death Certificate',
      description: 'Apply for Death certificate or get a duplicate copy',
      icon: <FileText className="h-5 w-5" />,
      url: 'https://dc.crsorgi.gov.in/crs/'
    },
    {
      title: 'Income Certificate',
      description: 'Apply for income certificate for various purposes',
      icon: <FileCheck className="h-5 w-5" />,
      url: 'https://edistrict.up.gov.in/'
    },
    {
      title: 'Domicile Certificate',
      description: 'Get your domicile/residence proof certificate',
      icon: <FileSignature className="h-5 w-5" />,
      url: 'https://edistrict.up.gov.in/'
    },
    {
      title: 'Caste Certificate',
      description: 'Apply for caste certificate verification',
      icon: <FileSearch className="h-5 w-5" />,
      url: 'https://edistrict.up.gov.in/'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Document Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceLink key={index} {...service} />
        ))}
      </div>
    </div>
  );
}