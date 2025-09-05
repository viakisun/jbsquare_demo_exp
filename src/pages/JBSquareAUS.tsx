import React, { useState, useEffect } from 'react';
import { Atom, Dna, Microscope, Rocket, FlaskConical, Brain, Network, Zap, TrendingUp, Users, MapPin, Phone, Mail, ExternalLink, ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight, Star, Award, Target, Globe } from 'lucide-react';

const JBSquareAUS = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slides = [
    {
      title: "Revolutionizing Drug Discovery",
      subtitle: "AI-Powered Drug Discovery Platform",
      visual: "💊",
      bg: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      title: "Innovating Biomanufacturing",
      subtitle: "Smart Biomanufacturing Solutions",
      visual: "🧬",
      bg: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      title: "The Era of Precision Medicine",
      subtitle: "Personalized Medicine Technologies",
      visual: "🔬",
      bg: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  const opportunities = [
    {
      id: "urgent-001",
      category: "Urgent",
      title: "Global Biotech Expansion Project",
      amount: "$15M AUD",
      deadline: "Nov 25",
      companies: 12,
      color: "bg-gradient-to-r from-red-500 to-orange-500",
      pulse: true
    },
    {
      id: "featured-001",
      category: "Featured",
      title: "Bio-Unicorn Accelerator Fund",
      amount: "$5M AUD",
      deadline: "Dec 10",
      companies: 8,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      pulse: false
    },
    {
      id: "new-001",
      category: "New",
      title: "Next-Gen Biomaterial Development",
      amount: "$3M AUD",
      deadline: "Dec 20",
      companies: 15,
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      pulse: false
    }
  ];

  const ecosystem = [
    {
      zone: "Discovery Zone",
      description: "Basic Research → Applied Research",
      companies: 45,
      icon: FlaskConical,
      color: "from-cyan-400 to-blue-500",
      innovations: ["AI Drug Discovery", "Biomarker Identification", "Protein Design"]
    },
    {
      zone: "Development Zone",
      description: "Tech Development → Commercialization",
      companies: 38,
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      innovations: ["Clinical Trials", "Productization", "Regulatory Approval"]
    },
    {
      zone: "Scale-up Zone",
      description: "Mass Production → Global Expansion",
      companies: 29,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      innovations: ["Mass Production", "Overseas Expansion", "IPO Preparation"]
    }
  ];

  const liveData = {
    activeProjects: 127,
    fundingToday: "$2.37M",
    newStartups: 8,
    globalDeals: 3
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Liquid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x / 10}px`,
            top: `${mousePosition.y / 10}px`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            left: `${-mousePosition.x / 15 + 800}px`,
            top: `${-mousePosition.y / 15 + 400}px`,
          }}
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
              <Dna className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">JB²</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#live" className="hover:text-cyan-400 transition-colors">Live</a>
            <a href="#opportunities" className="hover:text-cyan-400 transition-colors">Opportunities</a>
            <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Ecosystem</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Connect</a>
          </div>

          <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full text-sm font-semibold">
            Join Us
          </button>
        </div>
      </nav>

      {/* Revolutionary Hero */}
      <section className="min-h-screen relative flex items-center">
        {/* DNA Helix Animation */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
          <div className="w-2 h-96 relative">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                style={{
                  top: `${i * 20}px`,
                  left: `${Math.sin(i * 0.5) * 30}px`,
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 2s infinite'
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left Side - Text */}
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-8">
                <Atom className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span className="text-sm text-cyan-400">Bio Innovation Hub</span>
              </div>

              <h1 className="text-8xl font-black leading-none mb-8">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Building the
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future of
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Life Science
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                JB SQUARE is more than just a bio-cluster. It's a living<br />
                ecosystem creating a <span className="text-cyan-400">new paradigm in life science innovation.</span>
              </p>

              <div className="flex items-center space-x-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <span>Explore Ecosystem</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </button>

                <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/5 transition-colors">
                  View Live Feed
                </button>
              </div>
            </div>

            {/* Right Side - Interactive Slide */}
            <div className="relative">
              <div className={`relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br ${slides[activeSlide].bg} p-8 transition-all duration-500`}>
                <div className="absolute top-6 right-6 flex space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>

                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="text-8xl mb-6">{slides[activeSlide].visual}</div>
                  <h3 className="text-3xl font-bold mb-2">{slides[activeSlide].title}</h3>
                  <p className="text-white/80">{slides[activeSlide].subtitle}</p>
                </div>

                {/* Slide Navigation */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeSlide ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard */}
      <section id="live" className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-green-400 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">LIVE DASHBOARD</span>
            </div>
            <h2 className="text-5xl font-black mb-4">Happening Now</h2>
            <p className="text-gray-400">Real-time innovation happening at JB SQUARE</p>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-3xl border border-blue-500/30">
              <div className="text-4xl font-black text-blue-400 mb-2">{liveData.activeProjects}</div>
              <div className="text-gray-300 text-sm">Active Projects</div>
              <div className="text-xs text-gray-500 mt-1">+12 today</div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-3xl border border-green-500/30">
              <div className="text-4xl font-black text-green-400 mb-2">{liveData.fundingToday}</div>
              <div className="text-gray-300 text-sm">Funding Today</div>
              <div className="text-xs text-gray-500 mt-1">+$520k vs yesterday</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl font-black text-purple-400 mb-2">{liveData.newStartups}</div>
              <div className="text-gray-300 text-sm">New Startups</div>
              <div className="text-xs text-gray-500 mt-1">this month</div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-8 rounded-3xl border border-orange-500/30">
              <div className="text-4xl font-black text-orange-400 mb-2">{liveData.globalDeals}</div>
              <div className="text-gray-300 text-sm">Global Deals</div>
              <div className="text-xs text-gray-500 mt-1">this week</div>
            </div>
          </div>

          {/* Innovation Feed */}
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">🔥 Innovation Feed</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Microscope className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">BioLabs Inc. Obtains TGA Approval</div>
                  <div className="text-sm text-gray-400">New drug BL-2024 enters Phase 3 trials • 3 mins ago</div>
                </div>
                <div className="text-green-400 font-bold">+127% 🚀</div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">GenoTech secures $5M in Series B funding</div>
                  <div className="text-sm text-gray-400">Global VC consortium participation • 1 hour ago</div>
                </div>
                <div className="text-blue-400 font-bold">Series B</div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">AI Diagnostic Platform 'MedAI' Launches Globally</div>
                  <div className="text-sm text-gray-400">Simultaneous service launch in 15 countries • 2 hours ago</div>
                </div>
                <div className="text-purple-400 font-bold">Global</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Opportunities */}
      <section id="opportunities" className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl font-black mb-4">Hot Opportunities</h2>
              <p className="text-gray-400">Programs and funding opportunities available now</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold">
              View All
            </button>
          </div>

          <div className="space-y-6">
            {opportunities.map((opp, index) => (
              <div
                key={opp.id}
                className={`relative overflow-hidden rounded-3xl border border-white/10 hover:scale-105 transition-all duration-300 ${
                  opp.pulse ? 'animate-pulse' : ''
                }`}
              >
                <div className={`${opp.color} p-1`}>
                  <div className="bg-black/80 backdrop-blur-xl p-8 rounded-3xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className={`text-xs font-bold px-3 py-1 rounded-full ${
                            opp.category === 'Urgent' ? 'bg-red-500/20 text-red-400' :
                            opp.category === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {opp.category}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold mb-2">{opp.title}</h3>
                          <div className="flex items-center space-x-6 text-gray-400">
                            <span>💰 {opp.amount}</span>
                            <span>📅 {opp.deadline} Deadline</span>
                            <span>🏢 {opp.companies} Companies Participating</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <button className="px-6 py-3 bg-white/10 rounded-2xl font-semibold hover:bg-white/20 transition-colors">
                          Details
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Ecosystem */}
      <section id="ecosystem" className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Innovation Ecosystem</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From idea to global success, we grow together in a connected ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {ecosystem.map((zone, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity`} />

                <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${zone.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <zone.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{zone.zone}</h3>
                  <p className="text-gray-400 mb-6">{zone.description}</p>

                  <div className="mb-6">
                    <div className="text-3xl font-black text-white mb-1">{zone.companies}</div>
                    <div className="text-sm text-gray-400">Companies</div>
                  </div>

                  <div className="space-y-2">
                    {zone.innovations.map((innovation, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${zone.color} rounded-full`} />
                        <span className="text-gray-300">{innovation}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 px-4 py-3 bg-white/5 rounded-2xl font-semibold hover:bg-white/10 transition-colors border border-white/10">
                    Explore Zone
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="contact" className="py-20 px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Let's Build the Future Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            JB SQUARE is where innovative ideas and passionate people meet.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-3xl border border-cyan-500/30">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Visit Us</h4>
              <p className="text-gray-400 text-sm">123 Innovation Drive, Sydney, NSW 2000</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-3xl border border-green-500/30">
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Call Us</h4>
              <p className="text-gray-400 text-sm">+61 2 9876 5432</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl border border-purple-500/30">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Email Us</h4>
              <p className="text-gray-400 text-sm">hello@jbsquare.com.au</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-lg">
              Get Started Now
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold text-lg">
              Request a Tour
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Dna className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold">JB SQUARE</div>
                <div className="text-xs text-gray-400">Building the Future of Life Science</div>
              </div>
            </div>

            <div className="text-gray-400 text-sm">
              © 2024 JB SQUARE. Innovation never stops.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JBSquareAUS;
