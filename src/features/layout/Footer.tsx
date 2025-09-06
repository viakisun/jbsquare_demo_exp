import React, { FC } from 'react';
import { Container } from '../../components';
import { navigationData } from '../../data/portalData';

const Footer: FC = () => (
    <footer className="bg-gray-800 text-white" role="contentinfo">
        <Container className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {navigationData.map(col => (
                    <div key={col.name}>
                        <h3 className="font-bold text-gray-200">{col.name}</h3>
                        <ul className="mt-4 space-y-2">
                           {col.children?.map(child => <li key={child.name}><a href={child.href} className="text-sm text-gray-400 hover:text-white">{child.name}</a></li>)}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                <p>전북특별자치도 전주시 덕진구 팔과정로 164 (재)전북테크노파크</p>
                <p className="mt-1">© 2025 JB Technopark. All Rights Reserved.</p>
            </div>
        </Container>
    </footer>
);

export default Footer;
