import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { ChevronRight, Search, MapPin, Phone, Mail, ArrowRight, Award, Building, FlaskConical, Briefcase, FileText } from 'lucide-react';

// --- DATA (Translated and adapted from original file) ---

const PROGRAMS = [
  { id: '1', title: 'Bio Startup Incubation Program', host: 'Jeonbuk Technopark', budget: '$5M', category: 'Startup Support', daysLeft: 44, description: 'A comprehensive support program for the growth of early-stage bio startups.' },
  { id: '2', title: 'Bio-technology Commercialization Support', host: 'Jeonbuk BIO-Convergence Industry Promotion Agency', budget: '$3M', category: 'Commercialization', daysLeft: 90, description: 'Provides professional support for the commercialization of research results.' },
  { id: '3', title: 'K-Bio Lab Hub Construction Project', host: 'Ministry of Science and ICT', budget: '$10M', category: 'Infrastructure', daysLeft: 110, description: 'Building a global-level bio research infrastructure.' },
];

const NEWS = [
  { id: '1', title: 'Jeonbuk Bio Cluster: A New Turning Point for a Leap into a Global Bio Hub', date: '28 August 2025', category: 'Policy', excerpt: 'Jeonbuk Bio Cluster has announced a comprehensive development plan to become a global bio hub...' },
  { id: '2', title: 'Bio Startup Investment Pitching Session', date: '15 September 2025', category: 'Event', excerpt: 'A special opportunity for Jeonbuk bio startups to meet domestic and foreign investors...' },
  { id: '3', title: 'Jeonbuk Bio-Companies Surpass $100 Million in Exports', date: '25 August 2025', category: 'Achievement', excerpt: 'The export performance of Jeonbuk bio-companies has exceeded $100 million for the first time...' },
];

const COMPANIES = [
  { id: '1', name: 'BioCell', sector: 'Biopharmaceuticals', logo: 'BC', description: 'Specializing in the development of innovative cell therapies.' },
  { id: '2', name: 'GeneBioTech', sector: 'Diagnostic Reagents', logo: 'GT', description: 'Developing next-gen diagnostic reagents based on precision technology.' },
  { id: '3', name: 'MedicalBio', sector: 'Medical Devices', logo: 'MB', description: 'A leading provider of AI-based smart medical device solutions.' },
];

// --- STYLED COMPONENTS (Implementing the new design system) ---

const PageWrapper: FC<{children: ReactNode}> = ({ children }) => (
  <div className="bg-[#F8F9FA] font-sans text-[#212529]">
    {children}
  </div>
);

const Container: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-8 ${className}`}>
    {children}
  </div>
);

const Section: FC<{children: ReactNode; id: string; className?: string}> = ({ children, id, className = '' }) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    {children}
  </section>
);

const SectionTitle: FC<{children: ReactNode; subtitle: string}> = ({ children, subtitle }) => (
  <div className="text-center mb-16">
    <p className="text-sm font-semibold text-[#007BFF] uppercase tracking-widest mb-2">{subtitle}</p>
    <h2 className="text-4xl md:text-5xl font-serif font-bold">{children}</h2>
  </div>
);

const StyledButton: FC<{children: ReactNode; href?: string; variant?: 'primary' | 'secondary'; className?: string}> = ({ children, href, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-transform duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-[#007BFF] text-white",
    secondary: "bg-transparent border-2 border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white",
  };

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- UI COMPONENTS ---

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <Container className="flex justify-between items-center h-24">
        <div className="font-bold text-2xl">JB² Australia</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#programs" className="hover:text-[#007BFF]">Programs</a>
          <a href="#news" className="hover:text-[#007BFF]">News</a>
          <a href="#companies" className="hover:text-[#007BFF]">Companies</a>
          <a href="#contact" className="hover:text-[#007BFF]">Contact</a>
        </nav>
        <StyledButton href="#contact" variant="primary" className="hidden md:inline-flex !px-6 !py-3">
          Get In Touch
        </StyledButton>
      </Container>
    </header>
  );
};

const HeroSection: FC = () => (
  <section className="h-screen bg-gradient-to-b from-white to-[#F8F9FA] flex items-center">
    <Container className="grid md:grid-cols-2 gap-16 items-center pt-24">
      <div>
        <p className="text-lg font-semibold text-[#007BFF] mb-4">JB SQUARE AUSTRALIA</p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
          The Future of Australian Biotechnology Starts Here.
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          An integrated ecosystem for research, development, and commercialization, fostering the next generation of biotech innovation.
        </p>
        <div className="flex space-x-4">
          <StyledButton href="#programs" variant="primary">Explore Programs</StyledButton>
          <StyledButton href="#companies" variant="secondary">Our Network</StyledButton>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="p-8 bg-white/50 rounded-3xl shadow-2xl backdrop-blur-lg">
          <div className="aspect-w-1 aspect-h-1">
            <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2574&auto=format&fit=crop" alt="Scientist in a lab" className="rounded-2xl object-cover"/>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const ProgramCard: FC<typeof PROGRAMS[0]> = ({ title, host, budget, category, daysLeft }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="flex-grow">
      <p className="text-xs font-semibold text-[#E6A86D] uppercase mb-2">{category}</p>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm text-gray-500 mb-6">Hosted by: {host}</p>
    </div>
    <div className="flex justify-between items-end pt-4 border-t border-gray-100">
      <div>
        <p className="text-2xl font-bold text-[#007BFF]">{budget}</p>
        <p className="text-xs text-gray-500">Budget</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold">{daysLeft}</p>
        <p className="text-xs text-gray-500">Days Left</p>
      </div>
    </div>
  </div>
);

const NewsCard: FC<typeof NEWS[0]> = ({ title, date, category, excerpt }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
    <p className="text-xs font-semibold text-gray-500 mb-2">{category} • {date}</p>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-sm text-gray-600 mb-6">{excerpt}</p>
    <a href="#" className="font-semibold text-[#007BFF] flex items-center space-x-2 group-hover:underline">
      <span>Read More</span>
      <ArrowRight size={16} />
    </a>
  </div>
);

const CompanyCard: FC<typeof COMPANIES[0]> = ({ name, sector, logo, description }) => (
  <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-16 h-16 bg-[#007BFF]/10 text-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
      {logo}
    </div>
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-sm font-semibold text-[#E6A86D] mb-4">{sector}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const JBSquareAUEditorial: FC = () => {
  return (
    <PageWrapper>
      <Header />
      <main>
        <HeroSection />

        <Section id="programs">
          <Container>
            <SectionTitle subtitle="Funding & Support">Our Programs</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {PROGRAMS.map(p => <ProgramCard key={p.id} {...p} />)}
            </div>
          </Container>
        </Section>

        <Section id="stats" className="bg-white">
          <Container className="grid md:grid-cols-4 gap-8 text-center">
            <div><p className="text-5xl font-bold text-[#007BFF]">6</p><p>Incubation Centers</p></div>
            <div><p className="text-5xl font-bold text-[#007BFF]">150+</p><p>Resident Companies</p></div>
            <div><p className="text-5xl font-bold text-[#007BFF]">$250M+</p><p>Annual Cluster Revenue</p></div>
            <div><p className="text-5xl font-bold text-[#007BFF]">124</p><p>Registered Patents</p></div>
          </Container>
        </Section>

        <Section id="news">
          <Container>
            <SectionTitle subtitle="Latest Updates">News & Events</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {NEWS.map(n => <NewsCard key={n.id} {...n} />)}
            </div>
          </Container>
        </Section>

        <Section id="companies" className="bg-white">
          <Container>
            <SectionTitle subtitle="Our Network">Featured Companies</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {COMPANIES.map(c => <CompanyCard key={c.id} {...c} />)}
            </div>
          </Container>
        </Section>

        <Section id="contact" className="bg-[#212529] text-white">
          <Container className="text-center">
            <h2 className="text-4xl font-bold font-serif mb-6">Ready to Innovate?</h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether you're a startup, researcher, or investor, JB SQUARE is your gateway to the future of biotechnology in Australia.
            </p>
            <StyledButton href="#" variant="primary">Contact Us</StyledButton>
          </Container>
        </Section>
      </main>

      <footer className="bg-[#F8F9FA] py-12">
        <Container className="text-center text-gray-500 text-sm">
          <p>© 2025 JB SQUARE Australia. All rights reserved.</p>
          <p className="mt-2">123 Innovation Drive, Sydney, NSW 2000 | +61 2 9876 5432 | hello@jbsquare.com.au</p>
        </Container>
      </footer>
    </PageWrapper>
  );
};

export default JBSquareAUEditorial;
