
import React from 'react'
import PriceCard from '../Helper/PriceCard/PriceCard';

const Price = () => {
    return (
        <>
            <div className=' pt-[8rem] pb-[3rem] bg-black'>
                <div className=' text-center'>
                    <p className=' heading__mini'> Popular Services </p>
                    <h1 className=' heading__primary'>Best <span className=' text-yellow-400'> Pricing</span> For Your Projects </h1>
                </div>
                <div className=' w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center
             pt-[4rem] md:pt-[7rem]'>
                    <PriceCard plane="Basic" price="25$/hour" save="25%" bg="bg-red-900" />
                    <PriceCard plane="Popular" price="30$/hour" save="35%" bg="bg-green-900" />
                    <PriceCard plane="Premium" price="50$/hour" save="45%" bg="bg-blue-900" />
                </div>

            </div>
        </>
    )
}

export default Price