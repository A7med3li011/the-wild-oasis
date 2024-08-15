import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchBooking() {
    const [active,setActive] = useState("all")

    const [searchParams,setSearchparams] = useSearchParams()

    function onClick(value){
        setActive(value)
        searchParams.set("sortbookingby",value)

       setSearchparams(searchParams)

    }
  return (
    <div className='flex  w-fit bg-white dark:bg-slate-800   sm:gap-x-4 py-1 px-2 rounded-xl mt-5 md:mt-0 '>
        <button className={`${active==="all"?"bg-blue-500 dark:bg-blue-700 text-white rounded-lg":null}  px-2 transition-all duration-200 text-xs md:text-base   w-full md:w-20 `} onClick={(e)=>onClick(e.target.value)} value={"all"} >all</button>
        <button className={`${active==="unconfirmed"?"bg-blue-500 dark:bg-blue-700  text-white rounded-lg":null}  px-2 transition-all duration-200 text-xs   md:text-base w-full md:w-auto `} onClick={(e)=>onClick(e.target.value)} value={"unconfirmed"} >unconfirmed</button>
        <button className={`${active==="checked-in"?"bg-blue-500 dark:bg-blue-700 text-white rounded-lg":null}  px-2 transition-all duration-200 text-xs    md:text-base w-full md:w-auto `} onClick={(e)=>onClick(e.target.value)} value={"checked-in"} >checkedin</button>
        <button className={`${active==="checked-out"?"bg-blue-500 dark:bg-blue-700 text-white rounded-lg":null}  px-2 transition-all duration-200 text-xs    sm:text-base w-full md:w-auto `} onClick={(e)=>onClick(e.target.value)} value={"checked-out"} >checkedout</button>
    </div>
  )
}
