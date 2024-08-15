import React from 'react'
import BookingOperations from '../components/BookingSection/BookingOperations'
import { useQuery } from '@tanstack/react-query'
import { getAllBookings } from '../Services/apiBookings'
import EachBook from '../components/BookingSection/EachBook'
import Loader from './../UI/Loader';
import { useSearchParams } from 'react-router-dom'

export default function Bookings() {

  const { data: bookings, isLoading } = useQuery({
    queryFn: getAllBookings,
    queryKey: ["booking"],
  })
  const [searchParams] = useSearchParams()

  let filteredBooking;
  if (searchParams.get("sortbookingby") === "all" ||searchParams.get("sortbookingby") === null) filteredBooking = bookings
  
  if (searchParams.get("sortbookingby") === "unconfirmed") filteredBooking = bookings?.filter(book => book.status === "unconfirmed")
  if (searchParams.get("sortbookingby") === "checked-in") filteredBooking = bookings?.filter(book => book.status === "checked-in")
  if (searchParams.get("sortbookingby") === "checked-out") filteredBooking = bookings?.filter(book => book.status === "checked-out")
  if (isLoading) return <Loader />
  return (
    <div className='p-5 mt-4'>
      <header className=' lg:flex justify-between items-center '>
        <h2 className='font-semibold lg:text-3xl text-lg  mb-3 '>All Bookings</h2>
        <BookingOperations />
      </header>
      <div className=' overflow-auto dark:bg-slate-900 bg-white rounded-lg mt-3 '>

        <div className='flex  items-center  w-max  justify-around font-semibold dark:bg-slate-700 bg-slate-200 lg:w-auto text-xs md:text-base   py-2'>
          <p className=' min-w-20 mx-3'>Cabins </p>
          <p className=' min-w-36 mx-3'>Guests</p>
          <p className=' min-w-52 mx-3'>Dates </p>
          <p className=' min-w-20 mx-3'>Status </p>
          <p className=' min-w-20 mx-3  '>Amount </p>
        </div>
        <div className='  '>
          {filteredBooking?.map(book => <EachBook book={book} key={book.id} />)}
        </div>
      </div>
    </div>
  )
}
