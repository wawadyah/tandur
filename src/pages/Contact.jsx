import React from 'react'
import bg from '../../src/assets/item tandur/2 1.png'
import arrow from '../../src/assets/item tandur/arrow.svg'

function Contact() {
  return (
    <div className='relative '>
        <img src={bg} alt="bg" className='h-[740px] w-full object-cover' /> 
        <div className='absolute bottom-20 flex px-16 justify-between'>
            <p className='text-white text-5xl w-3/4'>
            Collaborate And Learn From Industry Experts and Enthusiasts.
            </p>
            <div className=' flex py-3 px-4 rounded-full bg-white self-end items-center'>
                <p className='text-xl'>Join Community</p>
                <div className='ml-4 bg-[#8F9D68BF] rounded-full'>
                    <img src={arrow} alt="arrow" className='p-2' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
