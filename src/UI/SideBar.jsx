import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern} from "react-icons/hi2";


export default function SideBar() {
  
  
  
  return (
    <div className='bg-white dark:bg-slate-800 dark:border-none dark:text-white border-r-2 border-gray-200 hidden  md:flex flex-col px-5 sm:px-9 '>
      <div className="logo">
        <img className='w-20 sm:w-36   mx-auto my-5' src={"/logo-light.png"} alt="" />
      </div>

      <ul className='font-semibold  '>
        <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1  rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineHome /></span> <span className=''> dashboard</span></Link></li>
        <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/bookings"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineCalendarDays /></span> <span className=''>bookings</span></Link></li>
        <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/cabins"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineHomeModern /></span> <span className=''>cabins</span></Link></li>
        
        <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' to={"/setting"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineCog6Tooth /></span> <span className=''> settings </span></Link></li>
        
      </ul>
    </div>
  )
}
