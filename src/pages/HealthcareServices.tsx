import React from 'react';
import { Heart, Stethoscope, Building2, Pill } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';
import { ServiceLayout } from '../components/ServiceLayout';

export function HealthcareServices() {
  const services = [
    {
      title: 'Ayushman Bharat',
      description: 'Apply for health insurance coverage',
      icon: <Heart className="h-5 w-5" />,
      url: 'https://pmjay.gov.in/'
    },
    // {
    //   title: 'Hospital Directory',
    //   description: 'Find government hospitals and healthcare centers',
    //   icon: <Building2 className="h-5 w-5" />,
    //   url: 'https://uphssp.gov.in/'
    // },
    {
      title: 'Doctor Consultation',
      description: 'Book appointments with government doctors',
      icon: <Stethoscope className="h-5 w-5" />,
      url: 'https://esanjeevaniopd.in/'
    },
    {
      title: 'Medicine Schemes',
      description: 'Access affordable medicine schemes',
      icon: <Pill className="h-5 w-5" />,
      url: 'https://janaushadhi.gov.in/'
    }
  ];

  return (
    <ServiceLayout title="Healthcare Services">
      {services.map((service, index) => (
        <ServiceLink key={index} {...service} />
      ))}
    </ServiceLayout>
  );
}