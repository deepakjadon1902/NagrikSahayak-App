import React from 'react';
import { Car, CreditCard, FileText, Map } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function TransportServices() {
  const services = [
    {
      title: 'Vehicle Registration',
      description: 'Register new vehicles or transfer ownership',
      icon: <Car className="h-5 w-5" />,
      url: 'https://parivahan.gov.in/'
    },
    {
      title: 'Driving License',
      description: 'Apply for new license or renewal',
      icon: <CreditCard className="h-5 w-5" />,
      url: 'https://sarathi.parivahan.gov.in/'
    },
    {
      title: 'Permit Services',
      description: 'Apply for various transport permits',
      icon: <FileText className="h-5 w-5" />,
      url: 'https://uptransport.upsdc.gov.in/en-us/'
    },
    {
      title: 'Route Information',
      description: 'Access UP state transport routes and schedules',
      icon: <Map className="h-5 w-5" />,
      url: 'https://upsrtc.up.gov.in/'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Transport Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceLink key={index} {...service} />
        ))}
      </div>
    </div>
  );
}