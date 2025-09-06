import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  shortDesc: string;
  longDesc: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, shortDesc, longDesc, link }) => {
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
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          <Link to={link}>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Open
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
      <div className="max-w-7xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">JB SQUARE Demo</h1>
          <p className="text-lg text-gray-500">Check out the page concepts.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Australian Concept (Futuristic)"
            shortDesc="A sophisticated, global-standard design sample for an Australian client."
            longDesc="This is a one-page website redesign sample for an Australian client, adhering to global standards. It features a modern, dark-themed design for a biotech innovation hub."
            link="/jb-square-aus"
          />
          <Card
            title="Korean Portal"
            shortDesc="A comprehensive portal for the JB SQUARE bio-cluster, implemented in Korean."
            longDesc="This is a complete, content-rich portal for the JB SQUARE bio-cluster, featuring detailed information on programs, companies, investment, and more, faithfully implemented from the sitemap in Korean."
            link="/jb-square-kr-portal"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
