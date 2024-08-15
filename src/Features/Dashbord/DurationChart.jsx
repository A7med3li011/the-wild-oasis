import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Loader from '../../UI/Loader';




export default function DurationChart({ bookings }) {
    if(!bookings.length) return <Loader/>
   
    
    const checkedin = bookings.filter(item => item.status === "checked-in").length
    const checkedout = bookings.filter(item => item.status === "checked-out").length
    const unconfirmed = bookings.filter(item => item.status === "unconfirmed").length


    const data = [
        { "name": "checkedin", "value": checkedin, color: "#1D4ED8" },
        { "name": "checkedout", "value": checkedout, color: "#86EFAC" },
        { "name": "unconfirmed", "value": unconfirmed, color: "#e7d839" },
    ]
   


    return (
        <div className='bg-white  dark:bg-slate-800     pb-3  mb-5 rounded-md mt-10 shadow-lg'>  
            <h3 className='text-3xl text-center pt-5'>Status</h3>
            <ResponsiveContainer width="100%" height={400}>

                <PieChart >
                    <Pie data={data} dataKey="value" nameKey="name" cx="50% " cy="50%" paddingAngle={2} innerRadius={80} outerRadius={110}  >

                        {data.map(item => (
                            <Cell fill={item.color} stroke={item.color} key={item.value} />
                        ))}
                    </Pie>
                    <Legend className='' verticalAlign='bottom' align='center' width="100%" iconType='circle' iconSize={15} />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
