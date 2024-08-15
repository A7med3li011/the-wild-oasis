import React from 'react'
import DashBoardHeader from '../Features/Dashbord/DashBoardHeader'
import { useQuery } from '@tanstack/react-query'
import { getAllBookings } from '../Services/apiBookings'
import Loader from './../UI/Loader';
import Stats from '../Features/Dashbord/Stats';
import SalesChart from '../Features/Dashbord/SalesChart';
import DurationChart from '../Features/Dashbord/DurationChart';


export default function DashBoard() {

  const { data: bookings, isLoading, isFetched } = useQuery({
    queryFn: getAllBookings,
    queryKey: ["bookings"]
  })

  if (isLoading ) return <Loader />

  if (isFetched) {

    return (

      <div className='px-3 overflow-hidden'>

        {bookings?.length && <DashBoardHeader />}
        {bookings?.length && <Stats bookings={bookings} />}
        {bookings?.length && <SalesChart bookings={bookings} />}
        {bookings?.length && <DurationChart bookings={bookings} />}


      </div>
    )
  }

}