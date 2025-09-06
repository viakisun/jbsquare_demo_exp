import { ReactNode } from 'react';

export interface NavItem { name: string; href: string; children?: { name: string; href: string; }[]; }

export const navigationData: NavItem[] = [
    { name: "JB-Square", href: "#jb-square", children: [{ name: "바이오밸리 소개", href: "#" }, { name: "입주기업 현황", href: "#" }] },
    { name: "지원사업", href: "#programs", children: [{ name: "정부/지자체 공고", href: "#" }] },
    { name: "커뮤니티", href: "#community", children: [{ name: "CEO포럼", href: "#" }, { name: "혁신신약살롱", href: "#" }] },
    { name: "지원기관", href: "#support", children: [{ name: "대학·연구소", href: "#" }] },
    { name: "정책·투자", href: "#investment", children: [{ name: "투자 절차", href: "#" }, { name: "인센티브", href: "#" }] },
    { name: "뉴스·행사", href: "#news", children: [{ name: "최신 뉴스", href: "#" }, { name: "바이오 행사", href: "#" }] },
];

export const jbSquareData = {
    hero: { title: "전북 바이오 산업의 미래", subtitle: "JB SQUARE에서 시작됩니다", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2574&auto=format&fit=crop" },
    intro: { title: "JB-Square: 전북 바이오 클러스터", content: "연구개발, 임상, 생산시설을 집적한 특화단지로서, 기업의 성장을 위한 최적의 인프라를 제공합니다.", location: "전북 전주시", contact: "063-123-4567" },
    stats: [
        { value: 150, label: "입주기업" },
        { value: 20, label: "대학·연구소" },
        { value: 3000, label: "총 투자 규모 (억원)" },
        { value: 124, label: "등록 특허" },
    ]
};

export const programsData = {
    title: "JB 지원사업 공고",
    programs: [
        { title: "2025년도 바이오 스타트업 육성 프로그램", status: "접수중", deadline: "2025.09.30", field: "창업지원", type: "R&D" },
        { title: "차세대 의료기기 상용화 지원사업", status: "마감임박", deadline: "2025.08.31", field: "사업화", type: "비R&D" },
        { title: "천연물 소재 기술개발 지원", status: "접수중", deadline: "2025.09.15", field: "연구개발", type: "R&D" },
        { title: "AI 신약개발 플랫폼 구축사업", status: "신규", deadline: "2025.10.10", field: "인프라", type: "R&D" },
        { title: "글로벌 바이오 인력양성", status: "신규", deadline: "2025.10.20", field: "인재양성", type: "비R&D" },
        { title: "바이오헬스 글로벌 진출 지원", status: "접수중", deadline: "2025.09.30", field: "해외진출", type: "비R&D" },
    ]
};

export const incubationData = {
    title: "창업 보육센터",
    centers: [
        { name: "전북바이오벤처센터", location: "전주시 덕진구", target: "바이오의약품 스타트업", vacancy: 3, total: 32 },
        { name: "익산바이오사이언스센터", location: "익산시 신동", target: "진단시약, 의료기기", vacancy: 1, total: 20 },
        { name: "정읍바이오소재센터", location: "정읍시 산내면", target: "바이오소재, 화장품", vacancy: 5, total: 24 },
    ]
};

export const patentData = {
    title: "기술 및 특허",
    patents: [
        { title: "줄기세포 배양 최적화 기술", applicant: "전북대학교", field: "바이오의약품", year: 2024 },
        { title: "진단 키트 개발 신규 방법론", applicant: "바이오셀", field: "진단시약", year: 2024 },
        { title: "친환경 바이오소재 합성 공정", applicant: "원광대학교", field: "바이오소재", year: 2023 },
        { title: "AI 기반 영상 진단 보조 시스템", applicant: "메디컬바이오", field: "의료기기", year: 2024 },
    ]
};

export const communityData = {
    title: "커뮤니티",
    forums: [
        { name: "CEO 포럼", description: "회원기관 CEO간의 정보 교류 및 네트워크 구축", schedule: "분기별 정례회의", highlight: true },
        { name: "혁신신약살롱", description: "신약 개발 관련 연구자들의 최신 기술 동향 및 아이디어 공유", schedule: "월 1회", highlight: false },
        { name: "전북경제포럼", description: "지역 경제 발전을 위한 산학연관 전문가 포럼", schedule: "연 2회", highlight: false },
    ]
};

export const supportOrgsData = {
    title: "대학 · 연구소",
    orgs: [
        { name: "전북대학교", type: "대학", field: "의·생명과학, 농생명", website: "#" },
        { name: "원광대학교", type: "대학", field: "한의학, 바이오 융합", website: "#" },
        { name: "안전성평가연구소", type: "연구소", field: "GLP 독성시험, 효능평가", website: "#" },
        { name: "한국생명공학연구원", type: "연구소", field: "유전체, 마이크로바이옴", website: "#" },
    ]
};
