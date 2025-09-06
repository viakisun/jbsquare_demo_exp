import React, { useState, FC, ReactNode } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Building, Globe, ChevronRight, Search } from 'lucide-react';

// --- DESIGN SYSTEM & UTILS ---
const PageWrapper: FC<{children: ReactNode}> = ({ children }) => <div className="bg-white font-sans text-gray-800" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>{children}</div>;
const Container: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
const Section: FC<{children: ReactNode; id: string; className?: string}> = ({ children, id, className = '' }) => <section id={id} className={`py-16 sm:py-24 ${className}`}>{children}</section>;
const SectionTitle: FC<{children: ReactNode; subtitle?: string}> = ({ children, subtitle }) => (
    <div className="text-center mb-16">
        {subtitle && <p className="text-sm font-bold text-blue-600 tracking-wider uppercase">{subtitle}</p>}
        <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">{children}</h2>
    </div>
);
const Card: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => <div className={`bg-white shadow-lg rounded-xl overflow-hidden ${className}`}>{children}</div>;
const Table: FC<{headers: string[]; data: (string|ReactNode)[][]}> = ({ headers, data }) => (
    <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
                <tr>{headers.map(h => <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {data.map((row, i) => <tr key={i} className="hover:bg-gray-50">{row.map((cell, j) => <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{cell}</td>)}</tr>)}
            </tbody>
        </table>
    </div>
);


// --- NAVIGATION & DATA STRUCTURES (KOREAN) ---

const navigationData = [
    { name: "JB-Square", href: "#jb-square", children: [{ name: "바이오밸리 소개", href: "#" }, { name: "입주기업 현황", href: "#" }] },
    { name: "커뮤니티", href: "#community", children: [{ name: "CEO포럼", href: "#" }, { name: "혁신신약살롱", href: "#" }] },
    { name: "지원기관", href: "#support-orgs", children: [{ name: "유관기관", href: "#" }, { name: "대학·연구소", href: "#" }] },
    { name: "정책·투자", href: "#investment", children: [{ name: "투자 절차", href: "#" }, { name: "인센티브", href: "#" }] },
    { name: "지원사업 공고", href: "#programs", children: [] },
    { name: "뉴스·행사", href: "#news", children: [] },
    { name: "기업정보", href: "#companies", children: [] },
];

const jbSquareData = {
    title: "JB-Square (바이오 클러스터)",
    introduction: "전북 바이오밸리는 바이오산업의 연구개발, 임상, 생산시설을 집적한 특화단지입니다.",
    location: "전북 전주시",
    mainFacilities: "연구개발센터, 임상시험센터, 생산지원시설",
    contact: "063-123-4567",
    residentCompanies: {
        industrialComplex: "전주첨단산업단지",
        location: "전주시 덕진구",
        companyCount: "150개사",
        industries: "바이오의약품, 의료기기",
    },
};

const investmentData = {
    title: "JB 바이오지원정책 / 투자 안내",
    incentives: {
        taxReductions: [
            ["국세 (법인세, 소득세)", "3년간 100%, 추가 2년간 50% 감면"],
            ["지방세 (취득세, 재산세)", "최대 15년간 감면"],
            ["관세", "자본재 도입 시 면제"],
        ],
        financialSupport: [
            ["고용보조금", "신규 고용 인력 1인당 월 100만원 지원"],
            ["교육훈련보조금", "훈련비용의 50% 지원"],
            ["현금지원 (Cash Grant)", "외국인투자금액의 최대 30%"],
        ],
    },
};

// --- COMPONENTS (KOREAN) ---

const Header: FC = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
            <Container className="flex justify-between items-center h-20">
                <a href="#" className="font-bold text-2xl text-gray-900">JB SQUARE</a>
                <nav className="hidden lg:flex items-center space-x-2">
                    {navigationData.map(item => (
                        <div key={item.name} className="relative" onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.name)} onMouseLeave={() => setOpenMenu(null)}>
                            <a href={item.href} className="px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 rounded-md flex items-center">
                                {item.name} {item.children.length > 0 && <ChevronDown size={16} className="ml-1"/>}
                            </a>
                            {item.children.length > 0 && openMenu === item.name && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        {item.children.map(child => (
                                            <a key={child.name} href={child.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{child.name}</a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="flex items-center">
                    <button className="p-2 rounded-full hover:bg-gray-100"><Search size={20}/></button>
                    <a href="#" className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">문의하기</a>
                </div>
            </Container>
        </header>
    );
};

const Footer: FC = () => (
    <footer className="bg-gray-800 text-white">
        <Container className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {navigationData.map(col => (
                    <div key={col.name}>
                        <h3 className="font-bold text-gray-200">{col.name}</h3>
                        <ul className="mt-4 space-y-2">
                            {col.children.map(child => <li key={child.name}><a href={child.href} className="text-sm text-gray-400 hover:text-white">{child.name}</a></li>)}
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

const JBSquareKRPortal: FC = () => {
    return (
        <PageWrapper>
            <Header />
            <main className="pt-20">
                <Section id="jb-square" className="bg-blue-50">
                    <Container>
                        <SectionTitle subtitle="JB-Square 소개">{jbSquareData.title}</SectionTitle>
                        <div className="grid lg:grid-cols-5 gap-8">
                            <div className="lg:col-span-3">
                                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2680&auto=format&fit=crop" alt="바이오밸리 지도" className="rounded-lg shadow-xl w-full h-full object-cover"/>
                            </div>
                            <div className="lg:col-span-2 space-y-6">
                                <Card className="p-6">
                                    <h3 className="font-bold text-lg mb-2">바이오밸리 소개</h3>
                                    <p className="text-sm">{jbSquareData.introduction}</p>
                                </Card>
                                <Card className="p-6">
                                    <h3 className="font-bold text-lg mb-2">입주기업 현황</h3>
                                    <p className="text-sm"><strong>산업단지:</strong> {jbSquareData.residentCompanies.industrialComplex}</p>
                                    <p className="text-sm"><strong>입주업체:</strong> {jbSquareData.residentCompanies.companyCount}</p>
                                    <p className="text-sm"><strong>유치업종:</strong> {jbSquareData.residentCompanies.industries}</p>
                                </Card>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Section id="investment">
                    <Container>
                        <SectionTitle subtitle="정책 및 투자">{investmentData.title}</SectionTitle>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">주요 인센티브</h3>
                                <div className="space-y-4">
                                    <Card className="p-6">
                                        <h4 className="font-semibold text-blue-700 mb-2">세제감면</h4>
                                        <Table headers={["구분", "내용"]} data={investmentData.incentives.taxReductions} />
                                    </Card>
                                     <Card className="p-6">
                                        <h4 className="font-semibold text-blue-700 mb-2">재정지원</h4>
                                        <Table headers={["구분", "내용"]} data={investmentData.incentives.financialSupport} />
                                    </Card>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-2xl font-bold mb-6">투자 절차</h3>
                                <img src="https://via.placeholder.com/600x400.png?text=투자+절차+흐름도" alt="투자 절차" className="rounded-lg shadow-md"/>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Section id="programs" className="bg-gray-100">
                    <Container>
                        <SectionTitle subtitle="R&D 및 사업화">지원사업 공고</SectionTitle>
                         <div className="flex justify-center mb-8">
                            <div className="relative w-full max-w-lg">
                                <input type="text" placeholder="사업명을 검색하세요" className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"/>
                                <button className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <Search className="h-5 w-5 text-gray-400"/>
                                </button>
                            </div>
                        </div>
                        <Table
                            headers={["번호", "사업명", "접수기간", "상태", "조회수"]}
                            data={[
                                ["1", "2025년도 바이오 스타트업 육성 프로그램", "2025.08.01 ~ 2025.09.30", "모집중", "1,204"],
                                ["2", "차세대 의료기기 상용화 지원사업", "2025.07.15 ~ 2025.08.31", "마감", "2,310"],
                                ["3", "천연물 소재 기술개발 지원", "2025.08.10 ~ 2025.09.15", "모집중", "876"],
                            ]}
                        />
                    </Container>
                </Section>
            </main>
            <Footer />
        </PageWrapper>
    );
};

export default JBSquareKRPortal;
