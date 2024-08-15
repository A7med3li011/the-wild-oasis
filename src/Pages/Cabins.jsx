import React, {  useState } from 'react'
import { getCabins } from '../Services/apiCabins'
import { useQuery } from '@tanstack/react-query'
import Loader from './../UI/Loader';

import CabinEachRow from '../components/CabinSection/CabinEachRow';
import CabinCreateForm from '../components/CabinSection/CabinCreateForm';
import CabinOperations from '../components/CabinSection/CabinOperations';
import { useSearchParams } from 'react-router-dom';

export default function Cabins() {

  const [formToggle, setFormToggle] = useState(false)

  const { data: cabins, isLoading } = useQuery({
    queryFn: getCabins,
    queryKey: ["cabins"]
  })
  const [searchParams] = useSearchParams()
  cabins?.sort((a, b) => Number(a[searchParams.get("sortby")]) - Number(b[searchParams.get("sortby")]))
  let filteredCabins
  if (searchParams.get("searchby") === "all" || searchParams.get("searchby") === null) filteredCabins = cabins
  if (searchParams.get("searchby") === "with-discount") filteredCabins = cabins?.filter(cabin => cabin.dicount > 0)
  if (searchParams.get("searchby") === "no-discount") filteredCabins = filteredCabins = cabins?.filter(cabin => cabin.dicount == 0)


  if (isLoading) return <Loader />
  return (
    <div className='py-10 px-3 md:px-6  '>
      <header className='md:flex justify-between items-center mb-5 px-2'>
        <h2 className='sm:text-3xl text-lg font-bold'>All Cabins</h2>
        <div className='' ><CabinOperations /></div>
      </header>
      <div>
        <div className='dark:bg-slate-800 dark:border-none bg-white border-2 border-gray-200 rounded-lg'>
          {filteredCabins?.map(cabin => <CabinEachRow cabin={cabin} key={cabin.id} />)}
        </div>
        <button onClick={() => setFormToggle(!formToggle)} className='bg-blue-500 text-white py-2 px-3 w-full m-auto block rounded-lg mt-5 hover:bg-blue-600 transition-all duration-300 '>Add New Cabin</button>
        {formToggle && <CabinCreateForm />}
      </div>
    </div>

  )
}
