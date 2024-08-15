import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SortCabin() {
    const [valueSort, setValueSort] = useState("name")
    const [searchParams, setSearchparams] = useSearchParams()
    function onChange(value) {
        searchParams.set("sortby", value)
        setSearchparams(searchParams)
        setValueSort(value)
    }
    return (
        <div className='' >
            <select value={valueSort} onChange={(e) => onChange(e.target.value)} className='dark:bg-slate-800 dark:text-white w-full py-1 px-2 border-2 border-gray-200 rounded-xl mt-3 focus:outline-none '>
                <option value={"name"} className='w-full py-1 px-2 bg-gray-800/70 text-white  rounded-xl mt-3'>sort by name</option>
                <option value={"regularPrice"} className='w-full py-1 px-2 bg-gray-800/70 text-white  rounded-xl mt-3'>sort by price</option>
                <option value={"maxCapacity"} className='w-full py-1 px-2 bg-gray-800/70 text-white  rounded-xl mt-3'>sort by capacity</option>
            </select>
        </div>
    )
}

