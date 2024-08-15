import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { deleteBooking } from '../../Services/apiBookings'
import toast from 'react-hot-toast'

export default function SpecBookActions({id}) {
    
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn:()=>deleteBooking(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["bookings"]

            })
            toast.success("deleted successfully")
            navigate("/bookings")
        }
        
    })
    return (
        <div className="actions flex items-center gap-x-2 mt-5 w-fit ms-auto">
            <button  onClick={()=>mutate(id)} className='py-1 px-3 bg-red-600 text-white rounded-xl flex items-center gap-x-1'><span ><TbTrash /></span> <span>delete</span> </button>
            <button onClick={() => navigate(-1)} className='py-1 px-4 flex items-center gap-x-1 bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white rounded-xl'><span ><BiArrowBack /></span> <span>back</span> </button>
        </div>
    )
}
