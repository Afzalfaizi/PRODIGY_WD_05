import React from 'react'
import ServicesCard from '@/app/Helper/ServicesCard/ServicesCard'
export default function MyServices() {
    return (
        <div className=' pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
            <div className=' text-center'>
                <p className=' heading__mini'> Popular Services </p>
                <h1 className=' heading__primary'>
                    My Special <span className=' text-yellow-400'> Services </span> For You
                </h1>
            </div>
            <div className=' pt-[5rem] w-[82%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
                <div>
                    <ServicesCard num='1' title='React Website' />
                </div>
                <div>
                    <ServicesCard num='2' title='Next JS Website' />
                </div>
                <div>
                    <ServicesCard num='3' title='Fullstack Website' />
                </div>
                <div>
                    <ServicesCard num='4' title='Node JS Api' />
                </div>
                <div>
                    <ServicesCard num='5' title='MERN WebApp' />
                </div>
                <div>
                    <ServicesCard num='6' title='Bug Fixing' />
                </div>
            </div>
        </div>
    )
}
