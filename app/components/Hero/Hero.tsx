import React from 'react'
import Image from 'next/image'
import TypeWriterEffect from '@/app/Helper/TypeWritterEffect/TypeWritterEffect';
const Hero = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Replace with the actual path to your CV file
        link.download = 'cv.pdf'; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className=" w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
            <div className="flex justify-center flex-col w-[80%] mx-auto h-[100%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
                    <div>
                        <h1 className="text-white mb-[1.3rem] "> WELCOME TO AGENTIC WORLD </h1>
                        <div>
                            <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[20px] font-semibold leading-[2.4rem] text-white">
                                Hi,I&apos;m <span className="text-yellow-400"> Faizi </span>
                            </h1>
                            <TypeWriterEffect />
                            <p className=' mt-[1.2rem] text-[15px] md:text[17px] text-white'>a skilled Full Stack Developer fluent in HTML5, Tailwind CSS, React, and Next.js.
                                Passionate about creating user-friendly websites and always eager to learn.
                                Let&apos;s collaborate and build something amazing!</p>
                            <div className=' mt-[2rem] flex items-center space-x-6'>
                                <button className=' relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden
                            bg-yellow-400 text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full
                             before:bg-red-500 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                                    <span className=' relative z-10'> Hire Me </span>
                                </button>
                                <button 
                                    className=' relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden
                                    bg-yellow-400 text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full
                                    before:bg-red-500 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'
                                    onClick={downloadCV}
                                >
                                    <span className=' relative z-10'> Download CV </span>
                                </button>
                            </div>
                        </div>
                      
                    </div>
                    <div className=' hidden md:block'>
                        <Image src="/images/hero.jpeg"
                            alt="Hero"
                            height={300}
                            width={300} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
