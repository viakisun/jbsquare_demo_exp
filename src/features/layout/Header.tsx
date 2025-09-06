import React, { FC } from 'react';
import { Container } from '../../components';
import { navigationData } from '../../data/portalData';

const Header: FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <Container className="flex justify-between items-center h-20">
                <a href="#" className="font-extrabold text-2xl text-gray-900">JB SQUARE</a>
                <nav className="hidden lg:flex items-center space-x-8">
                    {navigationData.map(item => <a key={item.name} href={item.href} className="text-base font-medium text-gray-600 hover:text-blue-800">{item.name}</a>)}
                </nav>
                <a href="#" className="hidden lg:inline-block px-5 py-2 text-sm font-bold text-gray-900 bg-yellow-400 rounded-md hover:bg-yellow-500">포털 문의</a>
            </Container>
        </header>
    );
};

export default Header;
