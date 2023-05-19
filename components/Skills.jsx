import React from 'react'
import Image from 'next/image';

const Skills = () => {
  return (
  
<div id='skills' className='w-full lg:h-screen p-2' >
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center-h-full' >
        <p className='text-xl tracking-widest uppercase text-pink-400 dark:text-pink-500' >Skills</p>
        <h2 className='py-4' >What I Do</h2>
    </div>


        {/* <div className=' flex flex-wrap justify-center' >
    // </div>
    // </div>
            <div className=' flex flex-wrap' > */}

    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8' >
    
    
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/html5_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >HTML</h3>
                        </div>   
                    </div>
            
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/css3_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >CSS</h3>
                        </div>   
                    </div>
            
            </div>
        </div>    
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/js_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >JavaScript</h3>
                        </div>   
                    </div>
            
            </div>
        </div>    
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/react_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >React</h3>
                        </div>   
                    </div>
            
            </div>
        </div>    
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/sass_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >Sass</h3>
                        </div>   
                    </div>
            
            </div>
        </div>    
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/nodejs_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >NodeJS</h3>
                        </div>   
                    </div>
            
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/server_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >MongoDB</h3>
                        </div>   
                    </div>
            
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-lg  shadow-green-200 dark:shadow-2xl dark:shadow-pink-500' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                    <div className='m-auto' >
                            <div className='invert-svg flex justify-center' >
                                <Image className='dark:invert' src="/python_icon.svg" width={64} height={64} alt="html5" />
                    
                            </div>
                        <div className='flex flex-col items-center justify-center' >
                            <h3 className='dark:text-pink-100' >Python</h3>
                        </div>   
                    </div>
            
            </div>
        </div>            
        
    </div>
 


</div>
  )
}

export default Skills