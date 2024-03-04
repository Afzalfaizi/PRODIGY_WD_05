import React from 'react'

interface Props {
    image: string;
    title: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
}

const ProjectCard = ({ image, tech1, tech2, tech3, tech4, title }: Props) => {
    return (
        <div className=' grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div className=' p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200
         bg-gray-800 shadow-md'>
                <img
                    src={`${image}`}
                    alt={title}
                    width={500}
                    height={500}
                    className='  object-contain rounded-xl mx-auto' />
            </div>
            <div>
                <h1 className=' text-[25px] text-white'>{title}</h1>
                <p className='text-sm text-gray-400 my-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, odit ex neque laborum vitae dolor architecto aliquid accusamus
                    quasi vel quo magnam veritatis accusantium officiis consectetur in
                    possimus nam dolorum?</p>
                <div className=' mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
                    <h1 className=' px-6 py-3 bg-blue-700 text-white rounded-lg text-center'>{tech1}</h1>
                </div>
                <div className=' mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
                    <h1 className=' px-6 py-3 bg-blue-700 text-white rounded-lg text-center'>{tech2}</h1>
                </div>
                <div className=' mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
                    <h1 className=' px-6 py-3 bg-blue-700 text-white rounded-lg text-center'>{tech3}</h1>
                </div>
                <div className=' mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
                    <h1 className=' px-6 py-3 bg-blue-700 text-white rounded-lg text-center'>{tech4}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard