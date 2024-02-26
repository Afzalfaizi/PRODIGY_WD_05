import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

export default function Nav() {
    return (
        <div className=' fixed w-[100%] z-[1000] bg bg-gray-800'>
            <div className=' flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
                <div className=' font-logo text-white text-[18px]'>
                    <span className=' text-[30px] md:tex-[40px] text-yellow-400'>Faizi</span>
                    Dev
                </div>
                <ul className=' md:flex hidden items-center space-x-10'>
                <li className="nav__link"><Link href={'/'}>Home</Link></li>
                <li className="nav__link"><Link href={'/about'}>About</Link></li>
                <li className="nav__link"><Link href={'/services'}>Services</Link></li>
                <li className="nav__link"><Link href={'/blog'}>Blog</Link></li>
                <li className="nav__link"><Link href={'/contact'}>Contact</Link></li>
                </ul>
                <Bars3CenterLeftIcon className=" w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"/>
            </div>
        </div>
    )
}
