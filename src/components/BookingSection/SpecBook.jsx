import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import {  getBooking, updateBooking } from "../../Services/apiBookings"
import { Link,  useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Loader from './../../UI/Loader';
import {  HiOutlineHomeModern } from 'react-icons/hi2'
import { FiArrowRight } from 'react-icons/fi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FaRegCheckCircle } from 'react-icons/fa'
import { getSettings } from '../../Services/apiSettings'
import toast from 'react-hot-toast'
import SpecBookActions from './SpecBookActions'


export default function SpecBook() {
   

    const [confirmed, setConfirmed] = useState(false)
    const  [isbreakfast,setIsbreakfast ] = useState(false)

    const { id } = useParams()

    const { data: book, isLoading, isFetching } = useQuery({
        queryFn: () => getBooking(id),
        queryKey: ["bookings"]
    })





    function getDayAndMonth(dateStr) {
        // Parse the input date string into a Date object
        const dateObj = new Date(dateStr);

        // Extract the day and month
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Months are zero-indexed
        const year = dateObj.getFullYear()
        return { day, month, year };
    }

    // startDate
    const date = book?.startDate;
    const { day: DS, month: MS, year: YS } = getDayAndMonth(date);

    // endDate
    const dat2 = book?.endDate;
    const { day: DE, month: ME, year: YE } = getDayAndMonth(dat2);
    const dateCareated = book?.created_at;
    const { day: Dc, month: Mc, year: Yc } = getDayAndMonth(dateCareated);

    let duration;
    if (Math.abs(MS - ME) !== 0) {

        duration = Math.abs((DS - DE) - (Math.abs(MS - ME) * 30))
    } else {

        duration = Math.abs((DS - DE))
    }

    const { data: setting } = useQuery({
        queryFn: getSettings,
        queryKey: ["settings"],
    })

    


    // console.log(book.cabinPrice)
    let total_price = Number(book?.cabinPrice) + Number(book?.extraPrice)

    if (book?.hasBreakfast) {
        total_price += Number(setting?.breakfastPrice)
    }

    const queruClient = useQueryClient()
   
    const { mutate } = useMutation({
        mutationFn: () => updateBooking(book.id, {
            id,
            created_at: book.created_at,
            startDate: book.startDate,
            endDate: book.endDate,
            numberOfNight: book.numberOfNight,
            numberOfGuests: book.numberOfGuests,
            cabinPrice: book.cabinPrice,
            extraPrice: book.extraPrice,
            totalPrice: book.totalPrice,
            status:book.status === "unconfirmed"? "checked-in":"checked-out",
            hasBreakfast: isbreakfast,
            isPaid: true,
            observation: book.observation,
            cabinId: book.cabinId,
            guestId: book.guestId
        }),
        mutationKey: ["bookings"],
        onSuccess:()=>{
            toast.success("checked-in successfully")
            queruClient.invalidateQueries({
                queryKey:["bookings"]
            })
        }
    })
    
    useEffect(() => {
        if (book?.isPaid) {
            setConfirmed(true)
        }
        if (book?.hasBreakfast) {
            setIsbreakfast(true)
        }
    }, [book])
    
    if (isLoading|| isFetching) return <Loader />
    


    return (
        <div className='sm:px-4  py-6 overflow-hidden '>
            <header className='flex flex-col-reverse sm:flex-row gap-y-5 md:gap-y-0 justify-between items-center '>
                <div className='flex flex-col sm:flex-row gap-y-5 md:gap-y-0  items-center gap-x-6'>
                    <h2 className='font-bold text-xl'>Booking #{id}</h2>
                    <p className={`font-semibold ${book.status === "unconfirmed" && "bg-blue-200 text-blue-900"} ${book.status === "checked-in" && "bg-green-300 dark:bg-green-400 dark:text-green-800 text-white"} ${book.status === "checked-out" && "bg-blue-600 text-white"} ${book.status === "unconfirmed" && "bg-blue-200 text-blue-900"} text-sm  text-center  py-1 rounded-xl min-w-24 mx-3`}>{book.status} </p>
                </div>
                <div className='flex items-center gap-x-2  text-blue-500'>
                    <span><BiArrowBack /></span>
                    <Link to={-1} className='font-semibold'>Back</Link>
                </div>
            </header>

            <div className="card  mt-5  ">
                <header className=' gap-y-5 md:gap-y-0 text-xs md:text-base  flex md:flex-row flex-col justify-between  items-center px-1 md:px-4   text-white bg-blue-500 dark:bg-blue-600 py-4 rounded-t-lg '>
                    <div className='flex  items-center gap-x-4'>
                        <p className='text-4xl'><HiOutlineHomeModern /> </p>
                        <p className='font-semibold'>{duration} Nights in Cabin {book.cabins.name}</p>
                    </div>
                    <div className='flex items-center gap-x-5'>
                        <p>{YS}-{Number(MS) > 9 ? MS : `0${MS}`}-{Number(DS) > 9 ? DS : `0${DS}`}</p>
                        <p><FiArrowRight /></p>
                        <p>{YE}-{Number(ME) > 9 ? ME : `0${ME}`}-{Number(DE) > 9 ? DE : `0${DE}`}</p>
                    </div>
                </header>

                <div className='dark:bg-slate-800 py-6 text-xs md:text-base  px-1 md:px-4  bg-white rounded-b-lg '>

                    <div className='flex flex-col sm:flex-row items-center gap-x-4 n font-semibold'>
                        <p>{book.guests.fullName}</p>
                        <p className='text-gray-500 font-normal dark:text-gray-400'>- {book.guests.emailAddress}</p>
                        <p className='text-gray-500 font-normal dark:text-gray-400'> - National ID {book.guests.nationalID}</p>

                    </div>

                    <div className='flex text-center w-fit mx-auto sm:w-auto sm:mx-0  items-center gap-x-1 mt-5'>


                        <span className={`${book.hasBreakfast ? "text-green-400" : "text-red-500"}`}><FaRegCheckCircle /></span> <span className='block me-2 font-semibold '> breakfast included? </span> <span>{book.hasBreakfast ? "yes" : "no"}</span>

                    </div>
                    <div className={`totalprice flex items-center flex-col md:flex-row text-xs lg:text-base mt-5 ${book.isPaid ? "bg-green-200 dark:bg-green-400 dark:text-green-800" : "bg-yellow-200 dark:bg-gray-700"} ${book.isPaid ? "text-green-800" : "bg-yellow-200"} py-5 px-5 justify-between rounded-lg`}>
                        <div className='flex  items-center '>

                            <div className='flex items-center me-4'><span className='text-lg '><AiOutlineDollarCircle /></span> <span>Total Price</span></div>
                            <div className='me-3 '>${total_price}</div>
                            <div className='hidden lg:block'> {`( $${book.cabinPrice} Cabin  + $${book.extraPrice} extra Price  ${book.hasBreakfast?`+ $${setting?.breakfastPrice} breakfast` :""}  )`}</div>
                        </div>
                        <div className={`font-semibold uppercase   text-xs lg:text-base`}> {book.isPaid ? "paid" : "will pay at properity"}</div>
                    </div>
                    {!book.isPaid && <div className='flex sm:flex-row flex-col-reverse items-center gap-x-2  border-2 border-gray-200 dark:border-gray-700 py-4 mt-5 px-3 rounded-xl' >

                        <input value={confirmed} onChange={() => setConfirmed(!confirmed)} id="checker" type='checkbox' className='bg-gray-200 ' checked={confirmed} />
                        <label htmlFor='checker' className='lowercase font-semibold sm:text-sm text-xs '> i confirme that {book.guests.fullName} has paid the total amout ${total_price} </label>

                    </div>}
                    {(!book.isPaid && !book.hasBreakfast)&& <div className='flex sm:flex-row flex-col-reverse items-center gap-x-2  border-2 border-gray-200 py-4 mt-5 px-3 rounded-xl' >

                        <input value={isbreakfast} onChange={() => {setIsbreakfast(!isbreakfast)
                            setConfirmed(false)
                        }} id="checker" type='checkbox' className='bg-gray-200 ' />
                        <label htmlFor='checker' className='lowercase font-semibold sm:text-sm text-xs '>add breakfast for ${setting?.breakfastPrice} </label>

                    </div>}

                    <div className='mt-7 text-xs text-gray-500 font-semibold   ms-auto flex  justify-between '>
                        <p>Booked: {Yc}-{Mc}-{Dc}</p>



                        {book.status === "unconfirmed" && <button disabled={!confirmed} className='bg-blue-600 text-white   py-2 px-3  hover:bg-blue-700 transition-all duration-200   rounded-lg disabled:cursor-not-allowed  disabled:bg-blue-300   ' onClick={mutate}>checked-in</button>}
                        {book.status === "checked-in" && <button disabled={!confirmed} className='bg-blue-600 text-white    py-2 px-3  hover:bg-blue-700 transition-all duration-200  rounded-lg disabled:cursor-not-allowed  disabled:bg-blue-300   ' onClick={mutate}>checked-out</button>}

                    </div>
                </div>
            </div>
            <SpecBookActions id={id}/>
        </div>

    )
}
