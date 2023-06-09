import React from 'react';
import cursedItemsImg from '../public/CursedItems.png';
import Image from 'next//legacy/image';
import {RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
const curseditems = () => {
  return (
    <div className='w-full' >
        <div className='w-screen h-[30vh] lg:h-[40vh] relative ' >
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 '/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={cursedItemsImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y[-50%] text-white z-10 ' >
                    <h2 className='py-2' >Cursed Item Directory</h2>
                    <h3>expressJS / nodeJS </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ' >
                <div className='col-span-4' >
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This app was built using Google Firebase, expressJS and nodeJS to provide users with an interactive
                        database of known cursed objects and items in the world. Users can browse existing 
                        cursed items, and signed in members can edit, delete and upload new items, including
                        a picture, description of the item and the curse that it inflicts.
                    </p>
                    <a href="https://cursed-items.herokuapp.com/items" target={'_blank'} >
                    <button className='px-8 py-2 mt-4 mr-8' >Demo</button>
                    </a>

                    <a href="https://git.generalassemb.ly/brad-pearson-forever/Project-2" target={'_blank'} >
                    <button className='px-8 py-2 mt-4' >Code</button> 
                    </a>


                </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-red-200 rounded-xl p-4' >
        <div className='p-2' >
                <p  className='text-center font-bold pb-2' >Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1' >
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' /> javaScript </p>
                </div>
                <div>
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' /> nodeJS </p>
                </div>
                <div>
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' /> expressJS </p>
                </div>
                <div>
                    <p className='text-gray-600  dark:text-pink-200 py-2 flex items-center' ><RiRadioButtonFill className='pr-1' /> Google Firebase </p>
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

export default curseditems;