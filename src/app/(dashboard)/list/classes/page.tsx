import React from 'react';
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import {classesData, role} from "@/lib/data";

type Class = {
    id: number,
    name: string,
    capacity: number,
    grade: number,
    supervisor: string,
}

const columns = [
    {header: 'Class Name', accessor: 'className'},
    {header: 'Capacity', accessor: 'capacity', className: 'hidden md:table-cell'},
    {header: 'Grade', accessor: 'grade', className: 'hidden md:table-cell'},
    {header: 'Supervisor', accessor: 'supervisor', className: 'hidden md:table-cell'},
    {header: 'Actions', accessor: 'actions'},
]

const ClassesListPage = () => {
    const renderRow = (item: Class) => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
                <td className='flex items-center p-4'>
                    <h3 className='font-semibold'>{item.name}</h3>
                </td>
                <td className='hidden md:table-cell'>{item.capacity}</td>
                <td className='hidden md:table-cell'>{item.grade}</td>
                <td className='hidden md:table-cell'>{item.supervisor}</td>
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
                <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>
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
                <Table columns={columns} renderRow={renderRow} data={classesData}/>
            </div>
            {/*PAGINATION*/}
            <Pagination/>
        </div>
    );
};

export default ClassesListPage;
