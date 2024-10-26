import React from 'react'
import drone from '../../assets/item tandur/drone3.png'
import globe from '../../assets/item tandur/globe.svg'
import lotus from '../../assets/item tandur/flowerlotus.svg'
import droneicon from '../../assets/item tandur/droneicon.svg'
import leaf from '../../assets/item tandur/leaf.svg'

function BodyProduct() {
  return (
    <div>
        <div className='mt-16 text-4xl w-[80%]'>
            <p>Explore Tandur's innovative technology that is revolutionizing farming practices and shaping 
                the future of food production.</p>
        </div>
        <div className='grid grid-cols-2 mt-10 '>
            <img src={drone} alt="drone" />
            <div className='grid grid-cols-2 gap-4'>
                <div className='border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                hover:bg-black cursor-pointer hover:text-white hover:border-none hover:rounded-lg'>
                    <div>
                        <p className='text-xl font-medium mb-2'>IoT Technology Irrigation</p>
                        <img src={globe} alt="globe" />
                    </div>
                    <div className=''>
                        <p>[View Detail]</p>
                    </div>
                </div>
                <div className='border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                 hover:bg-black cursor-pointer hover:text-white hover:border-none hover:rounded-lg'>
                    <div>
                        <p className='text-lg font-medium mb-2'>Organic Fertilizer</p>
                        <img src={lotus} alt="globe" classname="hover:text-white" />
                    </div>
                    <div className=''>
                        <p>[View Detail]</p>
                    </div>
                </div>
                <div className='border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                 hover:bg-black cursor-pointer hover:text-white hover:border-none hover:rounded-lg'>
                    <div>
                        <p className='text-lg font-medium mb-2'>Eco Friendly Technology</p>
                        <img src={leaf} alt="globe" classname="hover:text-white" />
                    </div>
                    <div className=''>
                        <p>[View Detail]</p>
                    </div>
                </div>
                <div className='border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                 hover:bg-black cursor-pointer hover:text-white hover:border-none hover:rounded-lg'>
                    <div>
                        <p className='text-lg font-medium mb-2'>Agriculturtal Monitoring</p>
                        <img src={droneicon} alt="globe" classname="hover:text-white" />
                    </div>
                    <div className=''>
                        <p>[View Detail]</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BodyProduct
