import React from 'react';
import { Building2, FileCheck, Briefcase, Store } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';
import { ServiceLayout } from '../components/ServiceLayout';

export function BusinessServices() {
  const services = [
    {
      title: 'MSME Registration',
      description: 'Register your Micro, Small, or Medium Enterprise',
      icon: <Building2 className="h-5 w-5" />,
      url: 'https://udyamregistration.gov.in/'
    },
    {
      title: 'Shop & Establishment',
      description: 'Apply for shop and establishment registration',
      icon: <Store className="h-5 w-5" />,
      url: 'https://uplabour.gov.in/'
    },
    {
      title: 'Trade License',
      description: 'Apply for trade license and permits',
      icon: <Briefcase className="h-5 w-5" />,
      url: 'https://invest.up.gov.in/'
    },
    {
      title: 'GST Registration',
      description: 'Register for Goods and Services Tax',
      icon: <FileCheck className="h-5 w-5" />,
      url: 'https://www.gst.gov.in/'
    }
  ];

  return (
    <ServiceLayout title="Business Services">
      {services.map((service, index) => (
        <ServiceLink key={index} {...service} />
      ))}
    </ServiceLayout>
  );
}