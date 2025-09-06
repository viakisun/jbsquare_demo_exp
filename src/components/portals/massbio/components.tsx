import React, { FC, ReactNode } from 'react';
import { useInView } from './hooks';

export const PageWrapper: FC<{children: ReactNode}> = ({ children }) => <div className="bg-white font-sans text-gray-700" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>{children}</div>;
export const Container: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
export const Section: FC<{children: ReactNode; id: string; className?: string}> = ({ children, id, className = '' }) => <section id={id} className={`py-20 sm:py-28 ${className}`}>{children}</section>;

export const SectionTitle: FC<{children: ReactNode; subtitle?: string}> = ({ children, subtitle }) => {
     const [ref, isInView] = useInView({ threshold: 0.2 });
    return (
        <div ref={ref} className={`text-center mb-16 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {subtitle && <p className="text-sm font-bold text-blue-800 tracking-wider uppercase">{subtitle}</p>}
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">{children}</h2>
        </div>
    );
};

export const YellowButton: FC<{children: ReactNode; href: string;}> = ({ children, href }) => (
    <a href={href} className="inline-block px-8 py-3 font-bold text-gray-900 bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105">
        {children}
    </a>
);

export const Table: FC<{headers: string[]; data: (string|ReactNode)[][]}> = ({ headers, data }) => (
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

export const AnimatedDiv: FC<{children: ReactNode, delay?: number, className?: string}> = ({ children, delay = 0, className = '' }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
