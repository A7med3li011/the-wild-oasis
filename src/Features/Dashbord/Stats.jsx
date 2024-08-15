import React from 'react'
import { GrMoney } from 'react-icons/gr'
import { ImStatsDots } from 'react-icons/im'
import { IoBagHandle } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'
import Loader from '../../UI/Loader'

export default function Stats({ bookings }) {

    if(!bookings.length) return <Loader/>
    const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0)
    const checkedin = bookings?.filter(book => book.status === "checked-in")
    const occup = checkedin.reduce((acc, cur) => acc + cur.numberOfNight, 0) / bookings.reduce((acc, cur) => acc + cur.numberOfNight, 0)

    return (
        <div className='flex justify-around gap-y-3 mt-5 flex-wrap   '>

            <div className="bg-white shadow-lg dark:bg-slate-800  rounded-lg w-52 py-6 px-3 flex gap-x-3  ">
                <div className='bg-sky-700 text-3xl rounded-full py-3 px-3 text-white'><IoBagHandle /></div>
                <div>
                    <p className="text-sm font-semibold">
                        BOOKINGS
                    </p>
                    <p className="font-semibold text-lg">
                        {bookings?.length}
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-lg dark:bg-slate-800  rounded-lg w-52 py-6 px-3 flex gap-x-3 ">
                <div className='bg-green-600 text-3xl rounded-full py-3 px-3  text-white'><GrMoney /> </div>
                <div>
                    <p className="text-sm font-semibold">
                        SALES
                    </p>
                    <p className="font-semibold text-lg">
                        ${sales},00
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-lg dark:bg-slate-800  rounded-lg w-52 py-6 px-3 flex gap-x-3 ">
                <div className='bg-blue-700 text-3xl rounded-full py-3 px-3  text-white'><SlCalender /> </div>
                <div>
                    <p className="text-sm font-semibold">
                        CHECKINS
                    </p>
                    <p className="font-semibold text-lg">
                        {checkedin?.length}
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-lg dark:bg-slate-800  rounded-lg w-52 py-6 px-3 flex gap-x-3 ">
                <div className='bg-yellow-700 text-3xl rounded-full py-3 px-3  text-white'><ImStatsDots /></div>
                <div>
                    <p className="text-sm font-semibold">
                        OCCUPANCY RATE
                    </p>
                    <p className="font-semibold text-lg">
                        {Math.round(occup * 100)}%
                    </p>
                </div>
            </div>

        </div>
    )
}
