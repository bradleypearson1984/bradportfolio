import React from 'react';
import Image from 'next/image';
import Link from 'next/Link'
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16' >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ' >
            <div className='col-span-2' >
                <p className=' uppercase text-xl tracking-widest text-[#5651e5] dark: text-pink-500'>About</p>
                <h2 className='py-4' >Who I Am</h2>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >I am a human male Software Engineer with a background in film, scriptwriting, animation and digital art. 
                Strong skills in visual design, out of the box thinking and problem solving to improve the user 
                experience through a customized approach and cultivating uniquely defined products and services that meet consumer needs. 
                My background in the arts gives me a stronger ability to find creative solutions, an eye for attractive and intuitive design, 
                and an instinct for making a memorable impression.
</p>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >I have real bones and blood.</p>
                <p className='py-2 text-gray-600  dark:text-pink-200 '  >I know what it is to love, to laugh, to cry.</p>
                <Link href="/#projects" scroll={false}  >
                <p className='py-2 text-red-400 dark:text-pink-600 '  >Check out my latest projects </p>
                </Link>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-green-200 dakr:shadow-xl dark:shadow-pink-500 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
            <Image src="/replicant2.jpg" height={400} width={400} className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default About