import React from 'react'
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'

export default function SmallBar() {
    const navigate = useNavigate()


    
    return (
        

            <ul className='font-semibold absolute right-0 md:right-auto '>
                <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1  rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineHome /></span> <span className=''> dashboard</span></Link></li>
                <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/bookings"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineCalendarDays /></span> <span className=''>bookings</span></Link></li>
                <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/cabins"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineHomeModern /></span> <span className=''>cabins</span></Link></li>
                <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/setting"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineCog6Tooth /></span> <span className=''> settings </span></Link></li>
            </ul>
       

    )
}
