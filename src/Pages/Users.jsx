import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { signup } from '../Services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import Spinnerbtn from '../UI/Spinnerbtn'

export default function Users() {
  const navigate = useNavigate()
  const { register, getValues, handleSubmit, formState, reset } = useForm()
  const { errors } = formState

  const { mutate, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("created user suucessfully")
      navigate("/login")
      reset()
    }

  })
  function onsumbit(data) {
    mutate({ ...data })
  }

  return (
    <div className='px-3  absolute bg-slate-100  inset-0   '>
      <div className='flex items-center justify-center mt-5'><img className='w-36' src={"/logo-light.png"} alt="" /></div>
      <h2 className='md:text-3xl text-xl font-semibold mb-7  text-center mt-1'>Register Now</h2>
      <form onSubmit={handleSubmit(onsumbit)} className='dark:border-slate-700 dark:bg-slate-800 bg-white py-6 md:px-6 sm:w-1/2 mx-auto   px-4 rounded-lg shadow-lg' >
        <div className='flex md:flex-row gap-y-2 md:gap-y-0  flex-col justify-around mb-10 '>
          <label htmlFor='name' className='name md:text-base text-sm font-semibold w-56 '>Full name</label>
          <input className=' py-1 px-3 md:w-52 w-full border-2 border-gray-200 rounded-lg dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-100 ' type='text' id='name' {...register("name",
            {
              required: "this filed is required"
            }
          )} />
          <p className='text-red-500 w-52 text-xs md:text-sm md:px-2 '>{errors.name ? errors.name.message : ""}</p>
        </div>
        <div className='flex md:flex-row gap-y-2 md:gap-y-0 flex-col justify-around mb-10 '>
          <label htmlFor='name' className='name md:text-base text-sm font-semibold w-56 '>Email address</label>
          <input className=' py-1 px-3 md:w-52 w-full border-2 border-gray-200 rounded-lg dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-100 ' type='text' id='email'  {...register("email",
            {
              required: "this filed is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email"
              }
            }
          )} />
          <p className='text-red-500 w-52 text-xs md:text-sm md:px-2 '>{errors.email ? errors.email.message : ""}</p>
        </div>
        <div className='flex md:flex-row gap-y-2 md:gap-y-0 flex-col justify-around mb-10 '>
          <label htmlFor='name' className='name md:text-base text-sm font-semibold w-56 '>Password <span className='hidden md:inline'> (min 8 characters)</span></label>
          <input className=' py-1 px-3 md:w-52 w-full border-2 border-gray-200 rounded-lg dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-100 ' type='password' id='password'  {...register("password",
            {
              required: "this filed is required",
              minLength: {
                value: 8,
                message: "at least 8 characters required"
              }
            }
          )} />
          <p className='text-red-500 w-52 text-xs md:text-sm md:px-2 '>{errors.password ? errors.password.message : ""}</p>
        </div>
        <div className='flex md:flex-row gap-y-2 md:gap-y-0 flex-col justify-around mb-10 '>
          <label htmlFor='name' className='name md:text-base text-sm font-semibold w-56 '>Re-Password</label>
          <input className=' py-1 px-3 md:w-52 w-full border-2 border-gray-200 rounded-lg dark:bg-slate-900 dark:border-none dark:focus:ring-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-100 ' type='password' id='repassword'  {...register("repassword",
            {
              required: "this filed is required",
              validate: (value) => value === getValues().password || "not match with password"
            }
          )} />
          <p className='text-red-500 w-52 text-xs md:text-sm md:px-2 '>{errors.repassword ? errors.repassword.message : ""}</p>
        </div>

        <div className='  ms-auto w-fit mt-7 '>
          <button disabled={isLoading} className=' bg-blue-500 dark:bg-blue-700 text-sm md:text-base mb-2  text-white py-1 px-2 rounded-md me-1 dark:hover:bg-blue-800  transition-all duration-200  '  >{isLoading ? <Spinnerbtn /> : "Create new user"}</button>
          <button onClick={() => navigate("/login")} className='py-1 px-3 border-2 text-sm md:text-base mb-2 border-gray-200 rounded-md  dark:bg-slate-900 dark:border-none dark:shadow-xl dark:shadow-slate-900 '>back</button>
        </div>
      </form>
    </div>
  )
}
