import React, { useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { MdSunny } from 'react-icons/md'

export default function Mode({setMode,mode}) {
    


    function changeMode(){
        document.documentElement.classList.toggle("dark")

        if(document.documentElement.classList.contains("dark")){
            localStorage.setItem("mode","dark")
            setMode("light")
        }else{
            setMode("dark")
            localStorage.setItem("mode","light")


        }
        
    }
    return (
        <li className='mb-4 text-lg sm:text-base dark:hover:bg-black/50 hover:bg-slate-200 transition-all duration-200 sm:pe-4 px-2 py-1 rounded-lg' ><div onClick={changeMode} className='flex items-center cursor-pointer  gap-x-3' ><span className={`${mode==="dark"?"":"text-yellow-300"}`}>{ mode==="dark"?<IoMoon />:<MdSunny />} </span> <span>{mode ==="dark"?"dark":"light"}</span> </div></li>
    
    )
}

