import React from 'react';
import { GraduationCap, Book, Award, School } from 'lucide-react';
import { ServiceLink } from '../components/ServiceLink';

export function EducationServices() {
  const services = [
    {
      title: 'Scholarship Application',
      description: 'Apply for various government scholarships',
      icon: <GraduationCap className="h-5 w-5" />,
      url: 'https://scholarship.up.gov.in/'
    },
    {
      title: 'School Admissions',
      description: 'Apply for school admissions under RTE',
      icon: <School className="h-5 w-5" />,
      url: 'https://rte25.upsdc.gov.in/'
    },
    {
      title: 'Board Exam Results',
      description: 'Check UP Board examination results',
      icon: <Award className="h-5 w-5" />,
      url: 'https://upmsp.edu.in/'
    },
    {
      title: 'Digital Library',
      description: 'Access free educational resources',
      icon: <Book className="h-5 w-5" />,
      url: 'https://ndl.iitkgp.ac.in/'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Education Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceLink key={index} {...service} />
        ))}
      </div>
    </div>
  );
}