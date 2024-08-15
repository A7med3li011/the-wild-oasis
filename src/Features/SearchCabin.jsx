import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchCabin() {
    const [active,setActive] = useState("all")
    const [searchParams,setSearchparams] = useSearchParams()
    function onClick(value){
        setActive(value)
        searchParams.set("searchby",value)
        setSearchparams(searchParams)

    }
  return (
    <div className='dark:bg-slate-800 dark:text-white sm:w-fit flex bg-white   gap-x-4 py-1 px-2 rounded-xl mt-5 md:mt-0 '>
        <button className={`${active==="all"?"bg-blue-500 dark:bg-blue-700 text-white rounded-lg":null}  px-2 transition-all duration-200 text-xs sm:text-base   w-full sm:w-20 `} onClick={(e)=>onClick(e.target.value)} value={"all"} >all</button>
        <button className={`${active==="with-discount"?"bg-blue-500 dark:bg-blue-700 text-white rounded-lg":null}  px-2 transition-all duration-200 text-xs sm:text-base w-full sm:w-auto `} onClick={(e)=>onClick(e.target.value)} value={"with-discount"} >with-discount</button>
        <button className={`${active==="no-discount"?"bg-blue-500 dark:bg-blue-700 text-white rounded-lg":null}  px-2 transition-all duration-200 text-xs sm:text-base w-full sm:w-auto `} onClick={(e)=>onClick(e.target.value)} value={"no-discount"} >no-discount</button>
    </div>
  )
}
