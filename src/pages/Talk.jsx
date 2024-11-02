import React from 'react'
import drop from '../../src/assets/item tandur/halaman.png'
import icon from '../../src/assets/item tandur/arrow.svg'

function Talk() {
  return (
    <div className='w-full h-[632px] relative'>
        <img src={drop} alt="halaman" className='w-full h-[632px]'/>
        <div className=' absolute  top-10 left-20 bottom-20 right-20 text-white flex'>
            <div className='text-6xl font-semibold  basis-2/3'>GET IN TOUCH</div>
            <div className='flex flex-col justify-end basis-full'>
                <div className=' mb-20'>
                    <div className='text-4xl w-[40%] text-start mb-6'>Be a Part of the Global Movement</div>
                    <p className='w-8/12 text-[24px] font-light'>By Choosing Transforming Agriculture you can help 
                    and support innovate solutions that benefit our planet</p>
                </div>
                <div className='bg-white p-2 w-fit text-black rounded-full flex space-x-4 items-center'>
                    <p>Let's Talk</p>
                    <img src={icon} alt="panah" className='bg-[#8F9D68] p-2 rounded-full ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Talk
