import React, { useState, FC, ReactNode } from 'react';
import { ChevronRight, MapPin, Phone, Mail, ArrowRight, Search, Building, Briefcase, FileText, Globe } from 'lucide-react';

// --- DESIGN SYSTEM COMPONENTS ---
const PageWrapper: FC<{children: ReactNode}> = ({ children }) => <div className="bg-gray-50 font-sans text-gray-800">{children}</div>;
const Container: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
const Section: FC<{children: ReactNode; id: string; className?: string}> = ({ children, id, className = '' }) => <section id={id} className={`py-16 sm:py-24 ${className}`}>{children}</section>;
const SectionTitle: FC<{children: ReactNode; subtitle?: string}> = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    {subtitle && <p className="text-base font-semibold text-blue-600 tracking-wide uppercase">{subtitle}</p>}
    <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">{children}</h2>
  </div>
);
const Card: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>{children}</div>;

// --- DATA STRUCTURES (Translated & Structured) ---

const JBSquareInfo = {
  title: "JB-Square (Bio Cluster)",
  mapImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2680&auto=format&fit=crop",
  introduction: "Jeonbuk Bio-Valley is a specialized complex for the bio-industry, equipped with R&D, clinical trials, and production facilities.",
  location: "Jeonju-si, Jeollabuk-do",
  mainFacilities: "R&D Center, Clinical Trial Center, Production Support Facility",
  contact: "+82-63-123-4567",
};

const residentCompanies = {
  title: "Resident Company Status",
  mapImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
  industrialComplex: "Jeonju Advanced Industrial Complex",
  location: "Jeonju-si, Deokjin-gu",
  companyCount: 150,
  industries: "Biopharmaceuticals, Medical Devices",
  representativeCompanies: "BioCell, GeneBioTech, MedicalBio",
};

const communityForums = {
  ceoForum: {
    title: "CEO Forum",
    introduction: "A forum for CEOs of resident companies to exchange information and build networks.",
    members: "CEOs of resident companies",
    organizer: "JB Technopark",
    meetingSchedule: "Quarterly, at JB Square Conference Hall",
  },
  innovationSalon: {
    title: "Innovation Drug Salon",
    description: "A casual meeting for researchers and developers to discuss new drug development.",
    participants: "Researchers, Developers, Students",
    topics: ["AI in Drug Discovery", "New Modalities", "Clinical Trial Design"],
  },
};

const supportOrganizations = {
  title: "JB Support Organizations",
  relatedOrgs: [
    { name: "Jeonbuk Technopark", address: "Jeonju-si", phone: "+82-63-219-2000", website: "#" },
    { name: "K-BIO Health", address: "Osong", phone: "+82-43-710-0000", website: "#" },
  ],
  universities: [
    { name: "Jeonbuk National University", type: "National", address: "Jeonju-si", phone: "+82-63-270-2114", website: "#" },
    { name: "Wonkwang University", type: "Private", address: "Iksan-si", phone: "+82-63-850-5114", website: "#" },
  ],
};

const investmentGuide = {
  title: "Investment Guide",
  incentives: {
    taxReductions: [
      { type: "Corporate Tax", details: "100% reduction for 3 years, 50% for next 2 years" },
      { type: "Local Tax", details: "Up to 15 years of reduction" },
      { type: "Customs Duty", details: "Exemption on capital goods" },
    ],
    subsidies: [
      { type: "Location Support", details: "Reduced rent for up to 50 years" },
      { type: "Employment/Training Grants", details: "Grants for hiring and training local talent" },
    ],
  },
  procedures: [
    { step: 1, name: "Investment Consulting", details: "One-stop service via PM system" },
    { step: 2, name: "Investment Notification", details: "Simplified reporting process" },
    { step: 3, name: "Establishment & Registration", details: "Support for corporate registration" },
  ],
};

// --- PAGE-SPECIFIC COMPONENTS ---

const Hero: FC<{title: string; subtitle: string}> = ({ title, subtitle }) => (
  <div className="bg-white">
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">{subtitle}</p>
    </Container>
  </div>
);

const InfoCard: FC<{icon: ReactNode; title: string; children: ReactNode}> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="bg-blue-100 text-blue-600 rounded-md p-3">{icon}</div>
      </div>
      <div className="ml-5 w-0 flex-1">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <div className="mt-2 text-sm text-gray-600 space-y-1">{children}</div>
      </div>
    </div>
  </div>
);

const Table: FC<{headers: string[]; data: (string|ReactNode)[][]}> = ({ headers, data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-50">
          {headers.map(h => <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>)}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- MAIN PORTAL COMPONENT ---

const JBSquarePortal: FC = () => {
  return (
    <PageWrapper>
      <Hero title="JB SQUARE Bio-Cluster Portal" subtitle="Your comprehensive guide to the Jeonbuk bio-ecosystem, investment opportunities, and support networks." />

      <main>
        <Section id="jb-square">
          <Container>
            <SectionTitle subtitle="About JB-Square">The Core of Jeonbuk's Bio-Industry</SectionTitle>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img src={JBSquareInfo.mapImage} alt="Bio Valley Map" className="rounded-lg shadow-lg aspect-video object-cover"/>
              <div className="space-y-6">
                <InfoCard icon={<MapPin />} title="Location & Overview">
                  <p><strong>Location:</strong> {JBSquareInfo.location}</p>
                  <p>{JBSquareInfo.introduction}</p>
                </InfoCard>
                <InfoCard icon={<Building />} title="Main Facilities">
                  <p>{JBSquareInfo.mainFacilities}</p>
                </InfoCard>
                <InfoCard icon={<Phone />} title="Contact Information">
                  <p>{JBSquareInfo.contact}</p>
                </InfoCard>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="investment" className="bg-white">
          <Container>
            <SectionTitle subtitle="Policies & Investments">Investment Guide</SectionTitle>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Incentives</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="font-bold text-lg mb-2">Tax Reductions</h4>
                    <ul>{investmentGuide.incentives.taxReductions.map(item => <li key={item.type}><strong>{item.type}:</strong> {item.details}</li>)}</ul>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-bold text-lg mb-2">Financial Subsidies</h4>
                    <ul>{investmentGuide.incentives.subsidies.map(item => <li key={item.type}><strong>{item.type}:</strong> {item.details}</li>)}</ul>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Procedure</h3>
                <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
                  {investmentGuide.procedures.map(item => (
                    <div key={item.step} className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-xl">
                        {item.step}
                      </div>
                      <h4 className="mt-4 font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="support-orgs">
          <Container>
            <SectionTitle subtitle="Network">Support Organizations & Universities</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Related Organizations</h3>
                <Table
                  headers={["Name", "Location", "Website"]}
                  data={supportOrganizations.relatedOrgs.map(org => [org.name, org.address, <a href={org.website} className="text-blue-600 hover:underline">Visit</a>])}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Universities & Research Institutes</h3>
                <Table
                  headers={["Name", "Type", "Website"]}
                  data={supportOrganizations.universities.map(uni => [uni.name, uni.type, <a href={uni.website} className="text-blue-600 hover:underline">Visit</a>])}
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section id="community" className="bg-white">
          <Container>
            <SectionTitle subtitle="Community">Forums & Salons</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              <InfoCard icon={<Briefcase />} title={communityForums.ceoForum.title}>
                  <p>{communityForums.ceoForum.introduction}</p>
                  <p className="mt-2"><strong>Participants:</strong> {communityForums.ceoForum.members}</p>
              </InfoCard>
              <InfoCard icon={<FileText />} title={communityForums.innovationSalon.title}>
                  <p>{communityForums.innovationSalon.description}</p>
                  <p className="mt-2"><strong>Example Topics:</strong> {communityForums.innovationSalon.topics.join(", ")}</p>
              </InfoCard>
            </div>
          </Container>
        </Section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <Container>
          <div className="text-center">
            <h3 className="text-2xl font-bold">JB SQUARE Portal</h3>
            <p className="mt-2 text-gray-400">Your central hub for Jeonbuk's biotechnology ecosystem.</p>
            <p className="mt-4 text-xs text-gray-500">© 2025 Jeonbuk Technopark. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </PageWrapper>
  );
};

export default JBSquarePortal;
