// JB SQUARE Variant F2 — Single-file renderable (Desktop-1920, Dynamic & Refined)

import React, { useState, useRef, useEffect } from 'react';

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

// Embedded Data (Enhanced)
const PROGRAMS: Program[] = [
  {
    id: '1',
    title: '바이오 스타트업 육성 프로그램',
    deadline: '2025-10-15',
    host: '전북테크노파크',
    status: 'active',
    budget: '50억원',
    category: '창업지원',
    popularity: 95,
    daysLeft: 44,
    fileUrl: '#',
    description: '초기 바이오 스타트업의 성장을 위한 종합 지원 프로그램입니다.'
  },
  {
    id: '2',
    title: '바이오 기술사업화 지원사업',
    deadline: '2025-11-30',
    host: '전북바이오융합산업진흥원',
    status: 'active',
    budget: '30억원',
    category: '사업화',
    popularity: 87,
    daysLeft: 90,
    fileUrl: '#',
    description: '연구 성과의 상용화를 위한 전문적인 지원을 제공합니다.'
  },
  {
    id: '3',
    title: 'K-바이오 랩허브 구축사업',
    deadline: '2025-12-20',
    host: '과학기술정보통신부',
    status: 'upcoming',
    budget: '100억원',
    category: '인프라',
    popularity: 92,
    daysLeft: 110,
    fileUrl: '#',
    description: '글로벌 수준의 바이오 연구 인프라를 구축합니다.'
  },
  {
    id: '4',
    title: '바이오헬스 글로벌 진출 지원',
    deadline: '2025-09-30',
    host: '산업통상자원부',
    status: 'active',
    budget: '25억원',
    category: '해외진출',
    popularity: 78,
    daysLeft: 29,
    fileUrl: '#',
    description: '바이오헬스 기업의 해외 시장 진출을 돕습니다.'
  },
  {
    id: '5',
    title: '중소기업 바이오 R&D 지원',
    deadline: '2025-10-31',
    host: '중소벤처기업부',
    status: 'active',
    budget: '40억원',
    category: '연구개발',
    popularity: 83,
    daysLeft: 60,
    fileUrl: '#',
    description: '중소 바이오기업의 연구개발 활동을 지원합니다.'
  },
  {
    id: '6',
    title: '바이오 융합 신기술 개발',
    deadline: '2025-11-15',
    host: '전북대학교',
    status: 'active',
    budget: '20억원',
    category: '연구개발',
    popularity: 71,
    daysLeft: 75,
    fileUrl: '#',
    description: '혁신적인 바이오 융합 기술 개발을 지원합니다.'
  },
  {
    id: '7',
    title: '바이오 클러스터 입주 지원',
    deadline: '2025-09-15',
    host: '전북테크노파크',
    status: 'active',
    budget: '15억원',
    category: '창업지원',
    popularity: 89,
    daysLeft: 14,
    fileUrl: '#',
    description: '바이오 클러스터 입주 기업을 위한 특별 지원 프로그램입니다.'
  },
  {
    id: '8',
    title: '바이오 인력양성 사업',
    deadline: '2025-12-31',
    host: '전북바이오융합산업진흥원',
    status: 'upcoming',
    budget: '35억원',
    category: '인재양성',
    popularity: 65,
    daysLeft: 121,
    fileUrl: '#',
    description: '전문 바이오 인력 양성을 위한 교육 프로그램입니다.'
  },
  {
    id: '9',
    title: '바이오 벤처 투자연계 지원',
    deadline: '2025-10-20',
    host: '전북창조경제혁신센터',
    status: 'active',
    budget: '45억원',
    category: '투자연계',
    popularity: 91,
    daysLeft: 49,
    fileUrl: '#',
    description: '바이오 벤처기업과 투자자 간의 연결을 지원합니다.'
  },
  {
    id: '10',
    title: '바이오 규제샌드박스 지원',
    deadline: '2025-11-10',
    host: '식품의약품안전처',
    status: 'active',
    budget: '18억원',
    category: '규제혁신',
    popularity: 76,
    daysLeft: 70,
    fileUrl: '#',
    description: '혁신적인 바이오 제품의 규제 특례를 지원합니다.'
  }
];

const CENTERS: Center[] = [
  {
    id: '1',
    name: '전북바이오벤처센터',
    location: '전주시 덕진구',
    occupancy: 28,
    capacity: 32,
    contact: '063-219-3200',
    established: 2018,
    specialization: '바이오의약품',
    region: '전주'
  },
  {
    id: '2',
    name: '익산바이오사이언스센터',
    location: '익산시 신동',
    occupancy: 15,
    capacity: 20,
    contact: '063-859-6100',
    established: 2020,
    specialization: '진단시약',
    region: '익산'
  },
  {
    id: '3',
    name: '군산바이오메디센터',
    location: '군산시 소룡동',
    occupancy: 22,
    capacity: 25,
    contact: '063-454-8700',
    established: 2019,
    specialization: '의료기기',
    region: '군산'
  },
  {
    id: '4',
    name: '정읍바이오소재센터',
    location: '정읍시 산내면',
    occupancy: 18,
    capacity: 24,
    contact: '063-537-4200',
    established: 2021,
    specialization: '바이오소재',
    region: '정읍'
  },
  {
    id: '5',
    name: '김제바이오푸드센터',
    location: '김제시 금구면',
    occupancy: 12,
    capacity: 18,
    contact: '063-547-3100',
    established: 2022,
    specialization: '바이오식품',
    region: '김제'
  },
  {
    id: '6',
    name: '완주바이오랩센터',
    location: '완주군 이서면',
    occupancy: 20,
    capacity: 26,
    contact: '063-291-7400',
    established: 2020,
    specialization: '바이오화학',
    region: '완주'
  }
];

const NEWS: News[] = [
  {
    id: '1',
    title: '전북 바이오 클러스터, 글로벌 바이오 허브로의 도약을 위한 새로운 전환점',
    date: '2025-08-28',
    category: '정책',
    views: 1247,
    excerpt: '전북 바이오 클러스터가 글로벌 바이오 허브로 거듭나기 위한 종합 발전 계획을 발표했습니다. 이번 계획을 통해 향후 5년간 혁신적인 바이오 생태계 구축을 목표로 합니다.'
  },
  {
    id: '2',
    title: '바이오 스타트업 투자 유치 설명회: 혁신 기업과 투자자의 만남',
    date: '2025-09-15',
    category: '행사',
    isEvent: true,
    views: 892,
    location: '전주 컨벤션센터',
    eventDate: '2025-09-15',
    excerpt: '전북 바이오 스타트업과 국내외 투자자들이 만나는 특별한 기회입니다. 유망한 바이오 기업들의 혁신 기술과 사업 모델을 소개합니다.'
  },
  {
    id: '3',
    title: '전북 바이오기업 수출 1억 달러 돌파, 성장세 지속',
    date: '2025-08-25',
    category: '성과',
    views: 1456,
    excerpt: '전북 바이오기업들의 수출 실적이 사상 최초로 1억 달러를 넘어서며, 글로벌 시장에서의 경쟁력을 입증했습니다.'
  },
  {
    id: '4',
    title: 'K-바이오 랩허브 전북 유치 확정, 바이오 생태계 혁신 가속화',
    date: '2025-08-20',
    category: '정책',
    views: 2103,
    excerpt: '정부의 K-바이오 랩허브 사업이 전북에 유치되면서, 지역 바이오 생태계의 혁신적 발전이 기대됩니다.'
  },
  {
    id: '5',
    title: '바이오 융합기술 워크샵: 미래 기술 동향과 협력 방안 모색',
    date: '2025-10-12',
    category: '행사',
    isEvent: true,
    views: 654,
    location: '익산 바이오사이언스센터',
    eventDate: '2025-10-12',
    excerpt: '바이오와 ICT, AI 등 첨단 기술의 융합을 통한 혁신 방향을 논의하는 전문가 워크샵입니다.'
  },
  {
    id: '6',
    title: '전북 바이오기업 협력 네트워크 출범식',
    date: '2025-08-15',
    category: '협력',
    views: 823,
    excerpt: '전북 바이오기업들의 상호 협력과 공동 성장을 위한 네트워크가 공식 출범했습니다.'
  },
  {
    id: '7',
    title: '바이오 임상시험센터 착공식: 글로벌 수준의 연구 인프라 구축',
    date: '2025-11-05',
    category: '행사',
    isEvent: true,
    views: 567,
    location: '전주 바이오밸리',
    eventDate: '2025-11-05',
    excerpt: '세계적 수준의 바이오 임상시험센터 건설이 시작되어, 지역 바이오 연구 역량 강화에 기여할 예정입니다.'
  },
  {
    id: '8',
    title: '바이오 제조업 혁신 성과 발표: 스마트 팩토리 도입 확산',
    date: '2025-08-10',
    category: '성과',
    views: 934,
    excerpt: '전북 바이오 제조업체들의 스마트 팩토리 도입 성과가 발표되며, 생산성 향상과 품질 개선 효과를 확인했습니다.'
  },
  {
    id: '9',
    title: '국제 바이오 컨퍼런스 2025 개최 확정',
    date: '2025-12-15',
    category: '행사',
    isEvent: true,
    views: 1123,
    location: '전주 컨벤션센터',
    eventDate: '2025-12-15',
    excerpt: '아시아 최대 규모의 국제 바이오 컨퍼런스가 전북에서 개최되어, 글로벌 바이오 허브로서의 위상을 높일 예정입니다.'
  },
  {
    id: '10',
    title: '바이오 스케일업 프로그램 성과 보고: 고속 성장 기업 배출',
    date: '2025-08-05',
    category: '성과',
    views: 745,
    excerpt: '전북 바이오 스케일업 프로그램을 통해 다수의 고속 성장 기업들이 배출되며, 프로그램의 성공을 입증했습니다.'
  }
];

const COMPANIES: Company[] = [
  { 
    id: '1', 
    name: '바이오셀', 
    sector: '바이오의약품', 
    logo: 'BC', 
    founded: 2019, 
    employees: 45, 
    revenue: '120억원',
    description: '혁신적인 세포치료제 개발에 특화된 바이오의약품 전문 기업'
  },
  { 
    id: '2', 
    name: '진바이오텍', 
    sector: '진단시약', 
    logo: 'JB', 
    founded: 2020, 
    employees: 32, 
    revenue: '85억원',
    description: '정밀 진단 기술을 기반으로 한 차세대 진단시약 개발 기업'
  },
  { 
    id: '3', 
    name: '메디컬바이오', 
    sector: '의료기기', 
    logo: 'MB', 
    founded: 2018, 
    employees: 67, 
    revenue: '250억원',
    description: 'AI 기반 스마트 의료기기 솔루션을 제공하는 선도 기업'
  },
  { 
    id: '4', 
    name: '바이오젠', 
    sector: '바이오소재', 
    logo: 'BG', 
    founded: 2021, 
    employees: 28, 
    revenue: '95억원',
    description: '친환경 바이오소재 개발 및 생산을 전문으로 하는 혁신 기업'
  },
  { 
    id: '5', 
    name: '셀테라피', 
    sector: '세포치료제', 
    logo: 'CT', 
    founded: 2017, 
    employees: 55, 
    revenue: '180억원',
    description: '줄기세포 기반 세포치료제 개발의 글로벌 리더'
  },
  { 
    id: '6', 
    name: '바이오팜', 
    sector: '바이오의약품', 
    logo: 'BP', 
    founded: 2020, 
    employees: 38, 
    revenue: '110억원',
    description: '개인 맞춤형 바이오의약품 개발에 특화된 전문 기업'
  },
  { 
    id: '7', 
    name: '진메드', 
    sector: '진단시약', 
    logo: 'JM', 
    founded: 2019, 
    employees: 41, 
    revenue: '130억원',
    description: '분자진단 기술을 활용한 차세대 진단 솔루션 제공'
  },
  { 
    id: '8', 
    name: '바이오솔루션', 
    sector: '의료기기', 
    logo: 'BS', 
    founded: 2018, 
    employees: 59, 
    revenue: '210억원',
    description: '디지털 헬스케어 솔루션과 의료기기를 융합한 토탈 솔루션 기업'
  },
  { 
    id: '9', 
    name: '뉴바이오', 
    sector: '바이오소재', 
    logo: 'NB', 
    founded: 2020, 
    employees: 34, 
    revenue: '90억원',
    description: '신재생 바이오소재 연구개발 및 상용화 전문 기업'
  },
  { 
    id: '10', 
    name: '셀케어', 
    sector: '세포치료제', 
    logo: 'CC', 
    founded: 2019, 
    employees: 42, 
    revenue: '155억원',
    description: '면역세포치료제 개발 및 생산을 위한 차세대 바이오 플랫폼'
  },
  { 
    id: '11', 
    name: '바이오테크', 
    sector: '바이오의약품', 
    logo: 'BT', 
    founded: 2021, 
    employees: 29, 
    revenue: '75억원',
    description: '항체 기반 치료제 개발에 특화된 신생 바이오테크 기업'
  },
  { 
    id: '12', 
    name: '메드바이오', 
    sector: '의료기기', 
    logo: 'MD', 
    founded: 2018, 
    employees: 63, 
    revenue: '190억원',
    description: '정밀의료를 위한 고도화된 의료기기 및 소프트웨어 개발'
  }
];

const PATENTS: Patent[] = [
  {
    id: '1',
    title: '줄기세포 배양 최적화 기술',
    applicant: '전북대학교',
    field: '바이오의약품',
    year: 2024,
    status: '등록',
    citations: 12,
    description: '줄기세포의 대량 배양과 분화 효율을 극대화하는 혁신 기술'
  },
  {
    id: '2',
    title: '진단 키트 개발 방법',
    applicant: '바이오셀',
    field: '진단시약',
    year: 2024,
    status: '등록',
    citations: 8,
    description: '신속하고 정확한 질병 진단을 위한 차세대 진단 키트 기술'
  },
  {
    id: '3',
    title: '바이오소재 합성 공정',
    applicant: '원광대학교',
    field: '바이오소재',
    year: 2023,
    status: '출원중',
    citations: 15,
    description: '친환경적이고 지속가능한 바이오소재 대량 생산 공정 기술'
  }
];

// Fallback Components
const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
  disabled?: boolean;
}> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  'aria-label': ariaLabel,
  disabled = false
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

const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}> = ({ children, className = '', hover = false, onClick }) => {
  return (
    <div 
      className={`bg-white border border-gray-200 transition-all duration-200 ${
        hover ? 'hover:shadow-lg hover:border-gray-300' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
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

    return () => observer.disconnect();
  }, [fadeIn]);

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
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
            <a href="#cluster" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">클러스터 소개</a>
            <a href="#programs" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">지원사업</a>
            <a href="#centers" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">보육센터</a>
            <a href="#news" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">뉴스·행사</a>
            <a href="#companies" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">기업정보</a>
            <a href="#patents" className="text-lg text-gray-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">기술·특허</a>
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
              전북산업 대전환과 기업 고도성장을 선도하는 Next 전북, Best TP
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">서비스</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">클러스터 소개</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">지원사업 공고</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">창업보육센터</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">정보</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">바이오뉴스</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">기업정보</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">기술·특허</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">연락처</h3>
            <p className="text-gray-300 mb-3">전라북도 전주시 덕진구 기술순환로 392</p>
            <p className="text-gray-300 mb-3">TEL: 063-219-3200</p>
            <p className="text-gray-300">EMAIL: info@jbtp.or.kr</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 전북테크노파크. All rights reserved.</p>
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
  const [companySector, setCompanySector] = useState<string>('전체');
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
    companySector === '전체' || company.sector === companySector
  );

  const handleNewsletterSubmit = () => {
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      return;
    }
    
    setNewsletterStatus('success');
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus('idle'), 3000);
  };

  // Helper functions
  const getBadgeVariant = (status: string, daysLeft: number) => {
    if (status === 'closed') return 'error';
    if (daysLeft <= 7) return 'warning';
    if (status === 'active') return 'success';
    return 'info';
  };

  const getBadgeText = (status: string, daysLeft: number) => {
    if (status === 'closed') return '마감';
    if (daysLeft <= 7) return `D-${daysLeft}`;
    if (status === 'active') return '접수중';
    return '예정';
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
                전북산업 대전환과 기업 고도성장을 선도하는
              </p>
              <p className="text-4xl font-semibold text-blue-900 mb-8">
                Next 전북, Best TP
              </p>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  혁신적인 바이오 생태계를 통해 전북을 글로벌 바이오 허브로 도약시키며, 
                  지역 기업의 성장과 새로운 미래 산업을 창조합니다. 우리는 연구개발부터 
                  상용화까지 전 과정을 지원하는 통합형 플랫폼으로서, 
                  바이오 혁신의 새로운 패러다임을 제시합니다.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Button 
                size="lg" 
                className="px-12 py-5 text-xl"
                onClick={() => scrollToSection('programs')}
              >
                지원사업 살펴보기
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-12 py-5 text-xl"
                onClick={() => scrollToSection('cluster')}
              >
                클러스터 소개 보기
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-12 py-5 text-xl"
                onClick={() => scrollToSection('companies')}
              >
                기업정보 확인하기
              </Button>
            </div>
          </div>
        </section>

        {/* JB BIO Cluster Introduction */}
        <section id="cluster" className="py-32" aria-labelledby="cluster-title">
          <div className="max-w-6xl mx-auto px-16">
            <SectionHeader 
              leadText="INNOVATION ECOSYSTEM"
              title="JB BIO 클러스터" 
              subtitle="전북의 바이오 산업 생태계는 첨단 연구개발부터 상용화까지 전 과정을 아우르는 통합형 혁신 플랫폼입니다. 우리는 지역의 우수한 인재와 기술력을 바탕으로 글로벌 바이오 시장을 선도하는 새로운 성장 동력을 만들어가고 있습니다."
              fadeIn
            />
            
            <div className="bg-white border border-gray-200 p-12">
              <div className="prose prose-xl max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-12">
                  전북 바이오 클러스터는 바이오의약품, 의료기기, 진단시약 등 다양한 분야에서 
                  혁신 기업들이 모여 시너지를 창출하는 핵심 거점입니다. 
                  연구개발부터 제조, 마케팅까지 밸류체인 전반에 걸친 생태계를 구축하여 
                  글로벌 경쟁력을 갖춘 바이오 허브로 성장하고 있습니다.
                </p>
                
                <div className="bg-blue-50 p-8 my-12">
                  <blockquote className="text-2xl font-medium text-blue-900 leading-relaxed italic border-l-4 border-blue-900 pl-6">
                    "바이오 산업의 미래는 협력과 혁신에 달려 있습니다. 
                    JB SQUARE는 이러한 비전을 현실로 만드는 플랫폼입니다. 
                    우리는 단순한 공간 제공을 넘어 진정한 혁신 생태계를 만들어가고 있습니다."
                  </blockquote>
                  <cite className="text-blue-700 text-base mt-4 block">전북테크노파크 원장</cite>
                </div>
                
                <div className="grid grid-cols-2 gap-16 my-16">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">핵심 역량</h3>
                    <ul className="space-y-6 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">연구개발 인프라:</strong> 
                          <p className="mt-1">전북대, 원광대 등 우수 연구진과 첨단 연구시설을 보유하여 
                          기초연구부터 응용연구까지 전 영역을 커버합니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">사업화 지원 체계:</strong>
                          <p className="mt-1">창업부터 글로벌 진출까지 단계별 맞춤 지원을 통해 
                          연구 성과가 시장 성과로 이어지도록 돕습니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">협력 네트워크:</strong>
                          <p className="mt-1">기업, 연구소, 투자기관 간 유기적 협력 체계를 구축하여 
                          혁신적인 파트너십을 창출합니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-900 mr-4 text-xl">•</span>
                        <div>
                          <strong className="text-gray-900">정책 연계:</strong>
                          <p className="mt-1">K-바이오 등 국가 핵심 정책과 직접 연결되어 
                          안정적이고 지속가능한 성장 기반을 제공합니다.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">주요 성과</h3>
                    <div className="space-y-8">
                      <div className="bg-gray-50 p-8">
                        <div className="text-4xl font-bold text-blue-900 mb-3">150+</div>
                        <div className="text-lg text-gray-700 mb-2">입주 기업 및 연구소</div>
                        <p className="text-sm text-gray-600">
                          다양한 분야의 혁신 기업들이 집적되어 시너지 효과를 창출하고 있습니다.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-8">
                        <div className="text-4xl font-bold text-green-600 mb-3">2,500억원</div>
                        <div className="text-lg text-gray-700 mb-2">연간 매출 규모</div>
                        <p className="text-sm text-gray-600">
                          지속적인 성장을 통해 지역 경제에 크게 기여하고 있습니다.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-8">
                        <div className="text-4xl font-bold text-blue-900 mb-3">85%</div>
                        <div className="text-lg text-gray-700 mb-2">기업 생존율 (5년 기준)</div>
                        <p className="text-sm text-gray-600">
                          체계적인 지원을 통해 높은 성공률을 기록하고 있습니다.
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
              title="지원사업 공고" 
              subtitle="바이오 기업의 성장 단계별 맞춤 지원을 통해 혁신적인 아이디어가 글로벌 시장에서 성공할 수 있도록 돕습니다. 창업부터 스케일업까지, 각 단계에 최적화된 프로그램을 제공하여 지속가능한 성장을 지원합니다."
              fadeIn
            />
            
            {/* Tab Navigation */}
            <div className="mb-8">
              <Tabs
                tabs={[
                  { key: 'all', label: '전체', count: programCounts.all },
                  { key: 'active', label: '접수중', count: programCounts.active },
                  { key: 'upcoming', label: '예정', count: programCounts.upcoming }
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
                  aria-label="정렬 방식"
                >
                  <option value="deadline">마감 임박순</option>
                  <option value="popularity">인기순</option>
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
                        <p>주관기관: {program.host}</p>
                        <p>마감일: {program.deadline}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900 mb-2">{program.budget}</div>
                      <div className="text-sm text-gray-600">지원 규모</div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-lg font-bold text-green-600 mb-1">{program.popularity}</div>
                        <div className="text-xs text-gray-500">인기도</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Button size="md" className="w-full">
                        상세정보 보기
                      </Button>
                      <Button size="md" variant="outline" className="w-full">
                        신청서 다운로드
                      </Button>
                      <Button size="sm" variant="ghost" className="w-full text-sm">
                        북마크 추가
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="px-12 py-4 text-lg">
                모든 지원사업 보기
              </Button>
            </div>
          </div>
        </section>

        {/* News & Events */}
        <section id="news" className="py-32 bg-white" aria-labelledby="news-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="LATEST UPDATES"
              title="바이오뉴스 & 행사" 
              subtitle="전북 바이오 생태계의 최신 소식과 주요 행사 정보를 한눈에 확인하세요. 업계 동향부터 정책 변화까지, 비즈니스에 필요한 핵심 정보를 제공하여 빠르게 변화하는 바이오 산업의 흐름을 파악할 수 있습니다."
              fadeIn
            />
            
            {/* Tab Navigation */}
            <div className="mb-8">
              <Tabs
                tabs={[
                  { key: 'all', label: '전체', count: newsCounts.all },
                  { key: 'news', label: '뉴스', count: newsCounts.news },
                  { key: 'events', label: '행사', count: newsCounts.events }
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
                  aria-label="정렬 방식"
                >
                  <option value="date">최신순</option>
                  <option value="views">조회수순</option>
                </select>
              </div>
            </div>
            
            {/* Featured Article */}
            {filteredNews.length > 0 && (
              <Card className="p-12 mb-12" hover>
                <div className="grid grid-cols-3 gap-12 items-start">
                  <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="info" size="md">특집</Badge>
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
                        {filteredNews[0].isEvent ? '행사 정보 보기' : '전문 읽기'}
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
                      {item.isEvent ? '행사 정보' : '자세히 보기'}
                    </Button>
                    <span className="text-xs text-gray-500">👁 {item.views}</span>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="px-12 py-4 text-lg">
                모든 뉴스 보기
              </Button>
            </div>
          </div>
        </section>

        {/* JB Companies */}
        <section id="companies" className="py-32 bg-gray-50" aria-labelledby="companies-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="INNOVATION NETWORK"
              title="JB 기업정보" 
              subtitle="전북 바이오 클러스터에 입주한 혁신 기업들을 만나보세요. 각 분야의 전문 기업들이 만들어가는 성공 스토리와 함께 새로운 비즈니스 기회를 발견하실 수 있습니다. 우리는 단순한 입주 공간을 넘어 진정한 협력 파트너십을 구축합니다."
              fadeIn
            />
            
            {/* Sector Filter */}
            <div className="flex justify-center mb-12">
              <select
                value={companySector}
                onChange={(e) => setCompanySector(e.target.value)}
                className="px-6 py-3 text-lg border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-label="기업 분야 필터"
              >
                <option value="전체">전체 분야</option>
                <option value="바이오의약품">바이오의약품</option>
                <option value="의료기기">의료기기</option>
                <option value="진단시약">진단시약</option>
                <option value="바이오소재">바이오소재</option>
                <option value="세포치료제">세포치료제</option>
              </select>
            </div>
            
            {/* Companies Grid */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              {filteredCompanies.map((company) => (
                <Card
                  key={company.id}
                  className="p-6 text-center transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${company.name} 정보 보기`}
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
                      <div>설립</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{company.employees}</div>
                      <div>직원수</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{company.revenue}</div>
                      <div>매출</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    기업정보 보기
                  </Button>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="px-12 py-4 text-lg">
                전체 기업 디렉토리 보기
              </Button>
            </div>
          </div>
        </section>

        {/* Incubation Centers */}
        <section id="centers" className="py-32 bg-white" aria-labelledby="centers-title">
          <div className="max-w-7xl mx-auto px-16">
            <SectionHeader 
              leadText="INNOVATION HUBS"
              title="창업보육센터 현황" 
              subtitle="최적의 창업 환경과 전문적인 보육 서비스를 제공하는 전북의 바이오 창업보육센터들을 소개합니다. 각 센터는 특성화된 분야와 차별화된 서비스로 스타트업의 성공을 지원하며, 지역 전체가 하나의 거대한 혁신 생태계로 연결됩니다."
              fadeIn
            />
            
            <div className="grid grid-cols-4 gap-6 mb-16">
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{totalCenters}</div>
                <div className="text-gray-700 font-medium">운영 센터 수</div>
                <div className="text-xs text-gray-500 mt-2">개소</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{totalOccupancy}</div>
                <div className="text-gray-700 font-medium">총 입주 기업</div>
                <div className="text-xs text-gray-500 mt-2">개사</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{occupancyRate}%</div>
                <div className="text-gray-700 font-medium">평균 입주율</div>
                <div className="text-xs text-green-600 mt-2">↗ +5%</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{totalCapacity}</div>
                <div className="text-gray-700 font-medium">총 보유 공간</div>
                <div className="text-xs text-gray-500 mt-2">실</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">보육센터 정보</h3>
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
                            <Badge variant="default" size="sm">{center.established}년 설립</Badge>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-blue-900 mb-1">
                            {Math.round((center.occupancy / center.capacity) * 100)}%
                          </div>
                          <div className="text-sm text-gray-500 mb-2">입주율</div>
                          <div className="text-lg font-medium text-gray-700">
                            {center.occupancy}/{center.capacity}실
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">센터 위치 및 특화분야</h3>
                <div className="bg-gray-100 p-8 min-h-[500px] relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-gray-300 mb-4">🗺️</div>
                      <p className="text-xl text-gray-500 mb-6">전북 바이오 클러스터 지도</p>
                      <p className="text-sm text-gray-400">
                        {CENTERS.length}개 보육센터가 전북 전역에 분포
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
                          <h4 className="text-xl font-bold text-gray-900 mb-4">{center.name} 상세정보</h4>
                          <div className="space-y-3 text-gray-600">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-sm text-gray-500">위치</div>
                                <div className="font-medium">{center.location}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">특화분야</div>
                                <div className="font-medium">{center.specialization}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">설립년도</div>
                                <div className="font-medium">{center.established}년</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">연락처</div>
                                <div className="font-medium">{center.contact}</div>
                              </div>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                              <div className="flex justify-between items-center">
                                <span>입주 현황</span>
                                <span className="font-bold text-blue-900">
                                  {center.occupancy}실 입주 / {center.capacity}실 보유
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
              title="JB 기술·특허" 
              subtitle="전북 바이오 클러스터의 기술 혁신 성과와 지식재산권 현황을 소개합니다. 우수한 연구 성과가 실제 사업화로 연결되는 선순환 구조를 통해 지속가능한 혁신 생태계를 구축하고 있습니다."
              fadeIn
            />
            
            <div className="grid grid-cols-3 gap-12 mb-16">
              <div className="bg-white border border-gray-200 p-8 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-3">124</div>
                <div className="text-lg text-gray-700 font-medium mb-2">등록 특허</div>
                <div className="text-sm text-green-600 font-medium">↗ +18%</div>
                <div className="text-xs text-gray-500 mt-2">전년 대비</div>
              </div>
              <div className="bg-white border border-gray-200 p-8 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-3">18</div>
                <div className="text-lg text-gray-700 font-medium mb-2">기술 이전</div>
                <div className="text-sm text-green-600 font-medium">↗ +45%</div>
                <div className="text-xs text-gray-500 mt-2">전년 대비</div>
              </div>
              <div className="bg-white border border-gray-200 p-8 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-3">7</div>
                <div className="text-lg text-gray-700 font-medium mb-2">R&D 성과</div>
                <div className="text-xs text-gray-500 mt-2">정부과제 완료</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">주목할 만한 특허</h3>
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
                            <p>출원인: <span className="font-medium">{patent.applicant}</span></p>
                            <p>기술분야: <span className="font-medium">{patent.field}</span></p>
                            <p>등록년도: <span className="font-medium">{patent.year}</span></p>
                          </div>
                          <div className="flex items-center gap-4 mt-4">
                            <Badge 
                              variant={patent.status === '등록' ? 'success' : 'warning'}
                              size="sm"
                            >
                              {patent.status}
                            </Badge>
                            <span className="text-xs text-gray-500">인용 {patent.citations}회</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        특허 상세정보 보기
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">기술 분야별 현황</h3>
                <Card className="p-8 mb-8">
                  <div className="space-y-6">
                    {[
                      { field: '바이오의약품', count: 45, percentage: 36, change: '+12%' },
                      { field: '의료기기', count: 32, percentage: 26, change: '+8%' },
                      { field: '진단기술', count: 28, percentage: 23, change: '+15%' },
                      { field: '바이오소재', count: 19, percentage: 15, change: '+22%' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{item.field}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-900">{item.count}건</span>
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
                    💡 최근 성과 하이라이트
                  </h4>
                  <div className="space-y-3 text-sm text-green-700">
                    <p>
                      • 2024년 새로 등록된 특허 중 <strong>70%가 실제 사업화 단계</strong>에 진입
                    </p>
                    <p>
                      • 평균 기술이전 수익이 <strong>전년 대비 45% 증가</strong>
                    </p>
                    <p>
                      • 국제 특허 출원이 <strong>전년 대비 60% 증가</strong>하여 글로벌 경쟁력 강화
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button size="lg" className="px-12 py-4 text-lg">
                특허 데이터베이스 전체 보기
              </Button>
            </div>
          </div>
        </section>

        {/* Central Search */}
        <section className="py-32 bg-white" aria-labelledby="search-title">
          <div className="max-w-4xl mx-auto px-16 text-center">
            <SectionHeader 
              leadText="COMPREHENSIVE SEARCH"
              title="통합 검색" 
              subtitle="JB SQUARE의 모든 정보를 한 번에 찾아보세요. 지원사업, 기업정보, 기술·특허, 뉴스 등 필요한 정보를 빠르게 검색할 수 있습니다."
            />
            
            <div className="relative mb-12">
              <input
                type="search"
                placeholder="지원사업, 기업명, 기술 분야 등을 검색하세요"
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-0"
                aria-label="통합 검색"
              />
              <button
                className="absolute right-0 top-0 h-full px-8 bg-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:ring-offset-2"
                aria-label="검색 실행"
              >
                검색
              </button>
            </div>
            
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <Button variant="outline" size="sm">전체</Button>
              <Button variant="outline" size="sm">지원사업</Button>
              <Button variant="outline" size="sm">기업정보</Button>
              <Button variant="outline" size="sm">기술·특허</Button>
              <Button variant="outline" size="sm">뉴스·행사</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label htmlFor="region-filter" className="block text-gray-700 mb-2 font-medium">지역</label>
                <select 
                  id="region-filter"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>전체</option>
                  <option>전주시</option>
                  <option>익산시</option>
                  <option>군산시</option>
                  <option>정읍시</option>
                  <option>김제시</option>
                  <option>완주군</option>
                </select>
              </div>
              <div>
                <label htmlFor="sector-filter" className="block text-gray-700 mb-2 font-medium">분야</label>
                <select 
                  id="sector-filter"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>전체</option>
                  <option>바이오의약품</option>
                  <option>의료기기</option>
                  <option>진단시약</option>
                  <option>바이오소재</option>
                  <option>세포치료제</option>
                </select>
              </div>
              <div>
                <label htmlFor="stage-filter" className="block text-gray-700 mb-2 font-medium">단계</label>
                <select 
                  id="stage-filter"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>전체</option>
                  <option>초기단계</option>
                  <option>성장단계</option>
                  <option>스케일업</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-32 bg-gray-900 text-white" aria-labelledby="newsletter-title">
          <div className="max-w-4xl mx-auto px-16 text-center">
            <h2 id="newsletter-title" className="text-5xl font-bold mb-6">
              최신 소식을 받아보세요
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              전북 바이오 생태계의 주요 소식과 지원사업 공고를 이메일로 받아보실 수 있습니다. 
              비즈니스 기회를 놓치지 마세요.
            </p>
            
            <div className="flex gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-4 text-lg text-gray-900 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:ring-offset-2"
                aria-label="이메일 주소"
                aria-describedby={newsletterStatus !== 'idle' ? 'newsletter-status' : undefined}
              />
              <Button 
                onClick={handleNewsletterSubmit}
                variant="secondary" 
                size="lg"
                className="px-8 py-4 text-lg"
              >
                구독하기
              </Button>
            </div>
            
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
                  ? '성공적으로 구독되었습니다!' 
                  : '올바른 이메일 주소를 입력해주세요.'
                }
              </div>
            )}
            
            <p className="text-sm text-gray-400 mt-6">
              개인정보 처리방침에 따라 안전하게 관리됩니다. 언제든지 구독을 취소할 수 있습니다.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Reduced motion styles */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default JBSquareF2;