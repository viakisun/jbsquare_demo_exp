import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Building, FileText, FlaskConical, Search, Users } from 'lucide-react';

// --- DATA FOR HOMEPAGE (Curated & Korean) ---
const keyStats = [
    { value: "150+", label: "입주기업" },
    { value: "3,000억원+", label: "총 투자 규모" },
    { value: "124+", label: "등록 특허" },
    { value: "18+", label: "기술 이전" },
];

const coreServices = [
    { name: "지원사업 공고", description: "R&D, 사업화, 창업 등 맞춤형 지원사업을 찾아보세요.", icon: <FileText />, href: "/jb-square-kr-portal#programs" },
    { name: "기업 정보", description: "전북 바이오 클러스터의 혁신적인 기업들을 만나보세요.", icon: <Building />, href: "/jb-square-kr-portal#companies" },
    { name: "투자 안내", description: "세제 감면, 보조금 등 다양한 투자 인센티브를 확인하세요.", icon: <BarChart />, href: "/jb-square-kr-portal#investment" },
    { name: "입주 안내", description: "최적의 연구 및 사업 환경을 제공하는 입주 공간을 안내합니다.", icon: <FlaskConical />, href: "/jb-square-kr-portal#centers" },
    { name: "커뮤니티", description: "CEO포럼, 혁신신약살롱 등 전문가 네트워크에 참여하세요.", icon: <Users />, href: "/jb-square-kr-portal#community" },
    { name: "기술·특허", description: "대학 및 연구소의 최신 연구 성과와 특허를 확인하세요.", icon: <FileText />, href: "/jb-square-kr-portal#patents" },
];

const latestNews = [
    { title: "전북 바이오 클러스터, 글로벌 허브로 도약", date: "2025년 8월 28일", href: "#" },
    { title: "바이오 스타트업 투자 유치 설명회 성료", date: "2025년 9월 15일", href: "#" },
    { title: "전북 바이오기업 수출 1억 달러 돌파", date: "2025년 8월 25일", href: "#" },
];


// --- HOMEPAGE COMPONENTS ---
const HeroSection = () => (
    <section className="bg-gradient-to-b from-blue-50 to-white text-center py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                전북 바이오 산업의 미래, <br />
                <span className="text-blue-600">JB SQUARE</span>에서 시작됩니다.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                연구개발부터 사업화까지, 바이오 기업의 성장을 위한 모든 것을 지원하는 통합 혁신 플랫폼입니다.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Link to="/jb-square-kr-portal#investment" className="inline-block px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                    투자 안내 보기
                </Link>
                <Link to="/jb-square-kr-portal#programs" className="inline-block px-8 py-3 font-semibold text-blue-700 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-transform transform hover:scale-105">
                    지원사업 공고
                </Link>
            </div>
        </div>
    </section>
);

const StatsSection = () => (
    <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {keyStats.map(stat => (
                    <div key={stat.label}>
                        <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                        <p className="mt-1 text-sm font-medium text-gray-500">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const CoreServicesSection = () => (
    <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">핵심 서비스</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                JB SQUARE는 기업의 성장을 위해 필요한 모든 것을 연결하고 지원합니다.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreServices.map(service => (
                    <Link to={service.href} key={service.name} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-left transform hover:-translate-y-1">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-6">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

const NewsSection = () => (
    <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">최신 뉴스 및 행사</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    전북 바이오 생태계의 가장 새로운 소식을 만나보세요.
                </p>
            </div>
            <div className="mt-12 space-y-6">
                {latestNews.map(news => (
                    <Link to={news.href} key={news.title} className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-md font-semibold text-gray-800">{news.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">{news.date}</p>
                            </div>
                            <ArrowRight className="text-gray-400"/>
                        </div>
                    </Link>
                ))}
            </div>
             <div className="text-center mt-12">
                <Link to="/jb-square-kr-portal#news" className="font-semibold text-blue-600 hover:text-blue-800">
                    모든 뉴스 보기 <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </div>
    </section>
);

// --- NEW LANDING PAGE ---
const LandingPage = () => {
    return (
        <div className="bg-gray-50">
            <HeroSection />
            <StatsSection />
            <CoreServicesSection />
            <NewsSection />
        </div>
    );
};

export default LandingPage;
