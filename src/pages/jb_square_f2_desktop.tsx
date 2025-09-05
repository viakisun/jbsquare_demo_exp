// JB SQUARE Variant F2 — Single-file renderable (Desktop-1920, Dynamic & Refined)

import React, { useState, useRef, useEffect, ReactNode } from 'react';

// Types
interface Program {
  id: string;
  title: string;
  deadline: string;
  host: string;
  status: 'active' | 'upcoming' | 'closed';
  budget: string;
  category: string;
  popularity: number;
  daysLeft: number;
  fileUrl: string;
  description: string;
}

interface Center {
  id: string;
  name: string;
  location: string;
  occupancy: number;
  capacity: number;
  contact: string;
  established: number;
  specialization: string;
  region: string;
}

interface News {
  id: string;
  title: string;
  date: string;
  category: string;
  isEvent?: boolean;
  views: number;
  location?: string;
  eventDate?: string;
  excerpt: string;
}

interface Company {
  id: string;
  name: string;
  sector: string;
  logo: string;
  founded: number;
  employees: number;
  revenue: string;
  description: string;
}

interface Patent {
  id: string;
  title: string;
  applicant: string;
  field: string;
  year: number;
  status: string;
  citations: number;
  description: string;
}

// Embedded Data (Enhanced & Translated)
const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Bio Startup Incubation Program',
    deadline: '2025-10-15',
    host: 'Jeonbuk Technopark',
    status: 'active',
    budget: '$5M',
    category: 'Startup Support',
    popularity: 95,
    daysLeft: 44,
    fileUrl: '#',
    description: 'A comprehensive support program for the growth of early-stage bio startups.'
  },
  {
    id: '2',
    title: 'Bio-technology Commercialization Support',
    deadline: '2025-11-30',
    host: 'Jeonbuk BIO-Convergence Industry Promotion Agency',
    status: 'active',
    budget: '$3M',
    category: 'Commercialization',
    popularity: 87,
    daysLeft: 90,
    fileUrl: '#',
    description: 'Provides professional support for the commercialization of research results.'
  },
  {
    id: '3',
    title: 'K-Bio Lab Hub Construction Project',
    deadline: '2025-12-20',
    host: 'Ministry of Science and ICT',
    status: 'upcoming',
    budget: '$10M',
    category: 'Infrastructure',
    popularity: 92,
    daysLeft: 110,
    fileUrl: '#',
    description: 'Building a global-level bio research infrastructure.'
  },
  {
    id: '4',
    title: 'Bio-Health Global Expansion Support',
    deadline: '2025-09-30',
    host: 'Ministry of Trade, Industry and Energy',
    status: 'active',
    budget: '$2.5M',
    category: 'Global Expansion',
    popularity: 78,
    daysLeft: 29,
    fileUrl: '#',
    description: 'Assists bio-health companies in entering overseas markets.'
  },
  {
    id: '5',
    title: 'SME Bio R&D Support',
    deadline: '2025-10-31',
    host: 'Ministry of SMEs and Startups',
    status: 'active',
    budget: '$4M',
    category: 'R&D',
    popularity: 83,
    daysLeft: 60,
    fileUrl: '#',
    description: 'Supports research and development activities of small and medium-sized bio-enterprises.'
  },
  {
    id: '6',
    title: 'Bio-Convergence New Technology Development',
    deadline: '2025-11-15',
    host: 'Jeonbuk National University',
    status: 'active',
    budget: '$2M',
    category: 'R&D',
    popularity: 71,
    daysLeft: 75,
    fileUrl: '#',
    description: 'Supports the development of innovative bio-convergence technologies.'
  },
  {
    id: '7',
    title: 'Bio Cluster Residency Support',
    deadline: '2025-09-15',
    host: 'Jeonbuk Technopark',
    status: 'active',
    budget: '$1.5M',
    category: 'Startup Support',
    popularity: 89,
    daysLeft: 14,
    fileUrl: '#',
    description: 'A special support program for companies residing in the bio cluster.'
  },
  {
    id: '8',
    title: 'Bio Manpower Training Program',
    deadline: '2025-12-31',
    host: 'Jeonbuk BIO-Convergence Industry Promotion Agency',
    status: 'upcoming',
    budget: '$3.5M',
    category: 'Talent Nurturing',
    popularity: 65,
    daysLeft: 121,
    fileUrl: '#',
    description: 'An educational program for nurturing professional bio manpower.'
  },
  {
    id: '9',
    title: 'Bio Venture Investment Linkage Support',
    deadline: '2025-10-20',
    host: 'Jeonbuk Center for Creative Economy & Innovation',
    status: 'active',
    budget: '$4.5M',
    category: 'Investment Linkage',
    popularity: 91,
    daysLeft: 49,
    fileUrl: '#',
    description: 'Supports connections between bio venture companies and investors.'
  },
  {
    id: '10',
    title: 'Bio Regulatory Sandbox Support',
    deadline: '2025-11-10',
    host: 'Ministry of Food and Drug Safety',
    status: 'active',
    budget: '$1.8M',
    category: 'Regulatory Innovation',
    popularity: 76,
    daysLeft: 70,
    fileUrl: '#',
    description: 'Supports regulatory exceptions for innovative bio products.'
  }
];

const CENTERS: Center[] = [
  {
    id: '1',
    name: 'Jeonbuk Bio Venture Center',
    location: 'Deokjin-gu, Jeonju-si',
    occupancy: 28,
    capacity: 32,
    contact: '063-219-3200',
    established: 2018,
    specialization: 'Biopharmaceuticals',
    region: 'Jeonju'
  },
  {
    id: '2',
    name: 'Iksan Bio-Science Center',
    location: 'Sin-dong, Iksan-si',
    occupancy: 15,
    capacity: 20,
    contact: '063-859-6100',
    established: 2020,
    specialization: 'Diagnostic Reagents',
    region: 'Iksan'
  },
  {
    id: '3',
    name: 'Gunsan Bio-Medi Center',
    location: 'Soryong-dong, Gunsan-si',
    occupancy: 22,
    capacity: 25,
    contact: '063-454-8700',
    established: 2019,
    specialization: 'Medical Devices',
    region: 'Gunsan'
  },
  {
    id: '4',
    name: 'Jeongeup Bio-Material Center',
    location: 'Sannae-myeon, Jeongeup-si',
    occupancy: 18,
    capacity: 24,
    contact: '063-537-4200',
    established: 2021,
    specialization: 'Biomaterials',
    region: 'Jeongeup'
  },
  {
    id: '5',
    name: 'Gimje Bio-Food Center',
    location: 'Geumgu-myeon, Gimje-si',
    occupancy: 12,
    capacity: 18,
    contact: '063-547-3100',
    established: 2022,
    specialization: 'Bio-Food',
    region: 'Gimje'
  },
  {
    id: '6',
    name: 'Wanju Bio-Lab Center',
    location: 'Iseo-myeon, Wanju-gun',
    occupancy: 20,
    capacity: 26,
    contact: '063-291-7400',
    established: 2020,
    specialization: 'Bio-Chemicals',
    region: 'Wanju'
  }
];

const NEWS: News[] = [
    {
    id: '1',
    title: 'Jeonbuk Bio Cluster: A New Turning Point for a Leap into a Global Bio Hub',
    date: '2025-08-28',
    category: 'Policy',
    views: 1247,
    excerpt: 'Jeonbuk Bio Cluster has announced a comprehensive development plan to become a global bio hub. The plan aims to build an innovative bio ecosystem over the next five years.'
  },
  {
    id: '2',
    title: 'Bio Startup Investment Pitching Session: A Meeting of Innovative Companies and Investors',
    date: '2025-09-15',
    category: 'Event',
    isEvent: true,
    views: 892,
    location: 'Jeonju Convention Center',
    eventDate: '2025-09-15',
    excerpt: 'A special opportunity for Jeonbuk bio startups to meet domestic and foreign investors. Showcasing innovative technologies and business models of promising bio companies.'
  },
  {
    id: '3',
    title: 'Jeonbuk Bio-Companies Surpass $100 Million in Exports, Continuing Growth',
    date: '2025-08-25',
    category: 'Achievement',
    views: 1456,
    excerpt: 'The export performance of Jeonbuk bio-companies has exceeded $100 million for the first time, proving their competitiveness in the global market.'
  },
  {
    id: '4',
    title: 'K-Bio Lab Hub Confirmed for Jeonbuk, Accelerating Bio-Ecosystem Innovation',
    date: '2025-08-20',
    category: 'Policy',
    views: 2103,
    excerpt: 'With the government\'s K-Bio Lab Hub project secured for Jeonbuk, innovative development of the regional bio-ecosystem is anticipated.'
  },
  {
    id: '5',
    title: 'Bio-Convergence Technology Workshop: Exploring Future Tech Trends and Cooperation',
    date: '2025-10-12',
    category: 'Event',
    isEvent: true,
    views: 654,
    location: 'Iksan Bio-Science Center',
    eventDate: '2025-10-12',
    excerpt: 'An expert workshop to discuss innovation directions through the convergence of bio with advanced technologies like ICT and AI.'
  },
  {
    id: '6',
    title: 'Launch of Jeonbuk Bio-Company Cooperation Network',
    date: '2025-08-15',
    category: 'Cooperation',
    views: 823,
    excerpt: 'A network for mutual cooperation and joint growth among Jeonbuk bio-companies has been officially launched.'
  },
  {
    id: '7',
    title: 'Groundbreaking Ceremony for Bio Clinical Trial Center: Building Global-Level Research Infrastructure',
    date: '2025-11-05',
    category: 'Event',
    isEvent: true,
    views: 567,
    location: 'Jeonju Bio Valley',
    eventDate: '2025-11-05',
    excerpt: 'Construction of a world-class bio clinical trial center has begun, expected to enhance regional bio-research capabilities.'
  },
  {
    id: '8',
    title: 'Bio-Manufacturing Innovation Achievements Announced: Expansion of Smart Factory Adoption',
    date: '2025-08-10',
    category: 'Achievement',
    views: 934,
    excerpt: 'The results of smart factory adoption by Jeonbuk bio-manufacturers were announced, confirming improvements in productivity and quality.'
  },
  {
    id: '9',
    title: 'International Bio Conference 2025 Confirmed',
    date: '2025-12-15',
    category: 'Event',
    isEvent: true,
    views: 1123,
    location: 'Jeonju Convention Center',
    eventDate: '2025-12-15',
    excerpt: 'Asia\'s largest international bio conference will be held in Jeonbuk, enhancing its status as a global bio hub.'
  },
  {
    id: '10',
    title: 'Bio Scale-Up Program Performance Report: Producing High-Growth Companies',
    date: '2025-08-05',
    category: 'Achievement',
    views: 745,
    excerpt: 'Numerous high-growth companies have been produced through the Jeonbuk Bio Scale-Up Program, proving its success.'
  }
];

const COMPANIES: Company[] = [
  { 
    id: '1', 
    name: 'BioCell',
    sector: 'Biopharmaceuticals',
    logo: 'BC', 
    founded: 2019, 
    employees: 45, 
    revenue: '$12M',
    description: 'A biopharmaceutical company specializing in the development of innovative cell therapies.'
  },
  { 
    id: '2', 
    name: 'GeneBioTech',
    sector: 'Diagnostic Reagents',
    logo: 'JB', 
    founded: 2020, 
    employees: 32, 
    revenue: '$8.5M',
    description: 'A company developing next-generation diagnostic reagents based on precision diagnostic technology.'
  },
  { 
    id: '3', 
    name: 'MedicalBio',
    sector: 'Medical Devices',
    logo: 'MB', 
    founded: 2018, 
    employees: 67, 
    revenue: '$25M',
    description: 'A leading company providing AI-based smart medical device solutions.'
  },
  { 
    id: '4', 
    name: 'BioGen',
    sector: 'Biomaterials',
    logo: 'BG', 
    founded: 2021, 
    employees: 28, 
    revenue: '$9.5M',
    description: 'An innovative company specializing in the development and production of eco-friendly biomaterials.'
  },
  { 
    id: '5', 
    name: 'CellTherapy',
    sector: 'Cell Therapy',
    logo: 'CT', 
    founded: 2017, 
    employees: 55, 
    revenue: '$18M',
    description: 'A global leader in the development of stem cell-based cell therapies.'
  },
  { 
    id: '6', 
    name: 'BioPharm',
    sector: 'Biopharmaceuticals',
    logo: 'BP', 
    founded: 2020, 
    employees: 38, 
    revenue: '$11M',
    description: 'A specialized company focused on developing personalized biopharmaceuticals.'
  },
  { 
    id: '7', 
    name: 'GeneMed',
    sector: 'Diagnostic Reagents',
    logo: 'JM', 
    founded: 2019, 
    employees: 41, 
    revenue: '$13M',
    description: 'Providing next-generation diagnostic solutions using molecular diagnostic technology.'
  },
  { 
    id: '8', 
    name: 'BioSolution',
    sector: 'Medical Devices',
    logo: 'BS', 
    founded: 2018, 
    employees: 59, 
    revenue: '$21M',
    description: 'A total solution company combining digital healthcare solutions and medical devices.'
  },
  { 
    id: '9', 
    name: 'NewBio',
    sector: 'Biomaterials',
    logo: 'NB', 
    founded: 2020, 
    employees: 34, 
    revenue: '$9M',
    description: 'A company specializing in R&D and commercialization of renewable biomaterials.'
  },
  { 
    id: '10', 
    name: 'CellCare',
    sector: 'Cell Therapy',
    logo: 'CC', 
    founded: 2019, 
    employees: 42, 
    revenue: '$15.5M',
    description: 'A next-generation bio platform for the development and production of immunotherapy drugs.'
  },
  { 
    id: '11', 
    name: 'BioTech',
    sector: 'Biopharmaceuticals',
    logo: 'BT', 
    founded: 2021, 
    employees: 29, 
    revenue: '$7.5M',
    description: 'A new biotech company specializing in the development of antibody-based therapeutics.'
  },
  { 
    id: '12', 
    name: 'MedBio',
    sector: 'Medical Devices',
    logo: 'MD', 
    founded: 2018, 
    employees: 63, 
    revenue: '$19M',
    description: 'Developing advanced medical devices and software for precision medicine.'
  }
];

const PATENTS: Patent[] = [
  {
    id: '1',
    title: 'Stem Cell Culture Optimization Technology',
    applicant: 'Jeonbuk National University',
    field: 'Biopharmaceuticals',
    year: 2024,
    status: 'Registered',
    citations: 12,
    description: 'Innovative technology to maximize the efficiency of mass culture and differentiation of stem cells.'
  },
  {
    id: '2',
    title: 'Diagnostic Kit Development Method',
    applicant: 'BioCell',
    field: 'Diagnostic Reagents',
    year: 2024,
    status: 'Registered',
    citations: 8,
    description: 'Next-generation diagnostic kit technology for rapid and accurate disease diagnosis.'
  },
  {
    id: '3',
    title: 'Biomaterial Synthesis Process',
    applicant: 'Wonkwang University',
    field: 'Biomaterials',
    year: 2023,
    status: 'Pending',
    citations: 15,
    description: 'An eco-friendly and sustainable mass production process for biomaterials.'
  }
];

// Fallback Components
const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  className?: string;
  'aria-label'?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  'aria-label': ariaLabel,
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800',
    secondary: 'bg-green-600 text-white hover:bg-green-500',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  };
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  'aria-label'?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false, onClick, ...props }) => {
  return (
    <div 
      className={`bg-white border border-gray-200 transition-all duration-200 ${
        hover ? 'hover:shadow-lg hover:border-gray-300' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  leadText?: string;
  level?: 2 | 3;
  className?: string;
  fadeIn?: boolean;
}> = ({ title, subtitle, leadText, level = 2, className = '', fadeIn = false }) => {
  const [isVisible, setIsVisible] = useState(!fadeIn);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fadeIn) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [fadeIn]);

  const Tag = `h${level}` as 'h2' | 'h3';
  const titleSize = level === 2 ? 'text-6xl' : 'text-4xl';
  
  return (
    <div 
      ref={ref}
      className={`mb-16 ${className} ${
        fadeIn ? `transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` : ''
      }`}
    >
      {leadText && (
        <p className="text-lg font-medium text-blue-900 mb-4 uppercase tracking-wider">
          {leadText}
        </p>
      )}
      <Tag className={`${titleSize} font-bold text-gray-900 leading-tight mb-4`}>
        {title}
      </Tag>
      {subtitle && (
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

const Tabs: React.FC<{
  tabs: { key: string; label: string; count?: number }[];
  activeTab: string;
  onChange: (key: string) => void;
  className?: string;
}> = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="flex space-x-8" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => onChange(tab.key)}
            className={`py-3 px-1 border-b-2 font-medium text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 ${
              activeTab === tab.key
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 text-xs">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}> = ({ children, variant = 'default', size = 'sm' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  return (
    <span className={`inline-block font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`} role="navigation">
      <div className="max-w-7xl mx-auto px-16">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-blue-900">JB SQUARE</div>
          </div>
          <div className="hidden md:flex space-x-12">
            <a href="#cluster" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">Cluster</a>
            <a href="#programs" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">Programs</a>
            <a href="#centers" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">Centers</a>
            <a href="#news" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">News</a>
            <a href="#companies" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">Companies</a>
            <a href="#patents" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">Patents</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-32" role="contentinfo">
      <div className="max-w-7xl mx-auto px-16 py-16">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-6">JB SQUARE</div>
            <p className="text-gray-300 leading-relaxed">
              Leading the great transition of Jeonbuk industry and the high growth of companies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Cluster</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Support Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Incubation Centers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Bio News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Company Directory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Technology & Patents</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <p className="text-gray-300 mb-3">392, Gwahak-ro, Deokjin-gu, Jeonju-si, Jeollabuk-do</p>
            <p className="text-gray-300 mb-3">TEL: +82-63-219-3200</p>
            <p className="text-gray-300">EMAIL: info@jbtp.or.kr</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Jeonbuk Technopark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Component
const JBSquareF2: React.FC = () => {
  const [selectedCenter, setSelectedCenter] = useState<string>('1');
  const [programTab, setProgramTab] = useState<'all' | 'active' | 'upcoming'>('all');
  const [programSort, setProgramSort] = useState<'deadline' | 'popularity'>('deadline');
  const [newsTab, setNewsTab] = useState<'all' | 'news' | 'events'>('all');
  const [newsSort, setNewsSort] = useState<'date' | 'views'>('date');
  const [companySector, setCompanySector] = useState<string>('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // KPI calculations
  const totalCenters = CENTERS.length;
  const totalCapacity = CENTERS.reduce((sum, center) => sum + center.capacity, 0);
  const totalOccupancy = CENTERS.reduce((sum, center) => sum + center.occupancy, 0);
  const occupancyRate = Math.round((totalOccupancy / totalCapacity) * 100);

  // Filtered and sorted programs
  const filteredPrograms = PROGRAMS
    .filter(program => {
      if (programTab === 'active') return program.status === 'active';
      if (programTab === 'upcoming') return program.status === 'upcoming';
      return true;
    })
    .sort((a, b) => {
      if (programSort === 'deadline') {
        return a.daysLeft - b.daysLeft;
      }
      return b.popularity - a.popularity;
    });

  // Filtered and sorted news
  const filteredNews = NEWS
    .filter(item => {
      if (newsTab === 'news') return !item.isEvent;
      if (newsTab === 'events') return item.isEvent;
      return true;
    })
    .sort((a, b) => {
      if (newsSort === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.views - a.views;
    });

  // Filtered companies
  const filteredCompanies = COMPANIES.filter(company => 
    companySector === 'All' || company.sector === companySector
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      return;
    }
    
    setNewsletterStatus('success');
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus('idle'), 3000);
  };

  // Helper functions
  const getBadgeVariant = (status: string, daysLeft: number): 'error' | 'warning' | 'success' | 'info' => {
    if (status === 'closed') return 'error';
    if (daysLeft <= 7) return 'warning';
    if (status === 'active') return 'success';
    return 'info';
  };

  const getBadgeText = (status: string, daysLeft: number) => {
    if (status === 'closed') return 'Closed';
    if (daysLeft <= 7) return `D-${daysLeft}`;
    if (status === 'active') return 'Active';
    return 'Upcoming';
  };

  // Count calculations for tabs
  const programCounts = {
    all: PROGRAMS.length,
    active: PROGRAMS.filter(p => p.status === 'active').length,
    upcoming: PROGRAMS.filter(p => p.status === 'upcoming').length
  };

  const newsCounts = {
    all: NEWS.length,
    news: NEWS.filter(n => !n.isEvent).length,
    events: NEWS.filter(n => n.isEvent).length
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main role="main">
        {/* Hero Section with Scroll Links */}
        <section className="pt-32 pb-32 bg-gray-50" aria-labelledby="hero-title">
          <div className="max-w-6xl mx-auto px-16 text-center">
            <h1 id="hero-title" className="text-8xl font-bold text-gray-900 mb-8 leading-tight">
              JB SQUARE
            </h1>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-3xl text-gray-700 mb-6 leading-relaxed">
                Leading the Great Transformation of Jeonbuk Industry and High Growth of Companies
              </p>
              <p className="text-4xl font-semibold text-blue-900 mb-8">
                Next Jeonbuk, Best TP
              </p>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Through an innovative bio-ecosystem, we are elevating Jeonbuk to a global bio hub,
                  fostering the growth of local enterprises and creating new future industries. As an integrated platform
                  supporting the entire process from R&D to commercialization, we present a new paradigm of bio-innovation.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Button 
                size="lg" 
                className="px-12 py-5 text-xl"
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-12 py-5 text-xl"
                onClick={() => scrollToSection('cluster')}
              >
                About Cluster
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-12 py-5 text-xl"
                onClick={() => scrollToSection('companies')}
              >
                Find Companies
              </Button>
            </div>
          </div>
        </section>

        {/* JB BIO Cluster Introduction */}
        <section id="cluster" className="py-32" aria-labelledby="cluster-title">
          <div className="max-w-6xl mx-auto px-16">
            <SectionHeader 
              leadText="INNOVATION ECOSYSTEM"
              title="JB BIO Cluster"
              subtitle="The bio-industry ecosystem of Jeonbuk is an integrated innovation platform that covers the entire process from advanced R&D to commercialization. Based on the region's excellent talent and technological capabilities, we are creating a new growth engine to lead the global bio market."
              fadeIn
            />
            
            <div className="bg-white border border-gray-200 p-12">
              <div className="prose prose-xl max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-12">
                  The Jeonbuk Bio Cluster is a key hub where innovative companies in various fields such as biopharmaceuticals, medical devices, and diagnostic reagents gather to create synergy. By establishing an ecosystem covering the entire value chain from R&D to manufacturing and marketing, it is growing into a bio hub with global competitiveness.
                </p>
                
                <div className="bg-blue-50 p-8 my-12">
                  <blockquote className="text-2xl font-medium text-blue-900 leading-relaxed italic border-l-4 border-blue-900 pl-6">
                    "The future of the bio-industry depends on cooperation and innovation. JB SQUARE is the platform that makes this vision a reality. We are creating a true innovation ecosystem beyond simply providing space."
                  </blockquote>
                  <cite className="text-blue-700 text-base mt-4 block">President, Jeonbuk Technopark</cite>
                </div>
                
                <div className="grid grid-cols-2 gap-16 my-16">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Core Competencies</h3>
                    <ul className="space-y-6 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">R&D Infrastructure:</strong>
                          <p className="mt-1">With excellent researchers from Jeonbuk National University and Wonkwang University and advanced research facilities, we cover all areas from basic to applied research.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">Commercialization Support System:</strong>
                          <p className="mt-1">We help turn research results into market success through tailored support at each stage, from startup to global expansion.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">Cooperation Network:</strong>
                          <p className="mt-1">We create innovative partnerships by establishing an organic cooperation system between companies, research institutes, and investment institutions.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">Policy Linkage:</strong>
                          <p className="mt-1">Directly linked to national key policies such as K-Bio, we provide a stable and sustainable growth foundation.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Key Achievements</h3>
                    <div className="space-y-8">
                      <div className="bg-gray-50 p-8">
                        <div className="text-4xl font-bold text-blue-900 mb-3">150+</div>
                        <div className="text-lg text-gray-700 mb-2">Resident Companies & Labs</div>
                        <p className="text-sm text-gray-600">
                          Innovative companies from various fields are clustered, creating synergy.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-8">
                        <div className="text-4xl font-bold text-green-600 mb-3">$250M</div>
                        <div className="text-lg text-gray-700 mb-2">Annual Revenue</div>
                        <p className="text-sm text-gray-600">
                          Contributing significantly to the local economy through continuous growth.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-8">
                        <div className="text-4xl font-bold text-blue-900 mb-3">85%</div>
                        <div className="text-lg text-gray-700 mb-2">5-Year Survival Rate</div>
                        <p className="text-sm text-gray-600">
                          Achieving a high success rate through systematic support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Programs */}
        <section id="programs" className="py-32 bg-gray-50" aria-labelledby="programs-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="GROWTH SUPPORT"
              title="Support Programs"
              subtitle="We help innovative ideas succeed in the global market through tailored support for each growth stage of bio-companies. From startup to scale-up, we provide optimized programs to support sustainable growth."
              fadeIn
            />
            
            {/* Tab Navigation */}
            <div className="mb-8">
              <Tabs
                tabs={[
                  { key: 'all', label: 'All', count: programCounts.all },
                  { key: 'active', label: 'Active', count: programCounts.active },
                  { key: 'upcoming', label: 'Upcoming', count: programCounts.upcoming }
                ]}
                activeTab={programTab}
                onChange={(key) => setProgramTab(key as 'all' | 'active' | 'upcoming')}
                className="mb-6"
              />
              
              <div className="flex justify-end">
                <select
                  value={programSort}
                  onChange={(e) => setProgramSort(e.target.value as 'deadline' | 'popularity')}
                  className="px-4 py-2 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-label="Sort by"
                >
                  <option value="deadline">Deadline</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
            </div>
            
            {/* Programs Grid */}
            <div className="grid grid-cols-1 gap-8 mb-16">
              {filteredPrograms.map((program) => (
                <Card key={program.id} hover className="p-8">
                  <div className="grid grid-cols-4 gap-8 items-start">
                    <div className="col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge 
                          variant={getBadgeVariant(program.status, program.daysLeft)}
                          size="md"
                        >
                          {getBadgeText(program.status, program.daysLeft)}
                        </Badge>
                        <Badge variant="default">{program.category}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p>Host: {program.host}</p>
                        <p>Deadline: {program.deadline}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900 mb-2">{program.budget}</div>
                      <div className="text-sm text-gray-600">Budget</div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-lg font-bold text-green-600 mb-1">{program.popularity}</div>
                        <div className="text-xs text-gray-500">Popularity</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Button size="md" className="w-full">
                        View Details
                      </Button>
                      <Button size="md" variant="outline" className="w-full">
                        Download Application
                      </Button>
                      <Button size="sm" variant="ghost" className="w-full text-sm">
                        Add to Bookmarks
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="px-12 py-4 text-lg">
                View All Programs
              </Button>
            </div>
          </div>
        </section>

        {/* News & Events */}
        <section id="news" className="py-32 bg-white" aria-labelledby="news-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="LATEST UPDATES"
              title="Bio News & Events"
              subtitle="Get the latest news and major event information from the Jeonbuk bio-ecosystem at a glance. From industry trends to policy changes, we provide essential business information to help you keep up with the fast-changing bio-industry."
              fadeIn
            />
            
            {/* Tab Navigation */}
            <div className="mb-8">
              <Tabs
                tabs={[
                  { key: 'all', label: 'All', count: newsCounts.all },
                  { key: 'news', label: 'News', count: newsCounts.news },
                  { key: 'events', label: 'Events', count: newsCounts.events }
                ]}
                activeTab={newsTab}
                onChange={(key) => setNewsTab(key as 'all' | 'news' | 'events')}
                className="mb-6"
              />
              
              <div className="flex justify-end">
                <select
                  value={newsSort}
                  onChange={(e) => setNewsSort(e.target.value as 'date' | 'views')}
                  className="px-4 py-2 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-label="Sort by"
                >
                  <option value="date">Latest</option>
                  <option value="views">Most Viewed</option>
                </select>
              </div>
            </div>
            
            {/* Featured Article */}
            {filteredNews.length > 0 && (
              <Card className="p-12 mb-12" hover>
                <div className="grid grid-cols-3 gap-12 items-start">
                  <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="info" size="md">Featured</Badge>
                      <Badge variant={filteredNews[0].isEvent ? 'warning' : 'default'}>
                        {filteredNews[0].category}
                      </Badge>
                      <span className="text-sm text-gray-500">{filteredNews[0].date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {filteredNews[0].title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {filteredNews[0].excerpt}
                    </p>
                    {filteredNews[0].isEvent && filteredNews[0].location && (
                      <p className="text-blue-900 font-medium mb-4">
                        📍 {filteredNews[0].location} • {filteredNews[0].eventDate}
                      </p>
                    )}
                    <div className="flex items-center gap-4">
                      <Button size="lg">
                        {filteredNews[0].isEvent ? 'View Event Info' : 'Read Full Article'}
                      </Button>
                      <span className="text-sm text-gray-500">👁 {filteredNews[0].views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 h-64 flex items-center justify-center">
                    <span className="text-4xl text-gray-300">📰</span>
                  </div>
                </div>
              </Card>
            )}
            
            {/* News Grid */}
            <div className="grid grid-cols-2 gap-8">
              {filteredNews.slice(1, 7).map((item) => (
                <Card key={item.id} className="p-6" hover>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={item.isEvent ? 'info' : 'default'}>
                        {item.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.excerpt.substring(0, 120)}...
                  </p>
                  {item.isEvent && item.location && (
                    <p className="text-sm text-blue-900 font-medium mb-4">
                      📍 {item.location}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <Button size="sm" variant="outline">
                      {item.isEvent ? 'Event Info' : 'Read More'}
                    </Button>
                    <span className="text-xs text-gray-500">👁 {item.views}</span>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="px-12 py-4 text-lg">
                View All News
              </Button>
            </div>
          </div>
        </section>

        {/* JB Companies */}
        <section id="companies" className="py-32 bg-gray-50" aria-labelledby="companies-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="INNOVATION NETWORK"
              title="JB Company Directory"
              subtitle="Meet the innovative companies residing in the Jeonbuk Bio Cluster. Discover new business opportunities along with the success stories created by specialized companies in each field. We build true cooperative partnerships beyond just providing space."
              fadeIn
            />
            
            {/* Sector Filter */}
            <div className="flex justify-center mb-12">
              <select
                value={companySector}
                onChange={(e) => setCompanySector(e.target.value)}
                className="px-6 py-3 text-lg border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-label="Filter by company sector"
              >
                <option value="All">All Sectors</option>
                <option value="Biopharmaceuticals">Biopharmaceuticals</option>
                <option value="Medical Devices">Medical Devices</option>
                <option value="Diagnostic Reagents">Diagnostic Reagents</option>
                <option value="Biomaterials">Biomaterials</option>
                <option value="Cell Therapy">Cell Therapy</option>
              </select>
            </div>
            
            {/* Companies Grid */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              {filteredCompanies.map((company) => (
                <Card
                  key={company.id}
                  className="p-6 text-center transition-all duration-200 hover:shadow-lg hover:scale-105"
                  hover
                  onClick={() => {}}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${company.name}`}
                >
                  <div className="w-20 h-20 bg-blue-100 text-blue-900 font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {company.logo}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h4>
                  <div className="text-sm text-blue-900 font-medium mb-3">{company.sector}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {company.description}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-4">
                    <div>
                      <div className="font-medium text-gray-900">{company.founded}</div>
                      <div>Founded</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{company.employees}</div>
                      <div>Employees</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{company.revenue}</div>
                      <div>Revenue</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="px-12 py-4 text-lg">
                View Full Company Directory
              </Button>
            </div>
          </div>
        </section>

        {/* Incubation Centers */}
        <section id="centers" className="py-32 bg-white" aria-labelledby="centers-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="INNOVATION HUBS"
              title="Incubation Center Status"
              subtitle="Introducing Jeonbuk's bio-incubation centers that provide an optimal startup environment and professional incubation services. Each center supports the success of startups with specialized fields and differentiated services, connecting the entire region into one giant innovation ecosystem."
              fadeIn
            />
            
            <div className="grid grid-cols-4 gap-6 mb-16">
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{totalCenters}</div>
                <div className="text-gray-700 font-medium">Operating Centers</div>
                <div className="text-xs text-gray-500 mt-2">centers</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{totalOccupancy}</div>
                <div className="text-gray-700 font-medium">Total Resident Companies</div>
                <div className="text-xs text-gray-500 mt-2">companies</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{occupancyRate}%</div>
                <div className="text-gray-700 font-medium">Average Occupancy Rate</div>
                <div className="text-xs text-green-600 mt-2">↗ +5%</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{totalCapacity}</div>
                <div className="text-gray-700 font-medium">Total Available Spaces</div>
                <div className="text-xs text-gray-500 mt-2">units</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Incubation Center Information</h3>
                <div className="space-y-6">
                  {CENTERS.map((center) => (
                    <Card 
                      key={center.id} 
                      className={`p-6 cursor-pointer transition-all duration-200 ${
                        selectedCenter === center.id 
                          ? 'ring-3 ring-blue-200 border-blue-900 bg-blue-50' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedCenter(center.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {center.name}
                          </h4>
                          <div className="space-y-1 text-gray-600 mb-4">
                            <p>📍 {center.location}</p>
                            <p>🎯 {center.specialization}</p>
                            <p>📞 {center.contact}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="info" size="sm">{center.region}</Badge>
                            <Badge variant="default" size="sm">Est. {center.established}</Badge>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-blue-900 mb-1">
                            {Math.round((center.occupancy / center.capacity) * 100)}%
                          </div>
                          <div className="text-sm text-gray-500 mb-2">Occupancy</div>
                          <div className="text-lg font-medium text-gray-700">
                            {center.occupancy}/{center.capacity} units
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Center Locations & Specializations</h3>
                <div className="bg-gray-100 p-8 min-h-[500px] relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-gray-300 mb-4">🗺️</div>
                      <p className="text-xl text-gray-500 mb-6">Jeonbuk Bio Cluster Map</p>
                      <p className="text-sm text-gray-400">
                        {CENTERS.length} incubation centers distributed throughout Jeonbuk
                      </p>
                    </div>
                  </div>
                </div>
                
                {selectedCenter && (
                  <Card className="p-6">
                    {(() => {
                      const center = CENTERS.find(c => c.id === selectedCenter);
                      return center ? (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">{center.name} Details</h4>
                          <div className="space-y-3 text-gray-600">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-sm text-gray-500">Location</div>
                                <div className="font-medium">{center.location}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Specialization</div>
                                <div className="font-medium">{center.specialization}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Established</div>
                                <div className="font-medium">{center.established}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Contact</div>
                                <div className="font-medium">{center.contact}</div>
                              </div>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                              <div className="flex justify-between items-center">
                                <span>Occupancy Status</span>
                                <span className="font-bold text-blue-900">
                                  {center.occupancy} occupied / {center.capacity} total
                                </span>
                              </div>
                              <div className="mt-2 w-full bg-gray-200 h-2">
                                <div 
                                  className="bg-blue-900 h-2 transition-all duration-300" 
                                  style={{width: `${(center.occupancy / center.capacity) * 100}%`}}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Patents */}
        <section id="patents" className="py-32 bg-gray-50" aria-labelledby="patents-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="INNOVATION OUTPUT"
              title="JB Technology & Patents"
              subtitle="Introducing the technological innovation achievements and intellectual property status of the Jeonbuk Bio Cluster. We are building a sustainable innovation ecosystem through a virtuous cycle where excellent research results lead to actual commercialization."
              fadeIn
            />
            
            <div className="grid grid-cols-3 gap-12 mb-16">
              <div className="bg-white border border-gray-200 p-8 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-3">124</div>
                <div className="text-lg text-gray-700 font-medium mb-2">Registered Patents</div>
                <div className="text-sm text-green-600 font-medium">↗ +18%</div>
                <div className="text-xs text-gray-500 mt-2">vs. Previous Year</div>
              </div>
              <div className="bg-white border border-gray-200 p-8 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-3">18</div>
                <div className="text-lg text-gray-700 font-medium mb-2">Technology Transfers</div>
                <div className="text-sm text-green-600 font-medium">↗ +45%</div>
                <div className="text-xs text-gray-500 mt-2">vs. Previous Year</div>
              </div>
              <div className="bg-white border border-gray-200 p-8 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-3">7</div>
                <div className="text-lg text-gray-700 font-medium mb-2">R&D Achievements</div>
                <div className="text-xs text-gray-500 mt-2">Government Projects Completed</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Noteworthy Patents</h3>
                <div className="space-y-8">
                  {PATENTS.map((patent) => (
                    <Card key={patent.id} className="p-6" hover>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            {patent.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {patent.description}
                          </p>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p>Applicant: <span className="font-medium">{patent.applicant}</span></p>
                            <p>Field: <span className="font-medium">{patent.field}</span></p>
                            <p>Year: <span className="font-medium">{patent.year}</span></p>
                          </div>
                          <div className="flex items-center gap-4 mt-4">
                            <Badge 
                              variant={patent.status === 'Registered' ? 'success' : 'warning'}
                              size="sm"
                            >
                              {patent.status}
                            </Badge>
                            <span className="text-xs text-gray-500">Cited {patent.citations} times</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        View Patent Details
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Status by Technology Field</h3>
                <Card className="p-8 mb-8">
                  <div className="space-y-6">
                    {[
                      { field: 'Biopharmaceuticals', count: 45, percentage: 36, change: '+12%' },
                      { field: 'Medical Devices', count: 32, percentage: 26, change: '+8%' },
                      { field: 'Diagnostic Technology', count: 28, percentage: 23, change: '+15%' },
                      { field: 'Biomaterials', count: 19, percentage: 15, change: '+22%' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{item.field}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-900">{item.count} patents</span>
                            <span className="text-xs text-green-600">{item.change}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 h-3">
                          <div 
                            className="bg-blue-900 h-3 transition-all duration-500" 
                            style={{width: `${item.percentage}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <div className="bg-green-50 border border-green-200 p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">
                    💡 Recent Achievement Highlights
                  </h4>
                  <div className="space-y-3 text-sm text-green-700">
                    <p>
                      • <strong>70% of new patents registered in 2024</strong> have entered the actual commercialization stage.
                    </p>
                    <p>
                      • Average technology transfer revenue has <strong>increased by 45%</strong> compared to the previous year.
                    </p>
                    <p>
                      • International patent applications have <strong>increased by 60%</strong> compared to the previous year, strengthening global competitiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button size="lg" className="px-12 py-4 text-lg">
                View Full Patent Database
              </Button>
            </div>
          </div>
        </section>

        {/* Central Search */}
        <section className="py-32 bg-white" aria-labelledby="search-title">
          <div className="max-w-4xl mx-auto px-16 text-center">
            <SectionHeader 
              leadText="COMPREHENSIVE SEARCH"
              title="Integrated Search"
              subtitle="Find all the information of JB SQUARE at once. You can quickly search for necessary information such as support programs, company information, technology/patents, and news."
            />
            
            <div className="relative mb-12">
              <input
                type="search"
                placeholder="Search for programs, company names, technology fields, etc."
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-0"
                aria-label="Integrated search"
              />
              <button
                className="absolute right-0 top-0 h-full px-8 bg-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:ring-offset-2"
                aria-label="Execute search"
              >
                Search
              </button>
            </div>
            
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Programs</Button>
              <Button variant="outline" size="sm">Companies</Button>
              <Button variant="outline" size="sm">Patents</Button>
              <Button variant="outline" size="sm">News & Events</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label htmlFor="region-filter" className="block text-gray-700 mb-2 font-medium">Region</label>
                <select 
                  id="region-filter"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>All</option>
                  <option>Jeonju</option>
                  <option>Iksan</option>
                  <option>Gunsan</option>
                  <option>Jeongeup</option>
                  <option>Gimje</option>
                  <option>Wanju</option>
                </select>
              </div>
              <div>
                <label htmlFor="sector-filter" className="block text-gray-700 mb-2 font-medium">Sector</label>
                <select 
                  id="sector-filter"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>All</option>
                  <option>Biopharmaceuticals</option>
                  <option>Medical Devices</option>
                  <option>Diagnostic Reagents</option>
                  <option>Biomaterials</option>
                  <option>Cell Therapy</option>
                </select>
              </div>
              <div>
                <label htmlFor="stage-filter" className="block text-gray-700 mb-2 font-medium">Stage</label>
                <select 
                  id="stage-filter"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>All</option>
                  <option>Early Stage</option>
                  <option>Growth Stage</option>
                  <option>Scale-up</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-32 bg-gray-900 text-white" aria-labelledby="newsletter-title">
          <div className="max-w-4xl mx-auto px-16 text-center">
            <h2 id="newsletter-title" className="text-5xl font-bold mb-6">
              Get the Latest News
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Receive major news and support program announcements from the Jeonbuk bio-ecosystem by email.
              Don't miss out on business opportunities.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-lg text-gray-900 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:ring-offset-2"
                aria-label="Email address"
                aria-describedby={newsletterStatus !== 'idle' ? 'newsletter-status' : undefined}
              />
              <Button 
                type="submit"
                variant="secondary" 
                size="lg"
                className="px-8 py-4 text-lg"
              >
                Subscribe
              </Button>
            </form>
            
            {newsletterStatus !== 'idle' && (
              <div 
                id="newsletter-status"
                className={`mt-6 p-4 max-w-lg mx-auto ${
                  newsletterStatus === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
                role="alert" 
                aria-live="polite"
              >
                {newsletterStatus === 'success' 
                  ? 'Successfully subscribed!'
                  : 'Please enter a valid email address.'
                }
              </div>
            )}
            
            <p className="text-sm text-gray-400 mt-6">
              Your information is managed securely according to our privacy policy. You can unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JBSquareF2;