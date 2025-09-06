import React, { FC, ReactNode } from 'react';

const Table: FC<{headers: string[]; data: (string|ReactNode)[][]}> = ({ headers, data }) => (
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

export default Table;
