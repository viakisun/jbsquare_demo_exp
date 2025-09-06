import React, { FC, ReactNode } from 'react';

const Section: FC<{children: ReactNode; id: string; className?: string}> = ({ children, id, className = '' }) => (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
        {children}
    </section>
);

export default Section;
