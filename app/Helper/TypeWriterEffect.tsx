import React from 'react'
import { TypeAnimation } from 'react-type-animation';


export default function TypeWriterEffect() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'a React Developer',
                1000,  // Wait for 1 second before continuing to next string
                'a Next Js Developer',
                1000,
                'a full stack Developer',
                1000,
            ]}
            wrapper="span"
            speed={50}
            className=' xl:text-[40px] lg:text-[35px] sm:text-[30px] text-[25px] font-bold text-white'
            repeat={Infinity}
        />
    )
}
