import React from 'react'
import Link from 'next/link';

const Success = () => {
  return (
    <div>
        <h2>Form submitted! You did it! Great Job!</h2>
        <Link href='/#projects' >
    <p className='underline cursor-pointer' >Back</p>
</Link>
    </div>
  )
}

export default Success