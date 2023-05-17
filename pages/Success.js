import React from 'react'
import Link from 'next/link';

const Success = () => {
  return (
    <div className='w-full' >
        <div  className='w-screen h-[30vh] lg:h-[40vh] relative ' >
            <div  >

            <h2>Form submitted! You did it! Great Job!</h2>
            <Link href='/#projects' >
            <p className='underline cursor-pointer' >Back</p>
            </Link>
        </div>
    </div>
</div>

  )
}

export default Success