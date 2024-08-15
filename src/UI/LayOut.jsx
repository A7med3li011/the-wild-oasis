import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import SideBar from './SideBar';

export default function LayOut() {
  return (
    <div className='  flex h-screen bg-slate-100 dark:bg-slate-900 dark:text-white  w-full ' >
      <SideBar />
      <main className=' w-full overflow-x-auto '>
        <Header />
        <div className='max-w-6xl  my-0 mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
