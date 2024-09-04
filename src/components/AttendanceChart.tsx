'use client'
import React from 'react';
import Image from "next/image";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 24,
    },
    {
        name: 'Tue',
        present: 30,
        absent: 13,
    },
    {
        name: 'Wed',
        present: 20,
        absent: 98,
    },
    {
        name: 'Thu',
        present: 27,
        absent: 39,
    },
    {
        name: 'Fri',
        present: 18,
        absent: 48,
    },
];
const AttendanceChart = () => {
    return (
        <>
            <div className='bg-white h-full w-full rounded-xl p-4'>
                {/*TITLE*/}
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Attendance</h1>
                    <Image src='/moreDark.png' alt='' width={20} height={20}/>
                </div>
                {/*CHART*/}
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                        <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
                        <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
                        <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}/>
                        <Legend align='left' verticalAlign='top'
                                wrapperStyle={{paddingTop: '20px', paddingBottom: '40px'}}/>
                        <Bar
                            dataKey="present"
                            fill="#FAE27C"
                            legendType='circle'
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar dataKey="absent"
                             fill="#C3EBFA"
                             legendType='circle'
                             radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
                {/*BOTTOM*/}

            </div>
        </>
    );
};

export default AttendanceChart;
