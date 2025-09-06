import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">JB SQUARE</h1>
        <p className="text-lg text-gray-500 mb-12">디자인 컨셉 데모</p>
      </div>

      <div className="w-full max-w-md">
        <Link to="/jb-korean-portal">
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">전북 바이오 포털</h2>
                <p className="text-gray-600 mt-1">최종본 바로가기</p>
              </div>
              <ArrowRight className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors"/>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
