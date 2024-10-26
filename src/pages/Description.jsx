import React from 'react'
import tractor from '../../src/assets/item tandur/tractor.svg'
import hand from '../../src/assets/item tandur/tangan.png'
import drop from '../../src/assets/item tandur/drop.svg'

function Description() {
  return (
    <div className='flex my-20 justify-between'>
      <div className='basis-1/2 flex flex-col justify-between'>
        <div>
            <p className='text-7xl  font-medium'>
            Improving Farming With New Ideas For The Future.
            </p>
            <p className='text-2xl mt-6'>
            We're all about shaking up 
            modern agriculture with cool, sustainable practices to make the industry way greener and awesome for the future.
            </p>
        </div>
        <div className='grid grid-cols-2 mt-8 icon '>
            <div className='flex space-y-4 flex-col items-start'>
                <div className='bg-[#8F9D68] rounded-full w-fit p-3 '>
                    <img src={tractor} alt="tractor" />
                </div>
                <p className='text-4xl'>50%</p>
                <p className='text-2xl'>Increase in Crop Yield with Tandur’s Sustainable Solutions.</p>
            </div>

            <div className='flex space-y-4 flex-col items-start'>
                <div className='bg-[#8F9D68] rounded-full w-fit p-3 '>
                    <img src={drop} alt="tractor" />
                </div>
                <p className='text-4xl'>45%</p>
                <p className='text-2xl'>Increase in Crop Yield with Tandur’s Sustainable Solutions.</p>
            </div>
        </div>
      </div>

      <div>
        <img src={hand} alt="hand"  className='rounded-lg h-[690px] w-[560px] object-cover'/>
      </div>
    </div>
  )
}

export default Description
