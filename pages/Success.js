import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Success = () => {
  return (
    <div className='w-full h-screen text-center' >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center' >
        <div  className='w-screen h-[30vh] lg:h-[40vh] relative ' >
            <div  >
            <h1>Success</h1>
            
      <div className='w-full h-auto m-auto  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
            <Image src="/Success-1.jpg" height={200} width={200} className='rounded-xl'/>
            </div>
            <h2>Form submitted! You did it! Great Job!</h2>
            <Link href='/#projects' >
            <p className='underline cursor-pointer' >Back</p>
            </Link>
        </div>
      </div>   
    </div>
</div>

  )
}

export default Success