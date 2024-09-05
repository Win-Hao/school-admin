import React from 'react';

interface TableProps {
    columns: { header: string, accessor: string, className?: string }[],
    renderRow: (item: any) => React.ReactNode,
    data: any
}

const Table = ({columns, renderRow, data}: TableProps) => {
    return (
        <table className='w-full mt-4'>
            <thead>
            <tr className='text-left text-gray-500 text-sm'>
                {columns.map((column) => (
                    <th key={column.header} className={column.className}>{column.header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item) => renderRow(item))}
            </tbody>
        </table>
    );
};

export default Table;
