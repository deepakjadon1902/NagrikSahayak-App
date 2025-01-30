import React from 'react';
import { Home, Building, FileText, MapPin, Droplet, CheckCircle, Sprout,  } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function HousingServices() {
  const services = [
    {
      title: 'Property Registration',
      description: 'Register property and land documents',
      icon: <FileText className="h-5 w-5" />,
      url: 'https://igrsup.gov.in/'
    },
    {
      title: 'Housing Schemes',
      description: 'Apply for government housing schemes',
      icon: <Home className="h-5 w-5" />,
      url: 'https://pmaymis.gov.in/'
    },
    {
      title: 'Building Permission',
      description: 'Apply for building permits and approvals',
      icon: <Building className="h-5 w-5" />,
      url: 'https://upavp.in/'
    },
    {
      title: 'Land Records',
      description: 'View and download land records',
      icon: <MapPin className="h-5 w-5" />,
      url: 'https://upbhulekh.gov.in/'
    },
    {
      title: 'UP Ground Water Department',
      description: 'Apply for groundwater-related services online',
      icon: <Droplet className="h-5 w-5" />,
      url: 'https://upgwdonline.in/'
    },
    {
      title: 'Janhit Guarantee Act Portal',
      description: 'Track and apply for public service guarantees in Uttar Pradesh',
      icon: <CheckCircle className="h-5 w-5" />,
      url: 'https://janhit.upda.in/default.aspx'
    },
    {
      title: 'UP Horticulture Janhit Portal',
      description: 'Access horticulture schemes and services in Uttar Pradesh',
      icon: <Sprout className="h-5 w-5" />,
      url: 'https://janhit.uphorticulture.in/'
    },
    {
      title: 'UPPCL Portal',
      description: 'Access electricity-related services in Uttar Pradesh',
      icon: <Home className="h-5 w-5" />,
      url: 'https://uppcl.org/uppcl/hi/'
    }
    
    
    
    
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Housing Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceLink key={index} {...service} />
        ))}
      </div>
    </div>
  );
}