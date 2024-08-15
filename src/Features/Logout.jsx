import React from 'react'

import { ImExit } from 'react-icons/im'
import {  useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate()
  
  function out(){
    navigate("/login")
    localStorage.clear()
  }
  return (
    <li className='mb-4 text-xs sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><div onClick={out} className='flex items-center cursor-pointer  gap-x-3' > <span className='text-2xl text-blue-400 hover:text-blue-500 transition-all duration-200  block'><ImExit /></span> <span className=''>Logout</span></div></li>

  )
}
