import React from 'react'
import { FaLinkedinIn, FaGithub  } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import { useState } from 'react';


function Contact() {
     
  return (
    <div className='w-full lg:g-screen' >
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full ' > 
            <p className='text-xl tracking-widest uppercase text-pink-400 dark:text-pink-500 ' >
                Contact
            </p>
            <h2 className='py-4' >Human to Human Contact, it's What We Crave</h2>
            <div className='grid lg:grid-cols-5 gap-8' >
{/* left */}
<div id='contact' className='col-span-3 
                lg:col-span-2 w-full h-full 
                shadow-xl shadow-green-200 dark:shadow-2xl dark:shadow-pink-500
                rounded-xl p-4' >
    <div className='lg:p-4 h-full' >
        <div>
        <img className='rounded-xl 
            hover:scale-105 ease-in 
            duration-300 mx-auto' 
            src="/neoPhone.jpg" 
            alt="Neo Phone" />
        </div>
        <div>
            <h2 className='py-2' >Brad Pearson</h2>
            <p>Front-End Developer</p>
            <p className='py-4' >I am available for freelance or full-time positions. Let's talk! </p>
        </div>
    <div>
        <p className='uppercase pt-8' >Connect With Me</p>
        <div className='flex items-center justify-evenly py-4' >
        <div  className='rounded-full shadow-lg
         shadow-green-200  dark:shadow-2xl dark:shadow-pink-500 p-6  cursor-pointer 
         hover:scal-110 ease-in duration-300' >
            <a href="https://www.linkedin.com/in/bradpearsonmedia/" target={'_blank'} >

                        <FaLinkedinIn className='dark:invert'/>
            </a>
                    </div>
                    <div  className='rounded-full 
                            shadow-lg shadow-green-200 dark:shadow-2xl dark:shadow-pink-500 p-6 
                            cursor-pointer hover:scal-110 ease-in duration-300' >
                         <a href="https://github.com/bradleypearson1984" target={'_blank'} >

                        <FaGithub className='dark:invert' />
                         </a>
                    </div>
        </div>
    </div>
    </div>
</div>
{/* right */}

<div className='col-span-3 
        w-full h-auto shadow-xl shadow-green-200 dark:shadow-2xl dark:shadow-pink-500
        rounded-xl lg:p-4' >
    <div className='p-4' >

            <form  
            //  onSubmit={handleSubmit} 
             data-netlify="true"
            
             data-netlify-honeypot="bot-field"
             action='/Success'
             name="contactMe"
             >
                <input type="hidden" name="form-name" value='contactMe' />
            <p class="hidden">
            <label>
              Don’t fill this out if you’re human, like I am: <input name="bot-field" />
            </label>
          </p>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2' >
                    <div className='flex flex-col' >
                        <label className='uppercase text-sm py-2 dark:text-pink-100 ' >Name</label>
                        <input  className='border-2 rounded-lg p-3 flex border-gray-300 dark:shadow-lg dark:shadow-teal-400' 
                                 id="name"
                                 type="text" 
                                 name="name"
                                
                                />
                    </div>
                   
                </div>
                <div className='flex flex-col py-2' >
                        <label className='uppercase text-sm py-2 dark:text-pink-100  ' >Email</label>
                        <input  
                        className='border-2 rounded-lg p-3 flex border-gray-300 dark:shadow-lg dark:shadow-teal-400' 
                        type="email" 
                        id="email" 
                        name="email"
                    />
                </div>
                
                <div className='flex flex-col py-2' >
                        <label className='uppercase text-sm py-2  dark:text-pink-100  ' >Message</label>
                        <textarea className='border-2 rounded-lg border-gray-300 dark:shadow-lg dark:shadow-teal-400' 
                        rows='10'
                        id="message"
                        name="message"
               
                        ></textarea>
                </div>
                <button className=' w-full p-4 bg-pink-600 text-gray-100 mt-4' type='submit'>Send Message</button>
            </form>
        </div>
</div>


            </div>
            <div className='flex justify-center py-12' >
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-green-200 p-4 dark:shadow-2xl dark:shadow-pink-500 cursor-pointer hover:scal-110 ease-in duration-300' >
                        <HiOutlineChevronDoubleUp  className='text-[#5651e5] dark:invert'  size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
