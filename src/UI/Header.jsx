import React, {  useState } from 'react'
import Logout from '../Features/Logout'
import Mode from './Mode'
import { FaBars } from 'react-icons/fa'

import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from 'react-icons/hi2'
import { Link } from 'react-router-dom'


export default function Header() {
  const [info] = useState(() => JSON.parse(localStorage.getItem("metaData")))
  const [toggleLinks,setToggleLinks ] = useState(false)
  const [mode, setMode] = useState("dark")

  return (
    <div className='flex justify-between dark:bg-slate-800 dark:border-none dark:text-white bg-white w-ull py-5 px-6  border-b-2 border-gray-200'>
      <div className='flex items-center'>
        <div className="logo ">
          <img className='w-20 sm:w-36 md:hidden   mx-auto my-5' src={`${mode === "dark" ? "/logo-light.png": "/logo-dark.png"}`} alt="" />
          <p className='hidden md:block'>Hello, {info?.name.toUpperCase()}</p>
        </div>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='md:flex items-center gap-x-5 hidden  '>
          <Logout />
          <Mode  setMode={setMode} mode={mode}/>
        </div>
        <div className='md:hidden text-2xl relative'>
          <div className=' cursor-pointer ' onClick={()=>setToggleLinks(!toggleLinks)}>
            <FaBars />
          </div>
          {toggleLinks&&<ul className='font-semibold absolute dark:bg-slate-900 bg-slate-200 right-0  px-3 py-1   '>
            <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-100 transition-all duration-200 sm:pe-4 px-2 py-1  rounded-lg' ><Link onClick={()=>setToggleLinks(!toggleLinks)} className='flex items-center  gap-x-3' to={"/"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineHome /></span> <span className=''> dashboard</span></Link></li>
            <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-100 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' onClick={()=>setToggleLinks(!toggleLinks)} to={"/bookings"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineCalendarDays /></span> <span className=''>bookings</span></Link></li>
            <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-100 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' onClick={()=>setToggleLinks(!toggleLinks)} to={"/cabins"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineHomeModern /></span> <span className=''>cabins</span></Link></li>
            <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-100 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><Link className='flex items-center  gap-x-3' onClick={()=>setToggleLinks(!toggleLinks)} to={"/setting"}> <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><HiOutlineCog6Tooth /></span> <span className=''> settings </span></Link></li>
            <Logout/>
            <Mode setMode={setMode} mode={mode}/>
           </ul>}



        </div>
      </div>
    </div>
  )
}
