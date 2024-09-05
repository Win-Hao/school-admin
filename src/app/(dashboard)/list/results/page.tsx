import React from 'react';
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import {resultsData, role} from "@/lib/data";

type Result = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    student: string,
    date: string,
    type: string,
    score: number,
}

const columns = [
    {header: 'Subject', accessor: 'subject'},
    {header: 'Student', accessor: 'student', className: 'hidden md:table-cell'},
    {header: 'Score', accessor: 'score', className: 'hidden md:table-cell'},
    {header: 'Teacher', accessor: 'teacher', className: 'hidden md:table-cell'},
    {header: 'Class', accessor: 'class', className: 'hidden lg:table-cell'},
    {header: 'Date', accessor: 'date', className: 'hidden lg:table-cell'},
    {header: 'Actions', accessor: 'actions'},
]

const ResultsListPage = () => {
    const renderRow = (item: Result) => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
                <td className='flex items-center p-4'>
                    <h3 className='font-semibold'>{item.subject}</h3>
                </td>
                <td className='hidden md:table-cell'>{item.student}</td>
                <td className='hidden md:table-cell'>{item.score}</td>
                <td className='hidden md:table-cell'>{item.teacher}</td>
                <td className='hidden lg:table-cell'>{item.class}</td>
                <td className='hidden lg:table-cell'>{item.date}</td>
                <td>
                    <div className='flex items-center gap-2'>
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                                <Image src='/edit.png' alt='' width={16} height={16}/>
                            </button>
                        </Link>
                        {role === 'admin' &&
                            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
                                <Image src='/delete.png' alt='' width={16} height={16}/>
                            </button>}
                    </div>
                </td>
            </tr>
        )
    }
    return (
        <div className='bg-white p-4 rounded-md flex-1 mt-0 m-4'>
            {/*TOP*/}
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Results</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch/>
                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex justify-center items-center bg-lamaYellow rounded-full'>
                            <Image src='/filter.png' alt='' width={14} height={14}/>
                        </button>
                        <button className='w-8 h-8 flex justify-center items-center bg-lamaYellow rounded-full'>
                            <Image src='/sort.png' alt='' width={14} height={14}/>
                        </button>
                        {role === 'admin' &&
                            <button className='w-8 h-8 flex justify-center items-center bg-lamaYellow rounded-full'>
                                <Image src='/plus.png' alt='' width={14} height={14}/>
                            </button>}
                    </div>
                </div>
            </div>
            {/*LIST*/}
            <div>
                <Table columns={columns} renderRow={renderRow} data={resultsData}/>
            </div>
            {/*PAGINATION*/}
            <Pagination/>
        </div>
    );
};

export default ResultsListPage;
