import React from 'react'
import Image from 'next/image';

interface Props {
    image: string;
    title: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    decription: string;
}

const ProjectCard = ({ image, tech1, tech2, tech3, tech4, title, decription }: Props) => {
    return (
        <div className=' grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div className=' p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200
         bg-gray-800 shadow-md'>
                <Image
                    src={`${image}`}
                    alt={title}
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <h1 className=' text-[25px] text-white'>{title}</h1>
                <p className='text-m text-white my-6'>
                    {decription}</p>
                <div className=' mt-[1.3rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-[2rem]'>
                    <h1 className=' px-3 py-3 bg-blue-700 text-white rounded-lg text-center'>{tech1}</h1>
                    <h1 className=' px-6 py-3 bg-white text-black rounded-lg text-center'>{tech2}</h1>
                    <h1 className=' px-6 py-3 bg-sky-500 text-black rounded-lg text-center'>{tech3}</h1>
                    <h1 className=' px-6 py-3 bg-blue-500 text-white rounded-lg text-center'>{tech4}</h1>
                </div>


            </div>
        </div>
    )
}

export default ProjectCard