import React from 'react';
import canadiansImg from '../public/Canadians.png';
import Image from 'next//legacy/image';
import {RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
const canadians = () => {
  return (
    <div className='w-full' >
        <div className='w-screen h-[30vh] lg:h-[40vh] relative ' >
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 '/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={canadiansImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y[-50%] text-white z-10 ' >
                    <h2 className='py-2' >Canadians</h2>
                    <h3>Python / Django / Materialize / AWS S3  </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ' >
                <div className='col-span-4' >
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This app was built in the Django framework for Python. It allows users to create 
                        a database of their favorite Canadian people, places, and snacks. 🇨🇦
                    </p>
                    <a href="https://canadians.herokuapp.com/" target={'_blank'}>
                    <button className='px-8 py-2 mt-4 mr-8' >Demo</button>
                    </a>
                    <a href="https://github.com/bradleypearson1984/canadians" target={'_blank'}> 
                    <button className='px-8 py-2 mt-4' >Code</button> 
                    </a>

                </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-red-200 rounded-xl p-4' >
        <div className='p-2' >
                <p  className='text-center font-bold pb-2' >Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1' >
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' /> Python </p>
                </div>
                <div>
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' />Django </p>
                </div>
                <div>
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' />Materialize </p>
                </div>
                <div>
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' />AWS S3  </p>
                </div>

        </div>
    </div>
</div>
<Link href='/#projects' >
    <p className='underline cursor-pointer' >Back</p>
</Link>
        </div>
    
  )
}

export default canadians;