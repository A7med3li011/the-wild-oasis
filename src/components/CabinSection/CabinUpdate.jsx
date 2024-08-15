import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import {  updateCabin } from '../../Services/apiCabins'
import Spinnerbtn from '../../UI/Spinnerbtn'
import toast from 'react-hot-toast'

export default function CabinUpdate({cabin}) {
    const { dicount, image, name, maxCapacity, regularPrice, id } = cabin
    const { register, reset, handleSubmit, formState, getValues } = useForm()
    const { errors } = formState

    const QueryClient = useQueryClient()

    const { isLoading: loadingForAddCabin, mutate } = useMutation({
        mutationFn:(dataUpdated)=> updateCabin(dataUpdated,id),

        onSuccess: () => {
            QueryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
            reset()
            toast.success("cabin updated successfully")
        },

        onError: (err) => {
            console.log(err)
            toast.error("cabin can not be updated ")
        }
    })

    function onsumbit(data){
        mutate({...data,image:image})
        // console.log({...data,image:image})

    }
    return (
        <form onSubmit={handleSubmit(onsumbit)} className='border-2 border-gray-200  bg-white py-3 px-5 mb-4 rounded-lg dark:border-slate-700 dark:bg-slate-800'>
            <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
                <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="name">Cabin Name</label>
                <input defaultValue={name} className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="text" id='name' {...register("name", {
                    required: "this field is required"
                })} />
                {errors.name && <p className='w-auto text-red-500 rounded-xl'>{errors.name.message}</p>}
            </div>
            <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
                <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Maximum Capacity">Maximum Capacity</label>
                <input  defaultValue={maxCapacity} className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="number" id='Maximum Capacity' {...register("maxCapacity", {
                    required: "this field is required"
                })} />
                {errors.maxCapacity && <p className='w-auto text-red-500 rounded-xl'>{errors.maxCapacity.message}</p>}
            </div>
            <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
                <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Regular Price">Regular Price</label>
                <input defaultValue={regularPrice} className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="number" id='Regular Price' {...register("regularPrice", {
                    required: "this field is required"
                })} />
                {errors.regularPrice && <p className='w-auto text-red-500 rounded-xl'>{errors.regularPrice.message}</p>}
            </div>
            <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
                <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Discount">Discount</label>
                <input  defaultValue={dicount}className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="number" id='Discount' {...register("dicount", {
                    required: "this field is required",
                    validate: (value) => Number(value) <= Number(getValues("regularPrice")) || "more Regular Price"
                })} />
                {errors.dicount && <p className='w-auto text-red-500 rounded-xl'>{errors.dicount.message}</p>}

            </div>
            <div className='flex gap-3 items-center mb-3 flex-col md:flex-row md:gap-10'>
                <label className='md:w-1/3 w-full text-xs md:text-base font-semibold' htmlFor="Description">Description</label>
                <input defaultValue={getValues("description")} className='md:w-1/3 w-full  border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 border-gray-200 rounded-xl py-1 px-3 focus:outline-none focus:ring-1 focus: ring-blue-500 focus:border-0 ' type="text" id='Description' {...register("description", {
                    required: "this field is required"
                })} />
                {errors.description && <p className='w-auto text-red-500 rounded-xl'>{errors.description.message}</p>}

            </div>
            <button disabled={loadingForAddCabin} className='block  py-1 px-2 text-white bg-blue-500 ms-auto mt-8 rounded-lg'>{loadingForAddCabin?<Spinnerbtn/>:"Edite Cabin"}</button>
        </form>
    )
}
