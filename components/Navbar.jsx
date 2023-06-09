import React, { useEffect, useState }from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
// pick different icons maybe

    const Navbar = () => {
        const [nav, setNav] = useState(false);
        const [shadow, setShadow] = useState(false);
        const [navBg, setNavBg] = useState('#ecf0f3');
        const [linkColor, setLinkColor] = useState('#1f2937');
        const router = useRouter();

        useEffect(() => {
            if (
                router.asPath === '/thisdog' || 
                router.asPath === '/curseditems' || 
                router.asPath === '/petpurpose' || 
                router.asPath === '/canadians'
            ) { 
                setNavBg('transparent');
                setLinkColor('#ecf0f3');
            } else {
                setNavBg('transparent');
                setLinkColor('#1f2937');
            }
        }, [router] )

        const handleNav = () => {
            setNav(!nav)
        };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(false);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

return (
<div 
style={{backgroundColor: `${navBg}`}}
className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100] ' } >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16' >
            <Link href="/#home" scroll={false}>
            <Image src="/logo2hex.png" width='87' height='35' alt="/"  />
            </Link>

            <ul 
            style= {{ color: `${linkColor}`}}
            className='hidden md:flex' >
                <Link href="/#home" scroll={false} >
                    <li className='ml-10 text-sm uppercase hover:border-b' >Home</li>
                </Link>
                <Link href="/#about" scroll={false} >
                    <li className='ml-10 text-sm uppercase hover:border-b' >About</li>
                </Link>
                <Link href="/#skills" scroll={false} >
                    <li className='ml-10 text-sm uppercase hover:border-b' >Skills</li>
                </Link>
                <Link href="/#projects" scroll={false} >
                    <li className='ml-10 text-sm uppercase hover:border-b' >Projects</li>
                </Link>
                <Link href="/#contact" scroll={false} >
                    <li className='ml-10 text-sm uppercase hover:border-b' >Contact</li>
                </Link>
                <Link href="//Resume_2023_Brad_Pearson.pdf" target={'_blank'}
                className='ml-10 text-sm uppercase hover:border-b dark:text-green-100'
                download={true}
                >Resume 
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden' >
                <AiOutlineMenu size={25} />
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} >

        <div className={
            nav 
            ? ' fixed left-0 top-0 w-[75%] h-screen  bg-gradient-to-b from-teal-100 to-purple-200 p-10 ease-in duration-500 dark:bg-gradient-to-l dark:from-gray-900 dark-to-emerald-900 ' 
            : 'fixed left-[-100%] top-0  p-10 ease-in-duration-500'} >
            <div >
                <div>
                    <div className='flex w-full items-center justify-between' >
                        <Link href="/#home" scroll={false} >
                        <Image src="/logo2hex.png" width='87' height='35' alt="/"  />
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-pink-300 p-3 cursor-pointer' >
                            <AiOutlineClose /> 
                        </div>
                    </div>
                </div>
        <div className='border-b border-gray-300 my-4' >

                    <p className='w-[85%] md:w-[90%] py-4' >I am the Machine Man. </p>

            </div>
            <div className='py-4 flex flex-col' >
                <ul className='uppercase' >
                    <Link href='/#home' scroll={false} >
                        <li onClick={()=> setNav(false)} className='py-4 text-sm' >Home </li>
                    </Link>
                    <Link href='/#about' scroll={false}>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm' >About </li>
                    </Link>
                    <Link href='/#skills'scroll={false} >
                        <li onClick={()=> setNav(false)} className='py-4 text-sm' >Skills </li>
                    </Link>
                    <Link href='/#projects'scroll={false} >
                        <li onClick={()=> setNav(false)} className='py-4 text-sm' >Projects </li>
                    </Link>
                    <Link href='/#contact'scroll={false} >
                        <li onClick={()=> setNav(false)} className='py-4 text-sm' >Contact </li>
                    </Link>
                    <Link href="/Resume 2023 Brad Pearson May2023.pdf" target={'_blank'}
                className='py-4 text-sm dark:text-green-100'
                download={true}
                >Resume 
                </Link>
                </ul>
                <div className='pt-40' >
                    <p className='uppercase tracking-widest text-[#5651e5] ' >Let's Connect </p>
                </div>
            <div className='flex items-center justify-evenly my-4 w-full sm:w-[80%]' >

                <div className='rounded-full shadow-lg shadow-pink-400 p-3 cursor-pointer hover:scal-105 ease-in duration-300' >
                    <a href="https://www.linkedin.com/in/bradpearsonmedia/" target={'_blank'} >
                    <FaLinkedinIn />
                    </a>
                </div>
                        
                <div className='rounded-full shadow-lg shadow-pink-400 p-3 cursor-pointer hover:scal-105 ease-in duration-300' >
                    <a href="https://github.com/bradleypearson1984" target={'_blank'} >
                    <FaGithub />
                    </a>

                </div>
                {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scal-105 ease-in duration-300' >
                    <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scal-105 ease-in duration-300' >
                    <BsFillPersonLinesFill />
                </div> */}
            </div>

            </div>
        </div>
    </div>
</div>
                </div>
                
    )
}

export default Navbar;