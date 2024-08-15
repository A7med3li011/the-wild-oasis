import React from 'react'
import SettingEdite from '../components/SettingSection/SettingEdite'
import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../Services/apiSettings'
import Loader from '../UI/Loader'

export default function Settings() {
  const { data: setting, isLoading } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  })

  
  if (isLoading) return <Loader />
  return (
    <div className='mx-3 sm:mx-10'>
      <h2 className='my-5 text-2xl font-semibold'>Edite Hotel Settings</h2>
      <SettingEdite setting={setting} />
    </div>
  )
}
