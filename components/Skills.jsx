import React from 'react'
import Image from 'next/image';

const Skills = () => {
  return (
  
<div className='w-full lg:h-screen p-2' >
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center-h-full' >
        <p className='text-xl tracking-widest uppercase text-[#5651e5]' >Skills</p>
        <h2 className='py-4' >What I Do</h2>
    </div>
    
        <div className=' flex flex-wrap justify-center' >
            <div className=' flex flex-wrap' >
                <div className='invert-svg flex justify-center' >
                        <Image src="/html5_icon.svg" width={64} height={64} alt="html5" />
                    <Image src="/css3_icon.svg" width={64} height={64} alt="css3" />
                    <Image src="/js_icon.svg" width={64} height={64} alt="javascript" />
                    <Image src="/react_icon.svg" width={64} height={64} alt="react" />
                    <Image src="/sass_icon.svg" width={64} height={64} alt="sass" />
                    <Image src="/nodejs_icon.svg" width={64} height={64} alt="nodejs" />
                    <Image src="/server_icon.svg" width={64} height={64} alt="mongodb" />
                    <Image src="/python_icon.svg" width={64} height={64} alt="python" />  
                </div>   
            </div>
        </div>  
</div>

  )
}

export default Skills