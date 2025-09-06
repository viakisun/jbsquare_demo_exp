import React, { FC, ReactNode } from 'react';

const PageWrapper: FC<{children: ReactNode}> = ({ children }) => (
    <div className="bg-white font-sans text-gray-700" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
        {children}
    </div>
);

export default PageWrapper;
