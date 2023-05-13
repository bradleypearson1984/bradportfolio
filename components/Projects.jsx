import Image from 'next/image'
import React from 'react'
import thisDogImg from '../public/ThisDog.png'
import cursedItemsImg from '../public/CursedItems.png'
import canadiansImg from '../public/Canadians.png'
import petPurposeImg from '../public/PetPurposeApp.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full' >
        <div className='max-w-[1240px] mx-auto px-2 py-16' >
            <p className='text-xl tracking-widest uppercase text-[#5651e5] ' >Projects</p>
            <h2 className='py-4' >What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8' >
<ProjectItem 
title='How Bout This Dog' 
backgroundImg={thisDogImg} 
language='javaScript, jQuery'
projectUrl='/thisdog' 
/>
<ProjectItem 
title='Cursed Items' 
backgroundImg={cursedItemsImg}
language='expressJS' 
projectUrl='/curseditems' 
/>
<ProjectItem 
title='Pet Purpose' 
backgroundImg={petPurposeImg} 
language='React'
projectUrl='/petpurpose' 
/>
<ProjectItem 
title='Canadians' 
backgroundImg={canadiansImg} 
language='Python, Django'
projectUrl='/canadians' 
/>


            </div>

        </div>

    </div>
  )
}

export default Projects