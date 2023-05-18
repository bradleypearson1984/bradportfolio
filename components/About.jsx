import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16' >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ' >
            <div className='col-span-2' >
                <p className=' uppercase text-xl tracking-widest text-[#5651e5] dark: text-pink-500'>About</p>
                <h2 className='py-4' >Who I Am</h2>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >I am a human guy</p>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >I am skilled in developing and designing front end web applications </p>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >I have real bones and blood</p>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >I know what it is to love, to laugh, to cry</p>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >Check out my latest projects </p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-green-200 dakr:shadow-xl dark:shadow-pink-500 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
            <Image src="/replicant2.jpg" height={400} width={400} className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default About