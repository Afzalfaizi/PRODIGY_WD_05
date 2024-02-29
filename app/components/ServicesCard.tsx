import { BugAntIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/16/solid';
import React from 'react'

interface props {
    title: string;
    num: string;
}

const iconMapping ={
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": BugAntIcon,
    
}

export default function ServicesCard({num,title}:props) { 
    const IconComponent =
    (iconMapping as Record<string, React.ElementType>) [num] || CommandLineIcon ;
  return (
    <div className=' bg-black custom__services z-[100] relative transform rounded-2xl text-center p-6
    shadow-md'>
        <IconComponent className = " w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400"/>
        </div>
  )
}