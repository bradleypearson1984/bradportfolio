import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center' >
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Man + Machine
                </p>
                <h1 className='py-4 text-gray-700' >Hi I'm <span className='text-[#5651e5]'>  Brad Pearson</span></h1>
                <h1 className='py-2 text-gray-700' > A Human Person </h1>
                <h1 className='py-2 text-gray-700' > Who Can Talk To <span className='text-[#5651e5]'>  Machines </span></h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto' >
                I'm a human guy who can interface with the machines
                </p>
                <div className='flex items center justify-evenly max-w-[330px] mx-auto py-4' >
                    <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scal-110 ease-in duration-300' >
                        <FaLinkedinIn />
                    </div>
                    <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scal-110 ease-in duration-300' >
                        <FaGithub />
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