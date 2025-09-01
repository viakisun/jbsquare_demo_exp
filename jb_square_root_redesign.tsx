import React, { useState, useEffect } from 'react';
import { Atom, Dna, Microscope, Rocket, FlaskConical, Brain, Network, Zap, TrendingUp, Users, MapPin, Phone, Mail, ExternalLink, ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight, Star, Award, Target, Globe } from 'lucide-react';

const JBSquareHomepage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slides = [
    {
      title: "신약 개발 혁명",
      subtitle: "AI 기반 Drug Discovery Platform",
      visual: "💊",
      bg: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      title: "바이오 제조 혁신", 
      subtitle: "Smart Biomanufacturing Solutions",
      visual: "🧬",
      bg: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      title: "정밀 의료 시대",
      subtitle: "Personalized Medicine Technologies", 
      visual: "🔬",
      bg: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  const opportunities = [
    {
      id: "urgent-001",
      category: "긴급",
      title: "K-바이오 글로벌 진출 프로젝트",
      amount: "150억원",
      deadline: "11.25",
      companies: 12,
      color: "bg-gradient-to-r from-red-500 to-orange-500",
      pulse: true
    },
    {
      id: "featured-001", 
      category: "특집",
      title: "바이오 유니콘 육성 펀드",
      amount: "50억원",
      deadline: "12.10",
      companies: 8,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      pulse: false
    },
    {
      id: "new-001",
      category: "신규",
      title: "차세대 바이오 소재 개발",
      amount: "30억원", 
      deadline: "12.20",
      companies: 15,
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      pulse: false
    }
  ];

  const ecosystem = [
    {
      zone: "Discovery Zone",
      description: "기초연구 → 응용연구",
      companies: 45,
      icon: FlaskConical,
      color: "from-cyan-400 to-blue-500",
      innovations: ["AI 신약개발", "바이오마커 발굴", "단백질 설계"]
    },
    {
      zone: "Development Zone", 
      description: "기술개발 → 상용화",
      companies: 38,
      icon: Rocket,
      color: "from-purple-500 to-pink-500", 
      innovations: ["임상시험", "제품화", "규제승인"]
    },
    {
      zone: "Scale-up Zone",
      description: "양산화 → 글로벌진출",
      companies: 29,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      innovations: ["대량생산", "해외진출", "IPO 준비"]
    }
  ];

  const liveData = {
    activeProjects: 127,
    fundingToday: "23.7억",
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
            <a href="#live" className="hover:text-cyan-400 transition-colors">라이브</a>
            <a href="#opportunities" className="hover:text-cyan-400 transition-colors">기회</a>
            <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">생태계</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">연결</a>
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
                  생명과학의
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  미래를
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  만든다
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                JB SQUARE는 단순한 바이오 클러스터가 아닙니다.<br />
                <span className="text-cyan-400">생명과학 혁신의 새로운 패러다임</span>을 만들어가는 
                살아있는 생태계입니다.
              </p>

              <div className="flex items-center space-x-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <span>생태계 탐험</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </button>
                
                <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/5 transition-colors">
                  라이브 보기
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
            <h2 className="text-5xl font-black mb-4">지금 이 순간</h2>
            <p className="text-gray-400">JB SQUARE에서 일어나고 있는 실시간 혁신</p>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-3xl border border-blue-500/30">
              <div className="text-4xl font-black text-blue-400 mb-2">{liveData.activeProjects}</div>
              <div className="text-gray-300 text-sm">진행중인 프로젝트</div>
              <div className="text-xs text-gray-500 mt-1">+12 today</div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-3xl border border-green-500/30">
              <div className="text-4xl font-black text-green-400 mb-2">{liveData.fundingToday}</div>
              <div className="text-gray-300 text-sm">오늘 투입 자금</div>
              <div className="text-xs text-gray-500 mt-1">+5.2억 vs yesterday</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl font-black text-purple-400 mb-2">{liveData.newStartups}</div>
              <div className="text-gray-300 text-sm">신규 스타트업</div>
              <div className="text-xs text-gray-500 mt-1">this month</div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-8 rounded-3xl border border-orange-500/30">
              <div className="text-4xl font-black text-orange-400 mb-2">{liveData.globalDeals}</div>
              <div className="text-gray-300 text-sm">글로벌 딜 성사</div>
              <div className="text-xs text-gray-500 mt-1">this week</div>
            </div>
          </div>

          {/* Innovation Feed */}
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">🔥 혁신 피드</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Microscope className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">바이오랩스가 FDA 승인 획득</div>
                  <div className="text-sm text-gray-400">신약 BL-2024가 임상 3상 진입 • 3분 전</div>
                </div>
                <div className="text-green-400 font-bold">+127% 🚀</div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">제노테크 시리즈B 50억 투자 유치</div>
                  <div className="text-sm text-gray-400">글로벌 VC 컨소시엄 참여 • 1시간 전</div>
                </div>
                <div className="text-blue-400 font-bold">Series B</div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">AI 진단 플랫폼 'MedAI' 글로벌 론칭</div>
                  <div className="text-sm text-gray-400">15개국 동시 서비스 오픈 • 2시간 전</div>
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
              <h2 className="text-5xl font-black mb-4">뜨거운 기회들</h2>
              <p className="text-gray-400">지금 참여할 수 있는 프로그램과 펀딩 기회</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold">
              전체 보기
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
                            opp.category === '긴급' ? 'bg-red-500/20 text-red-400' :
                            opp.category === '특집' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {opp.category}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{opp.title}</h3>
                          <div className="flex items-center space-x-6 text-gray-400">
                            <span>💰 {opp.amount}</span>
                            <span>📅 {opp.deadline} 마감</span>
                            <span>🏢 {opp.companies}개 기업 참여</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <button className="px-6 py-3 bg-white/10 rounded-2xl font-semibold hover:bg-white/20 transition-colors">
                          상세보기
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold">
                          지원하기
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
            <h2 className="text-5xl font-black mb-6">혁신 생태계</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              아이디어부터 글로벌 성공까지, 연결된 생태계에서 함께 성장합니다
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
                    <div className="text-sm text-gray-400">기업</div>
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
                    Zone 탐험
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
          <h2 className="text-5xl font-black mb-6">함께 미래를 만들어요</h2>
          <p className="text-xl text-gray-400 mb-12">
            JB SQUARE는 혁신적인 아이디어와 열정적인 사람들이 만나는 곳입니다
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-3xl border border-cyan-500/30">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Visit Us</h4>
              <p className="text-gray-400 text-sm">전북 전주시 JB SQUARE</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-3xl border border-green-500/30">
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Call Us</h4>
              <p className="text-gray-400 text-sm">063-219-1234</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl border border-purple-500/30">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Email Us</h4>
              <p className="text-gray-400 text-sm">hello@jbsquare.kr</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-lg">
              지금 시작하기
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold text-lg">
              투어 신청
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
                <div className="text-xs text-gray-400">생명과학의 미래를 만든다</div>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 JB SQUARE. 혁신은 계속됩니다.
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default JBSquareHomepage;