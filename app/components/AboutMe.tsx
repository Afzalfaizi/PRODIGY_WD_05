import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

export default function AboutMe() {
    return (
        <div className=' mt-[-4rem] bg-black pb-[3rem]'>
            <div className=' w-[80%] pt-[5rem] sm:pt-[7rem] md:peer-data-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                <div>
                    <p className=' text-white text-[17px] opacity-75'> About me </p>
                    <h1 className=' mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px]
                                     lg:text-[38px] xl:text-[45px]'>
                        Professional  <span className=' text-yellow-400'> Website </span> for your bussiness
                    </h1>
                    <p className=' text-white  text-[15px] mt-[1.3rem] opacity-75'>
                        I am a professional web developer with over two years of experience in creating websites and applications.
                        I have a strong background in web design and development.
                        My passion is to create websites that are not only visually appealing, but also highly functional
                        and user-friendly.
                    </p>
                    <p className=' text-white  text-[15px] mt-[1.3rem]'> My Expertise : </p>
                    <div className=' mt-[2rem] space-y-3'>
                        <div className=' flex items-center space-x-4'>
                            <CheckIcon className=' w-[2rem] h-[2rem] text-yellow-400' />
                            <p className=' text-[18px] text-white'> Frontend Development </p>
                        </div>
                        <div className=' flex items-center space-x-4'>
                            <CheckIcon className=' w-[2rem] h-[2rem] text-yellow-400' />
                            <p className=' text-[18px] text-white'> Bankend Development </p>
                        </div>
                        <div className=' flex items-center space-x-4'>
                            <CheckIcon className=' w-[2rem] h-[2rem] text-yellow-400' />
                            <p className=' text-[18px] text-white'>  Web Development </p>
                        </div>
                        <div className=' flex items-center space-x-4'>
                            <CheckIcon className=' w-[2rem] h-[2rem] text-yellow-400' />
                            <p className=' text-[18px] text-white'> Full Stack Development </p>
                        </div>
                    </div>
                </div>
                <div className=' lg:ml-auto'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                        <div className=' p-6 text-center bg-yellow-500'>
                            <p className=' text-[50px] text-white font-semibold'>2</p>
                            <p className=' text-[20px] text-white font-600'>years experience</p>
                        </div>
                        <div className=' p-6 text-center bg-yellow-500'>
                            <p className=' text-[50px] text-white font-semibold'> 30+</p>
                            <p className=' text-[20px] text-white font-600'> Happy Clients</p>
                        </div>
                        <div className=' p-6 text-center bg-yellow-500'>
                            <p className=' text-[50px] text-white font-semibold'> 30+</p>
                            <p className=' text-[20px] text-white font-600'> Projects Done </p>
                        </div>
                        <div className=' p-6 text-center bg-yellow-500'>
                            <p className=' text-[50px] text-white font-semibold'> 3+</p>
                            <p className=' text-[20px] text-white font-600'> Awards Win </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
