import React, { useState, FC, ReactNode } from 'react';
import { ChevronDown, ArrowRight, Search, MapPin, Phone, Mail, Building, Briefcase, FileText, FlaskConical } from 'lucide-react';

// --- DESIGN SYSTEM & BASE COMPONENTS ---
const PageWrapper: FC<{children: ReactNode}> = ({ children }) => <div className="bg-white font-sans text-gray-700" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>{children}</div>;
const Container: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
const Section: FC<{children: ReactNode; id: string; className?: string}> = ({ children, id, className = '' }) => <section id={id} className={`py-20 sm:py-28 ${className}`}>{children}</section>;

const SectionTitle: FC<{children: ReactNode; subtitle?: string}> = ({ children, subtitle }) => (
    <div className="text-center mb-16">
        {subtitle && <p className="text-sm font-bold text-blue-800 tracking-wider uppercase">{subtitle}</p>}
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">{children}</h2>
    </div>
);

const YellowButton: FC<{children: ReactNode; href: string;}> = ({ children, href }) => (
    <a href={href} className="inline-block px-8 py-3 font-bold text-gray-900 bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105">
        {children}
    </a>
);

// --- DATA STRUCTURES (KOREAN) ---

const navigationData = [
    { name: "JB-Square", href: "#jb-square", children: [{ name: "바이오밸리 소개", href: "#" }, { name: "입주기업 현황", href: "#" }] },
    { name: "커뮤니티", href: "#community", children: [{ name: "CEO포럼", href: "#" }, { name: "혁신신약살롱", href: "#" }] },
    { name: "지원기관", href: "#support", children: [{ name: "대학·연구소", href: "#" }] },
    { name: "정책·투자", href: "#investment", children: [{ name: "투자 절차", href: "#" }, { name: "인센티브", href: "#" }] },
    { name: "지원사업", href: "#programs" },
    { name: "뉴스·행사", href: "#news" },
];

const jbSquareData = {
    hero: {
        title: "전북 바이오 산업의 미래",
        subtitle: "JB SQUARE에서 시작됩니다",
        img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2574&auto=format&fit=crop",
    },
    intro: {
        title: "JB-Square: 전북 바이오 클러스터",
        content: "연구개발, 임상, 생산시설을 집적한 특화단지로서, 기업의 성장을 위한 최적의 인프라를 제공합니다.",
        location: "전북 전주시",
        contact: "063-123-4567",
    }
};

const communityData = {
    title: "커뮤니티",
    forums: [
        { name: "CEO 포럼", description: "회원기관 CEO간의 정보 교류 및 네트워크 구축", schedule: "분기별 정례회의", highlight: true },
        { name: "혁신신약살롱", description: "신약 개발 관련 연구자들의 최신 기술 동향 및 아이디어 공유", schedule: "월 1회", highlight: false },
        { name: "전북경제포럼", description: "지역 경제 발전을 위한 산학연관 전문가 포럼", schedule: "연 2회", highlight: false },
    ]
};

const programsData = {
    title: "JB 지원사업 공고",
    programs: [
        { title: "2025년도 바이오 스타트업 육성 프로그램", status: "접수중", deadline: "2025.09.30" },
        { title: "차세대 의료기기 상용화 지원사업", status: "마감임박", deadline: "2025.08.31" },
        { title: "천연물 소재 기술개발 지원", status: "접수중", deadline: "2025.09.15" },
    ]
};


// --- PAGE-SPECIFIC COMPONENTS ---

const Header: FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <Container className="flex justify-between items-center h-20">
                <a href="#" className="font-extrabold text-2xl text-gray-900">JB SQUARE</a>
                <nav className="hidden lg:flex items-center space-x-8">
                    {navigationData.map(item => (
                        <a key={item.name} href={item.href} className="text-base font-medium text-gray-600 hover:text-blue-800">{item.name}</a>
                    ))}
                </nav>
                <a href="#" className="hidden lg:inline-block px-5 py-2 text-sm font-bold text-gray-900 bg-yellow-400 rounded-md hover:bg-yellow-500">포털 문의</a>
            </Container>
        </header>
    );
};

const Hero: FC = () => (
    <div className="relative bg-gray-800">
        <div className="absolute inset-0">
            <img className="w-full h-full object-cover" src={jbSquareData.hero.img} alt="연구실 배경 이미지" />
            <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
        </div>
        <Container className="relative py-32 sm:py-48 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">{jbSquareData.hero.title}</h1>
            <p className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-yellow-400">{jbSquareData.hero.subtitle}</p>
            <div className="mt-10">
                <YellowButton href="#investment">투자 가이드 보기</YellowButton>
            </div>
        </Container>
    </div>
);

const ProgramCard: FC<(typeof programsData.programs[0])> = ({ title, status, deadline }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 relative">
        {status === "마감임박" && <div className="absolute top-0 right-6 -mt-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">마감 임박</div>}
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">접수 기한: {deadline}</p>
        <a href="#" className="text-blue-600 font-semibold text-sm mt-4 inline-block">자세히 보기 <ArrowRight className="inline h-4 w-4"/></a>
    </div>
);

const CommunityCard: FC<(typeof communityData.forums[0])> = ({ name, description, schedule, highlight }) => (
    <div className={`rounded-lg p-6 ${highlight ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-white shadow-md'}`}>
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <p className="text-xs text-gray-500 mt-4"><strong>운영:</strong> {schedule}</p>
    </div>
);

const Footer: FC = () => (
    <footer className="bg-gray-800 text-white">
        <Container className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {navigationData.map(col => (
                    <div key={col.name}>
                        <h3 className="font-bold text-gray-200">{col.name}</h3>
                        <ul className="mt-4 space-y-2">
                            {col.children && col.children.map(child => <li key={child.name}><a href={child.href} className="text-sm text-gray-400 hover:text-white">{child.name}</a></li>)}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                <p>전북특별자치도 전주시 덕진구 팔과정로 164 (재)전북테크노파크</p>
                <p className="mt-1">© 2025 JB Technopark. All Rights Reserved.</p>
            </div>
        </Container>
    </footer>
);

// --- MAIN PORTAL PAGE ---

const JBMassBioPortal: FC = () => {
    return (
        <PageWrapper>
            <Header />
            <main>
                <Hero />

                <Section id="jb-square">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <p className="text-sm font-bold text-blue-800 tracking-wider uppercase">CLUSTER</p>
                                <h2 className="mt-2 text-4xl font-extrabold text-gray-900">{jbSquareData.intro.title}</h2>
                                <p className="mt-4 text-lg text-gray-600">{jbSquareData.intro.content}</p>
                                <div className="mt-8 space-y-4 text-sm">
                                    <p className="flex items-center"><MapPin size={16} className="mr-2 text-gray-400"/><strong>위치:</strong> {jbSquareData.intro.location}</p>
                                    <p className="flex items-center"><Phone size={16} className="mr-2 text-gray-400"/><strong>대표번호:</strong> {jbSquareData.intro.contact}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gray-100 p-6 rounded-lg text-center">
                                    <p className="text-4xl font-bold text-blue-800">150+</p>
                                    <p className="text-sm font-medium">입주기업</p>
                                </div>
                                <div className="bg-gray-100 p-6 rounded-lg text-center">
                                    <p className="text-4xl font-bold text-blue-800">20+</p>
                                    <p className="text-sm font-medium">대학·연구소</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Section id="programs" className="bg-gray-50">
                    <Container>
                        <SectionTitle subtitle="SUPPORT">지원사업 공고</SectionTitle>
                        <div className="grid md:grid-cols-3 gap-8">
                            {programsData.programs.map(p => <ProgramCard key={p.title} {...p} />)}
                        </div>
                    </Container>
                </Section>

                <Section id="community">
                    <Container>
                        <SectionTitle subtitle="NETWORK">커뮤니티</SectionTitle>
                        <div className="grid md:grid-cols-3 gap-8">
                            {communityData.forums.map(f => <CommunityCard key={f.name} {...f} />)}
                        </div>
                    </Container>
                </Section>

                <Section id="newsletter" className="bg-yellow-400">
                    <Container className="text-center py-12">
                         <h2 className="text-3xl font-bold text-gray-900">뉴스레터 구독</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-gray-800">최신 지원사업 및 바이오 산업 동향을 이메일로 받아보세요.</p>
                        <form className="mt-8 flex justify-center">
                            <input type="email" placeholder="이메일 주소를 입력하세요" className="px-5 py-3 w-full max-w-sm border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"/>
                            <button type="submit" className="px-5 py-3 bg-gray-900 text-white font-bold rounded-r-md hover:bg-gray-800">구독하기</button>
                        </form>
                    </Container>
                </Section>
            </main>
            <Footer />
        </PageWrapper>
    );
};

export default JBMassBioPortal;
