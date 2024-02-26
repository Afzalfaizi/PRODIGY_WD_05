import Link from "next/link"
export default function NavMobile() {
    return (
        <div>
            <div className={` fixed top-0 transform transition-all duration-500 z-[10000] left-0 ring-0 bottom-0 bg-black
    opacity-70 w-[100vw] h-[100vh]`}>
            </div>
            <ul className={` text-wrap fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300
        delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}>
                <li className="nav__link text-[25px] sm:text-[30px]"><Link href={'/'}>Home</Link></li>
                <li className="nav__link text-[25px] sm:text-[30px]"><Link href={'/about'}>About</Link></li>
                <li className="nav__link text-[25px] sm:text-[30px]"><Link href={'/services'}>Services</Link></li>
                <li className="nav__link text-[25px] sm:text-[30px]"><Link href={'/blog'}>Blog</Link></li>
                <li className="nav__link text-[25px] sm:text-[30px]"><Link href={'/contact'}>Contact</Link></li>

            </ul>
        </div>

    )
}
