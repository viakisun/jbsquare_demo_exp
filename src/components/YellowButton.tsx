import React, { FC, ReactNode } from 'react';

const YellowButton: FC<{children: ReactNode; href: string;}> = ({ children, href }) => (
    <a href={href} className="inline-block px-8 py-3 font-bold text-gray-900 bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105">
        {children}
    </a>
);

export default YellowButton;
