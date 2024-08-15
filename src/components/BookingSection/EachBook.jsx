import React from 'react'

import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function EachBook({ book }) {
   const navigate = useNavigate()
    function getDayAndMonth(dateStr) {
        // Parse the input date string into a Date object
        const dateObj = new Date(dateStr);

        // Extract the day and month
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Months are zero-indexed
        const year = dateObj.getFullYear()
        return { day, month, year };
    }

    // startDate
    const date = book.startDate;
    const { day: DS, month: MS, year: YS } = getDayAndMonth(date);

    // endDate
    const dat2 = book.endDate;
    const { day: DE, month: ME, year: YE } = getDayAndMonth(dat2);

    let duration;
    if (Math.abs(MS - ME) !== 0) {

        duration = Math.abs((DS - DE) - (Math.abs(MS - ME) * 30))
    } else {

        duration = Math.abs((DS - DE))
    }






    return (
        <div  className='flex  items-center w-max lg:w-auto  justify-around  border-b-2 border-gray-100 dark:bg-slate-800 dark:border-slate-700  py-4 bg-white   text-xs md:text-base  transition-all duration-200 cursor-pointer dark:hover:bg-black/10 hover:bg-gray-200' onClick={()=>navigate(`/bookings/${book.id}`)}>
            <p className=' min-w-20 mx-3 font-semibold'>{book.cabins.name} </p>
            <div className=' min-w-36 mx-3'>
                <p className='font-semibold'>
                    {book.guests.fullName}
                </p>
                <p className='text-gray-500 text-sm'>
                    {book.guests.emailAddress}
                </p>
            </div>
            <div className=' min-w-52 mx-3 '>
                <p className='font-semibold'>{duration} Nights</p>
                <div className='flex items-center gap-x-2 text-gray-400 text-sm'>
                    <p>{YS}-{Number(MS) > 9 ? MS : `0${MS}`}-{Number(DS) > 9 ? DS : `0${DS}`}</p>
                    <p><FiArrowRight /></p>
                    <p>{YE}-{Number(ME) > 9 ? ME : `0${ME}`}-{Number(DE) > 9 ? DE : `0${DE}`}</p>
                </div>
            </div>
            <p className={`font-semibold ${book.status === "unconfirmed" && "bg-blue-200 text-blue-900" } ${book.status === "checked-in" && "bg-green-300 text-white" }  ${book.status === "checked-out" && "bg-blue-600 text-white" } text-sm  text-center  py-1 rounded-xl min-w-24 mx-3`}>{book.status} </p>
            <p className='min-w-20 mx-1  font-semibold'>{book.totalPrice}.00$ </p>
        </div>
    )
}


