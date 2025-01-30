import React from 'react';
import { Landmark, Receipt, FileText,  Banknote } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function RevenueServices() {
  const services = [
    {
      title: 'Property Tax',
      description: 'Pay and view property tax details',
      icon: <Landmark className="h-5 w-5" />,
      url: 'https://lmc.up.nic.in/internet/User_Loginnew.aspx'
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
      title: 'UP GST Portal',
      description: 'Access GST services and information in Uttar Pradesh',
      icon: <Banknote className="h-5 w-5" />,
      url: 'https://comtax.up.nic.in/GSThome/en.html'
    },
    {
      title: 'UP GST E-Forms Portal',
      description: 'Access and submit GST-related forms in Uttar Pradesh',
      icon: <FileText className="h-5 w-5" />,
      url: 'https://up-gst.com/eforms/'
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