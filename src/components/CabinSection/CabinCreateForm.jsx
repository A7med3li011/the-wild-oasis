import { useMutation, useQueryClient } from '@tanstack/react-query'

import React from 'react'
import { useForm } from 'react-hook-form'
import { insertCabin } from '../../Services/apiCabins'
import Spinnerbtn from './../../UI/Spinnerbtn';
const images = ["https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg", "https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg", "https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg", "https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-004.jpg", "https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-005.jpg", "https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-006.jpg", "https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-007.jpg", "https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-008.jpg",]
export default function CabinCreateForm() {
  
  const { register, reset, handleSubmit, formState, getValues } = useForm()
  const { errors } = formState

  const QueryClient =  useQueryClient()

  const {isLoading:loadingForAddCabin, mutate } = useMutation({

    mutationFn: insertCabin,
   
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey:["cabins"]
      })
      reset()
    },

    onError: (err) => {
      console.log(err)
    }
  })
  function onSumbit(data) {
    mutate({ ...data, image: images[Math.floor(Math.random() * images.length)] })

  }
  console.log(loadingForAddCabin)
  return (
    <form onSubmit={handleSubmit(onSumbit)} className='dark:border-slate-700 dark:bg-slate-800 border-2 border-gray-200 bg-white py-3 px-5 mt-10 rounded-lg'>
      <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
        <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="name">Cabin Name</label>
        <input className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="text" id='name' {...register("name", {
          required: "this field is required"
        })} />
        {errors.name && <p className='w-auto text-red-500 rounded-xl'>{errors.name.message}</p>}
      </div>
      <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
        <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Maximum Capacity">Maximum Capacity</label>
        <input className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="number" id='Maximum Capacity' {...register("maxCapacity", {
          required: "this field is required",
          min:{
            value:1,
            message:"at least one guest"
          }
        })} />
        {errors.maxCapacity && <p className='w-auto text-red-500 rounded-xl'>{errors.maxCapacity.message}</p>}
      </div>
      <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
        <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Regular Price">Regular Price</label>
        <input className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="number" id='Regular Price' {...register("regularPrice", {
          required: "this field is required",
          min:{
            value:1,
            message:" at least 1$"
          }
        })} />
        {errors.regularPrice && <p className='w-auto text-red-500 rounded-xl'>{errors.regularPrice.message}</p>}
      </div>
      <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
        <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Discount">Discount</label>
        <input className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="number" id='Discount' {...register("dicount", {
          required: "this field is required",
          validate: (value) => Number(value) <= Number(getValues("regularPrice")) || "more Regular Price"
        })} />
        {errors.dicount && <p className='w-auto text-red-500 rounded-xl'>{errors.dicount.message}</p>}

      </div>
      <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
        <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Description">Description</label>
        <input className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="text" id='Description' {...register("description", {
          required: "this field is required"
        })} />
        {errors.description && <p className='w-auto text-red-500 rounded-xl'>{errors.description.message}</p>}

      </div>
      <button disabled={loadingForAddCabin} className='block  py-1 px-2 text-white bg-blue-500 ms-auto mt-8 rounded-lg'>{loadingForAddCabin?<Spinnerbtn/>:"add cabin"}</button>
    </form>
  )
}
