import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='h-screen py-10 '>
      <div className='bg-white py-5 px-4 dark:bg-slate-800 shadow-lg rounded-lg'>
        <h2 className='sm:text-3xl text-lg font-semibold py-3 mb-5'>Page Not Found 404</h2>
        <p className='sm:text-xl text-base pt-3 mb-5'>Look like  you have followed a broken link or entered a URl that dosen't exist on this site.</p>
        <p className='flex items-center gap-x-1 py-2 mb-3 text-blue-500 hover:text-blue-700 transition-all duration-200'><span className='text-xl'><IoIosArrowRoundBack /></span> <Link to={"/"}>Back to our site</Link></p>
      </div>
    </div>
  )
}
