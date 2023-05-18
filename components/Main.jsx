import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';


const Main = () => {
    return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center' >
            <div>
                <Image  src="/logo2hex.png" width='200' height='200' alt="/" className='mx-auto'  /> 
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Man + Machine
                </p>
                <h1 className='py-4 text-purple-900' >Hi I'm <span className='text-[#f34f85]'>  Brad Pearson</span></h1>
                <h1 className='py-2 text-purple-900' > A Human Person </h1>
                <h1 className='py-2 text-purple-900' > Who Can Talk To <span className='text-[#e1287e]'>  Machines </span></h1>
               
                <div className='flex items center justify-evenly max-w-[330px] mx-auto py-4' >
                    <div  className='rounded-full shadow-lg shadow-pink-100 p-6 cursor-pointer hover:scal-110 ease-in duration-300' >
                    <a href="https://www.linkedin.com/in/bradpearsonmedia/" target={'_blank'} >
                        <FaLinkedinIn />
                    </a>
                    </div>
                    <div  className='rounded-full shadow-lg shadow-pink-100 p-6 cursor-pointer hover:scal-110 ease-in duration-300' >
                    <a href="https://github.com/bradleypearson1984" target={'_blank'} >
                        <FaGithub />
                    </a>
                    </div>
                    {/* <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scal-110 ease-in duration-300' >
                        <AiOutlineMail />
                    </div>
                    <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scal-110 ease-in duration-300' >
                        <BsFillPersonLinesFill />
                    </div> */}
                </div>
            </div>
        </div>

    </div>
    )
}

export default Main;