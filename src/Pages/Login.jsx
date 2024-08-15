import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Services/apiAuth'
import toast from 'react-hot-toast'



export default function Login() {

  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm()
  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: () => {

      toast.success(`welcome in our site`)
      setError("")
      navigate("/")
    },
    onError: () => {
      setError("incorrect email or password")
    }

  })
  function onsumbite(data) {
    mutate(data)

  }


  return (
    <div className='bg-gray-100 dark:bg-slate-900 absolute w-full dark:text-white  top-0 left-0 right-0 bottom-0 order-6 h-full '>
      <div className=' w-full  center mt-10 '>
        <img className='w-44 sm:w-56  mx-auto' src={`/logo-light.png`} alt="" />
      </div>
      <h2 className='text-2xl sm:text-3xl w-full text-center font-semibold mt-6'>Log in to your account</h2>
      <form onSubmit={handleSubmit(onsumbite)} className='dark:bg-slate-800 bg-white  py-10  w-fit mx-auto mt-10   px-5  rounded-lg shadow-lg'>
        <div className='mb-7'>
          <label htmlFor="name " className='block mb-2 font-semibold ps-1'>Email</label>
          <input id='name' className='  dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 focus:ring-1  focus:ring-gray-100 w-72 sm:w-80 border-2 border-gray-200 rounded-xl focus:outline-none px-3 py-1' type='text' {...register("email", {
            required: "this field is required"
          })} />
        </div>
        <div>
          <label className='block mb-2 font-semibold ps-1' htmlFor="password">Password</label>
          <input id='password' className=' border-2 dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 focus:ring-1  focus:ring-gray-100 w-72 sm:w-80 border-gray-200 rounded-xl focus:outline-none px-3 py-1' type='password' {...register("password", {
            required: "this field is required"
          })} />
        </div>
        <button disabled={isLoading} className='text-center w-full bg-blue-600 text-white py-1 px-3 rounded-md mt-5 hover:bg-blue-700 transition-all duration-200'>{"Login"}</button>
        {error && <p className='py-3 text-red-500 text-center'>{error}</p>}
        <div className='text-center mt-4 hover:text-blue-500 transition-all duration-300'><Link to={"/user"}>Register Now ?</Link></div>
      </form>

    </div>

  )
}
