import React from 'react'
import { FaLinkedinIn, FaGithub  } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import { useState } from 'react';


function Contact(props) {
    const getNewState = () => ({
        name: '',    
        email: '',
        message: '',
    });

    const encode = ({name, email, message}) => {
        return `form-name=contact&name=${encodeURIComponent(name)}
        &email=${encodeURIComponent(email)}
        &message=${encodeURIComponent(message)}`
        
    };

    const[formState, setFormState] = useState(getNewState())

    const handleChange = (event) => {
        setFormState({

            ...formState,
            [event.target.name]: event.target.value
        }
    )
    };
    const handleSubmit = async(event) => {

        event.preventDefault();
        await fetch ('/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        })
        // console.log('work')
      
        // setFormState(getNewState());
        window.location.href = '/Success';
    };
    const { name, email, message } = formState;

    <p class="hidden">
    <label>
      Don’t fill this out if you’re human, like I am: <input name="bot-field" />
    </label>
  </p>

  return (
    <div className='w-full lg:g-screen' >
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full ' > 
            <p className='text-xl tracking-widest uppercase text-[]  ' >
                Contact
            </p>
            <h2 className='py-4' >Human to Human Contact, it's What We Crave</h2>
            <div className='grid lg:grid-cols-5 gap-8' >
{/* left */}
<div id='contact' className='col-span-3 
                lg:col-span-2 w-full h-full 
                shadow-xl shadow-pink-200 
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
         shadow-pink-200 p-6 cursor-pointer 
         hover:scal-110 ease-in duration-300' >
                        <FaLinkedinIn />
                    </div>
                    <div  className='rounded-full 
                            shadow-lg shadow-pink-200 p-6 
                            cursor-pointer hover:scal-110 ease-in duration-300' >
                        <FaGithub />
                    </div>
        </div>
    </div>
    </div>
</div>
{/* right */}

<div className='col-span-3 
        w-full h-auto shadow-xl shadow-green-200 
        rounded-xl lg:p-4' >
    <div className='p-4' >

            <form  
             onSubmit={handleSubmit} 
             data-netlify="true"
             data-netlify-recaptcha="true"
             netlify-honeypot="bot-field"
             action='/success'
             name="contactMe"
             >
                <input type="hidden" name="form-name" value='contactMe' />
                <div className='grid md:grid-cols-2 gap-4 w-full py-2' >
                    <div className='flex flex-col' >
                        <label className='uppercase text-sm py-2' >Name</label>
                        <input  className='border-2 rounded-lg p-3 flex border-gray-300' 
                                 id="name"
                                 type="text" 
                                 name="name"
                                 onChange={handleChange} 
                                 value={name}
                                />
                    </div>
                   
                </div>
                <div className='flex flex-col py-2' >
                        <label className='uppercase text-sm py-2' >Email</label>
                        <input  
                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={handleChange} 
                        value={email}/>
                </div>
                
                <div className='flex flex-col py-2' >
                        <label className='uppercase text-sm py-2' >Message</label>
                        <textarea className='border-2 rounded-lg border-gray-300' 
                        rows='10'
                        id="message"
                        name="message"
                        onChange={handleChange} 
                        value={message} ></textarea>
                </div>
                <button className=' w-full p-4 text-gray-100 mt-4' >Send Message</button>
            </form>
        </div>
</div>


            </div>
            <div className='flex justify-center py-12' >
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scal-110 ease-in duration-300' >
                        <HiOutlineChevronDoubleUp  className='text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
