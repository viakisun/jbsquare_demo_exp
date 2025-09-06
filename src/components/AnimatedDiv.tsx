import React, { FC, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

const AnimatedDiv: FC<{children: ReactNode, delay?: number, className?: string}> = ({ children, delay = 0, className = '' }) => {
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

export default AnimatedDiv;
