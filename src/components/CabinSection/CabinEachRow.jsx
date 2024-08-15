import { useMutation,  useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { MdDelete, MdEditNote } from "react-icons/md";
import { deleteCabin } from '../../Services/apiCabins';
import CabinUpdate from './CabinUpdate';
export default function CabinEachRow({ cabin }) {
    const [toggleEdite, setToggleEdite] = useState(false)
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
        },
        onError: (err) => {
            console.log(err)
        }
    })



    const { dicount, image, name, maxCapacity, regularPrice, id } = cabin
    return (
<>
        <div className=' flex flex-col md:flex-row justify-between items-center py-2 px-4 dark:border-slate-700 border-b-2 border-gray-200'>

            <div className='content w-full md:w-96 flex flex-col md:flex-row gap-4 py-2 px-2'>
                <div className='md:w-32 w-full  '>
                    <a href={image} target='blank'><img src={image} className='md:w-32 w-full  h-full' alt="" /></a>
                </div>
                <div>
                    <ul  >
                        <li><span className='text-sm md:text-base font-normal md:font-semibold w-14  inline-block  '>Name:</span> <span className='text-sm md:text-base'> {name}</span></li>
                        <li><span className='text-sm md:text-base font-normal md:font-semibold w-14  inline-block  '>Fits To:</span><span className='text-sm md:text-base'>  {maxCapacity} Guests</span></li>
                        <li className='' ><span className='text-sm md:text-base font-normal md:font-semibold w-14  inline-block  '>Price:</span> {dicount > 0 ? <span> <span className='me-1 line-through text-sm md:text-base font-light hidden sm:inline-block'> {regularPrice}$</span> <span className='text-green-500 text-sm md:text-base'>{regularPrice - dicount}$</span></span> : <span className='text-green-500 text-sm md:text-base'>{regularPrice}$</span>}</li>

                    </ul>
                </div>
            </div>
            <div className="actions flex justify-between items-center  w-full md:w-fit">
                <button className=' text-red-500 text-2xl  py-1 px-2 m-1 rounded-lg '  onClick={() => mutate(id)}><MdDelete /></button>
                <button className=' text-blue-500  text-2xl py-1 px-2 m-1 rounded-lg ' ><MdEditNote onClick={() => setToggleEdite(!toggleEdite)} /></button>
            </div>


        </div>
            <div>
                {toggleEdite&&<CabinUpdate cabin = {cabin}/>}
            </div>

</>
    )
}
