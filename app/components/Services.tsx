import React from 'react'
import ServicesCard from './ServicesCard'

export default function Services() {
  return (
    <div className=' pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
        <div className=' text-center'>
            <p className=' heading__mini'> Popular Services </p>
            <h1 className=' heading__primary'> My Special <span className=' text-yellow-500'> Services </span> For You </h1>
        </div>
        <div className=' pt-[15rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]
        items-center'>
            <ServicesCard title = "React Website" num="1"/>

        </div>
    </div>
  )
}