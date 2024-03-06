import React from 'react'
import Link from 'next/link'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid'

const Footer = () => {
    return (
        <div className=' pt-[5rem] pb-[3rem] bg-black'>
            <div className=' w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px]
         pb-5 border-gray-600 border-opacity-40'>
                <div>
                    <div className=' font-logo text-white text-[18px]'>
                        <span className=' text-[30px] md:text[40px] text-yellow-400'> Faizi</span>
                        Dev
                    </div>
                    <h1 className=' text-[14px] mt-[0.5rem] text-white opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque totam officia alias magni libero.
                        Amet omnis quis unde delectus nulla nesciunt labore nisi maiores consequuntur,
                        consequatur voluptate enim facilis quae.
                    </h1>
                    <p className=' mt-[1.3rem] text-yellow-400 underline font-semibold '>afzaalm993@gmail.com</p>
                </div>
                <div className=' md:mx-auto'>
                    <h1 className=' text-white font-semibold mb-[1.4rem] text-[17px]'>Quick Links</h1>
                    <Link href={'/'}><p className=' text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>About </p></Link>
                    <Link href={'services'}><p className=' text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Services </p></Link>
                    <Link href={'projects'}><p className=' text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Projects </p></Link>
                    <Link href={'contact'}><p className=' text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Contact </p></Link>
                </div>
                <div className=' lg:mx-auto'>
                    <h1 className=' text-white font-semibold mb-[1rem] text-[17px]' >
                        Address
                    </h1>
                    <div className=' flex items-center mt-[1rem] space-x-2' >
                        <MapIcon className=' w-[1rem] h-[1rem] text-yellow-300' />
                        <p className=' text-[17px] font-normal text-white opacity-75'>Shahkot,  Punjab, Pakistan.</p>
                    </div>
                    <div className=' flex items-center mt-[1rem] space-x-2' >
                        <EnvelopeIcon className=' w-[1rem] h-[1rem] text-yellow-300' />
                        <p className=' text-[17px] font-normal text-white opacity-75'>afzaalm993@gmail.com</p>
                    </div>
                    <div className=' flex items-center mt-[1rem] space-x-2' >
                        <PhoneIcon className=' w-[1rem] h-[1rem] text-yellow-300' />
                        <p className=' text-[17px] font-normal text-white opacity-75'>+92 303 441 1895</p>
                    </div>
                </div>
            </div>
            <div className=' mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
                &#169; Copyright {new Date().getFullYear()} | Developed by Muhammad Afzal <br />
                This website is built with NextJS and TailwindCSS.<br />
                Check out the source code on
                <Link href='https://github.com/Afzalfaizi/PRODIGY_WD_05'
                    target='_blank'
                    rel='noreferrer'
                    className=' text-[15px] text-yellow-400 underline font-semibold'> Github! </Link>
            </div>
        </div>
    )
}

export default Footer