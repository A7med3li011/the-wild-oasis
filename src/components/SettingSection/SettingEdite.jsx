import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { updateSetting } from '../../Services/apiSettings'

export default function SettingEdite({ setting }) {

            
    const { breakfastPrice
        , maxBookingLength
        , maxGuestsPerBooking,
        minBookingLength } = setting
            const queryClient = useQueryClient()
        const {mutate} = useMutation({
            mutationFn:updateSetting,
            onSuccess:()=>{
                queryClient.invalidateQueries({
                    queryKey:["setting"]
                })

            },
            onError:(err)=>{
                console.log(err)
            }
        })

        
    return (
        <form className=' bg-white py-4 dark:border-slate-700 dark:bg-slate-800  border-2 border-gray-200 rounded-lg'>
            <div className=' w-5/6 mx-auto '>
                <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10 '>
                    <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor='MinimumBooking'>Minimum Nights/Booking</label>
                    <input onBlur={(e)=>mutate({minBookingLength:e.target.value})} defaultValue={minBookingLength} className='md:w-1/3 w-full  border-2 border-gray-200 rounded-xl dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0  ' type='number' id='Booking' />
                    
                </div>
                <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10 '>
                    <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor='MaximumBooking'>Maximum Nights/Booking</label>
                    <input  onBlur={(e)=>mutate({maxBookingLength:e.target.value})} defaultValue={maxBookingLength} className='md:w-1/3 w-full  border-2 border-gray-200 rounded-xl dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0  ' type='number' id='MaximumBooking' />
                    
                </div>
                <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10 '>
                    <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor='guests'>Maximum guests/Bo0king</label>
                    <input  onBlur={(e)=>mutate({maxGuestsPerBooking:e.target.value})} defaultValue={maxGuestsPerBooking} className='md:w-1/3 w-full  border-2 border-gray-200 rounded-xl dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0  ' type='number' id='guests' />
                    
                </div>
                <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10 '>
                    <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor='Breakfast'>Breakfast Price</label>
                    <input  onBlur={(e)=>mutate({breakfastPrice:e.target.value})} defaultValue={breakfastPrice} className='md:w-1/3 w-full  border-2 border-gray-200 rounded-xl dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0  ' type='number' id='Breakfast' />
                    
                </div>
            </div>
        </form>
    )
}
