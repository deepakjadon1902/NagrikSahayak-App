import React from 'react';
import { Users, Heart, Wallet, UserCheck } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function WelfareServices() {
  const services = [
    {
      title: 'Pension Schemes',
      description: 'Apply for various pension schemes',
      icon: <Wallet className="h-5 w-5" />,
      url: 'https://sspy-up.gov.in/'
    },
    {
      title: 'Social Security',
      description: 'Access social security benefits',
      icon: <Users className="h-5 w-5" />,
      url: 'https://uplabour.gov.in/'
    },
    {
      title: 'Disability Support',
      description: 'Services for persons with disabilities',
      icon: <Heart className="h-5 w-5" />,
      url: 'https://swavlambancard.gov.in/'
    },
    {
      title: 'Chief Minister Agricultural Accident Welfare',
      description: ' This scheme, farmers or their families receive compensation in the event of accidents leading to disability, injury, or death',
      icon: <Heart className="h-5 w-5" />,
      url: 'https://bor.up.nic.in/krishakaccidentscheme/Login/login_type.aspx'
    },
    {
      title: 'Employment Registration',
      description: 'Register for employment assistance',
      icon: <UserCheck className="h-5 w-5" />,
      url: 'https://sewayojan.up.nic.in/'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Social Welfare Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceLink key={index} {...service} />
        ))}
      </div>
    </div>
  );
}