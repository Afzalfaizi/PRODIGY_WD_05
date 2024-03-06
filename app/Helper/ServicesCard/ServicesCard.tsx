import { BugAntIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface  Props {
    title: string,
    num: string,
}

const iconMapping ={
    '1': CommandLineIcon,
    '2': ServerIcon,
    '3': CodeBracketIcon,
    '4': CursorArrowRaysIcon,
    '5': RocketLaunchIcon,
    '6': BugAntIcon
}
export default function ServicesCard({num, title}:Props) {
    // make a iconcomponent variable and run a map loop on iconMapping
    const IconComponent =
     (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;
  return (
    <div className=' bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md'>
        <IconComponent className='w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400' />
        <h1 className='text-white text-[25px] relative z-[1] mt-[1rem]'>{title}</h1>
        <p className = " text-white text-[15px] opacity-60 mt-[0.8rem]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Commodi maxime consectetur, quia at voluptates numquam iure, modi quae dolorem dignissimos nobis sequi nam excepturi porro! 
            Incidunt dignissimos deserunt impedit itaque?</p>
        <p className='text-white text-[1.6rem] font-bold absolute top-3 right-4'>{num}</p>
    </div>
  )
}
