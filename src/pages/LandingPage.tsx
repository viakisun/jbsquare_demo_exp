import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, shortDesc, longDesc, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{shortDesc}</p>

        {isExpanded && (
          <div className="text-gray-600 text-sm mb-4">
            {longDesc}
          </div>
        )}

        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-600 hover:underline focus:outline-none"
          >
            {isExpanded ? '설명 닫기' : '설명 보기'}
          </button>
          <Link to={link}>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              열기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">JB SQUARE 데모</h1>
          <p className="text-lg text-gray-500">두 가지 컨셉의 페이지를 확인해보세요.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="혁신형 콘셉트"
            shortDesc="동적인 UI와 화려한 애니메이션을 사용한 미래지향적 디자인의 컨셉입니다."
            longDesc="Vibrant, animated, and futuristic design concept focusing on a 'wow' factor. Uses modern UI elements and smooth transitions to create a dynamic user experience."
            link="/jb-square-root-redesign"
          />
          <Card
            title="에디토리얼 콘셉트"
            shortDesc="정보 전달에 중점을 둔 안정적이고 기능적인 디자인의 컨셉입니다."
            longDesc="A more traditional, content-rich, and functional design. This concept is structured like a corporate or informational platform, prioritizing clarity and data presentation."
            link="/jb-square-f2-desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
