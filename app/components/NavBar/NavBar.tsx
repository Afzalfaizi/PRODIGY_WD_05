import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={`fixed w-[100%] z-[1000] transition-all duration-300 bg-gray-800`}>
    <div className=' flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
        <div className=' font-logo text-white text-[18px]'>
            <span className=' text-[30px] md:tex-[40px] text-yellow-400'>Faizi</span>
            Dev
        </div>
        <ul className=' md:flex hidden items-center space-x-10'>
            <li className="nav__link"><Link href={'/'}>Home</Link></li>
            <li className="nav__link"><Link href={'/services'}>Services</Link></li>
            <li className="nav__link"><Link href={'/projects'}>Projects</Link></li>
            <li className="nav__link"><Link href={'/price'}>Prices</Link></li>
            <li className="nav__link"><Link href={'/contact'}>Contact</Link></li>
        </ul>
    </div>
</div>
  )
}

export default NavBar