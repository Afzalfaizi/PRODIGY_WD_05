import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <div className='mt-[-4rem] bg-black pb-[3rem]'>
            <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:peer-data-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                {/* Left Section with Fade-in Animation */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1 }}
                >
                    <p className='text-white text-[17px] opacity-75'> About me </p>
                    <motion.h1
                        className='mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                    >
                        Professional  <span className='text-yellow-400'> Website </span> for your business
                    </motion.h1>
                    <motion.p
                        className='text-white text-[15px] mt-[1.3rem] opacity-75'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                    >
                        I am a professional web developer with over two years of experience in creating websites and applications.
                        I have a strong background in web design and development.
                        My passion is to create websites that are not only visually appealing, but also highly functional
                        and user-friendly.
                    </motion.p>
                    <motion.p
                        className='text-white text-[15px] mt-[1.3rem]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                    >
                        My Expertise :
                    </motion.p>
                    <div className='mt-[2rem] space-y-3'>
                        {/* Expertise List with Slide-up Animations */}
                        <motion.div
                            className='flex items-center space-x-4'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                        >
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Frontend Development</p>
                        </motion.div>
                        <motion.div
                            className='flex items-center space-x-4'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                        >
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Backend Development</p>
                        </motion.div>
                        <motion.div
                            className='flex items-center space-x-4'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                        >
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Web Development</p>
                        </motion.div>
                        <motion.div
                            className='flex items-center space-x-4'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                        >
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Full Stack Development</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Section with Staggered Stats Animation */}
                <motion.div
                    className='lg:ml-auto'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                        {/* Statistics with Hover Effect */}
                        {[
                            { number: '2', label: 'years experience' },
                            { number: '30+', label: 'Happy Clients' },
                            { number: '30+', label: 'Projects Done' },
                            { number: '3+', label: 'Awards Win' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className='p-6 text-center bg-yellow-500'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className='text-[50px] text-white font-semibold'>{stat.number}</p>
                                <p className='text-[20px] text-white font-600'>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
