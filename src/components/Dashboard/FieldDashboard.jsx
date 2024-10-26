import React from 'react'
import botani from '../../assets/item tandur/field.png'

function FieldDashboard() {
  return (
    <div className='mt-24 mb-40 '>
      <div className='flex flex-row justify-around h-[158px] mb-14'>
        <p className='text-5xl font-semibold basis-[60%]'>Transforming Agriculture with Cutting-Edge Innovation.</p>
        <p className='basis-[40%] leading-4 font-medium self-end text-base'>Tandur is transforming agriculture by blending technology with sustainable practices. Using IoT, data, 
            and smart solutions, we help farmers improve productivity, 
            cut waste, and make smarter decisions, all for a greener, more secure food future.</p>
      </div>
      <div className='relative'>
        <img src={botani} alt="botani"  />
        {/* <p className='absolute text-white font-bold'>Tandur</p> */}
      </div>
    </div>
  )
}

export default FieldDashboard
