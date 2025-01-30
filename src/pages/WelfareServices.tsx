import React from 'react';
import { Users, Heart, Wallet, UserCheck, Shield, Gift, Home, Leaf, Hammer, Milk, ShieldCheck,  } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function WelfareServices() {
  const services = [
    {
      title: 'Pension Schemes',
      description: 'Apply for various pension schemes',
      icon: <Wallet className="h-5 w-5" />,
      url: 'https://epension.up.nic.in/homePage'
    },
    {
      title: 'Social Security',
      description: 'Access social security benefits',
      icon: <Users className="h-5 w-5" />,
      url: 'https://uplabour.gov.in/'
    },
    {
      title: 'Old Age Home Application',
      description: 'Apply for old age home services online',
      icon: <Home className="h-5 w-5" />,
      url: 'https://oah.apphost.co.in/Home/OnlineApplication'
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
    },
    {
      title: 'C.M. Samagra Samajik Suraksha Yojana',
      description: 'Access application forms for social security schemes',
      icon: <Users className="h-5 w-5" />,
      url: 'https://cmsvy.upsdc.gov.in/applicationforms.php'
    },
    {
      title: 'Shadi Anudan Yojana',
      description: 'Apply for marriage grant scheme online',
      icon: <Gift className="h-5 w-5" />,
      url: 'https://shadianudan.upsdc.gov.in/'
    },
    {
      title: 'UP State Social Security Board',
      description: 'Access social security schemes and services in Uttar Pradesh',
      icon: <Shield className="h-5 w-5" />,
      url: 'https://upssb.in/'
    },
    {
      title: 'UP Agriculture Department',
      description: 'Access agricultural schemes and services in Uttar Pradesh',
      icon: <Leaf className="h-5 w-5" />,
      url: 'https://agriculture.up.gov.in/'
    },
    {
      title: 'UP Public Works Department',
      description: 'Access information on infrastructure and road development projects',
      icon: <Hammer className="h-5 w-5" />,
      url: 'https://uppwd.gov.in/'
    },
    {
      title: 'UP Dairy Development Department',
      description: 'Explore dairy farming schemes and services in Uttar Pradesh',
      icon: <Milk className="h-5 w-5" />,
      url: 'https://updairydevelopment.gov.in/'
    },
    {
      title: 'AH Goshala Registration Portal',
      description: 'Register and manage information related to animal shelters in Uttar Pradesh',
      icon: <Leaf className="h-5 w-5" />,
      url: 'https://ahgoshalareg.up.gov.in/eDist/Home.aspx'
    },
    {
      title: 'CCTNS UP Citizen Portal',
      description: 'Access citizen services and reports from the UP Police',
      icon: <ShieldCheck className="h-5 w-5" />,
      url: 'https://cctnsup.gov.in/citizenportal/login.aspx'
    },
    {
      title: 'UP Dharmarth Karya Portal',
      description: 'Book religious services and related activities in Uttar Pradesh',
      icon: <Users className="h-5 w-5" />,
      url: 'https://updharmarthkarya.in/booking/HomeHI'
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