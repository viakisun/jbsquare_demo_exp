import React, { FC, ReactNode } from 'react';

const Container: FC<{children: ReactNode; className?: string}> = ({ children, className = '' }) => (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
);

export default Container;
