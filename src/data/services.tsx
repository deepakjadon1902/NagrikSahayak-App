import React from 'react';
import {
  FileText,
  Building2,
  GraduationCap,
  Heart,
  Car,
  Home,
  Users,
  Landmark,
} from 'lucide-react';

export const servicesList = [
  {
    title: 'Document Services',
    description: 'Apply for certificates, licenses, and other official documents',
    icon: <FileText className="h-5 w-5 text-indigo-600" />,
    path: '/services/documents'
  },
  {
    title: 'Business Services',
    description: 'Register your business, apply for permits and licenses',
    icon: <Building2 className="h-5 w-5 text-indigo-600" />,
    path: '/services/business'
  },
  {
    title: 'Education',
    description: 'Access educational resources, scholarships, and admissions',
    icon: <GraduationCap className="h-5 w-5 text-indigo-600" />,
    path: '/services/education'
  },
  {
    title: 'Healthcare',
    description: 'Find healthcare facilities and access medical services',
    icon: <Heart className="h-5 w-5 text-indigo-600" />,
    path: '/services/healthcare'
  },
  {
    title: 'Transport',
    description: 'Vehicle registration, licenses, and transport permits',
    icon: <Car className="h-5 w-5 text-indigo-600" />,
    path: '/services/transport'
  },
  {
    title: 'Housing',
    description: 'Property registration and housing schemes',
    icon: <Home className="h-5 w-5 text-indigo-600" />,
    path: '/services/housing'
  },
  {
    title: 'Social Welfare',
    description: 'Access welfare schemes and pension services',
    icon: <Users className="h-5 w-5 text-indigo-600" />,
    path: '/services/welfare'
  },
  {
    title: 'Revenue Services',
    description: 'Pay taxes, fees, and access land records',
    icon: <Landmark className="h-5 w-5 text-indigo-600" />,
    path: '/services/revenue'
  }
];