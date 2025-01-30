import React from 'react';
import { GraduationCap, Book, Award, School, BookOpen, Wrench } from 'lucide-react';
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
      icon: <BookOpen className="h-5 w-5" />,
      url: 'https://upmsp.edu.in/'
    },
    {
      title: 'eHRMS Uttar Pradesh',
      description: 'Access employee HR management services',
      icon: <Award className="h-5 w-5" />,
      url: 'https://ehrms.upsdc.gov.in/'
    },
    
    {
      title: 'Digital Library',
      description: 'Access free educational resources',
      icon: <Book className="h-5 w-5" />,
      url: 'https://ndl.iitkgp.ac.in/'
    },
    {
      title: 'UP Skill Development Mission',
      description: 'Enroll in skill development programs in Uttar Pradesh',
      icon: <Award className="h-5 w-5" />,
      url: 'https://www.upsdm.gov.in/'
    },
    {
      title: 'UP Board of Secondary Education',
      description: 'Access UP Board exam results, syllabus, and notifications',
      icon: <BookOpen className="h-5 w-5" />,
      url: 'https://upmsp.edu.in/'
    },
    {
      title: 'UP SCVT Portal',
      description: 'Access vocational training and ITI-related services in Uttar Pradesh',
      icon: <Wrench className="h-5 w-5" />,
      url: 'https://www.scvtup.in/en'
    },
    {
      title: 'BTEUP Janhit Portal',
      description: 'Access services and information related to technical education in Uttar Pradesh',
      icon: <GraduationCap className="h-5 w-5" />,
      url: 'https://bteup.ac.in/webapp/janhit.aspx'
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