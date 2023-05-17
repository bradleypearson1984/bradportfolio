import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ProjectItem = ({title, backgroundImg, language, projectUrl}) => {
  return (
    <div className='relative flex items-center
    justify-center h-auto w-full shadow-xl shadow-pink-100 
    rounded-xl p-4 group hover:bg-gradient-to-t from-red-100 to-red-200 ' >
       <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg}  alt='App Screenshot' />
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' >
           <h3 className='text-2xl text-white tracking-wider text-center' >{title}</h3>
           <p className='pb-4 pt-2 text-white text-center' >{language}</p>
           <Link  href={projectUrl} >
               <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer' >More Info</p>
           </Link>
       </div>
       {/* <Image src={cursedItems}   />
       <Image src={canadians}   /> */}
       {/* <Image src='/CursedItems.png'  height={400} width={400} className='rounded-xl' />
       <Image src='/Canadians.png'  height={400} width={400} className='rounded-xl' /> */}

    </div>
  )
}

export default ProjectItem