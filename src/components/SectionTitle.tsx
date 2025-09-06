import React, { FC, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

const SectionTitle: FC<{children: ReactNode; subtitle?: string}> = ({ children, subtitle }) => {
     const [ref, isInView] = useInView({ threshold: 0.2 });
    return (
        <div ref={ref} className={`text-center mb-16 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {subtitle && <p className="text-sm font-bold text-blue-800 tracking-wider uppercase">{subtitle}</p>}
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">{children}</h2>
        </div>
    );
};

export default SectionTitle;
