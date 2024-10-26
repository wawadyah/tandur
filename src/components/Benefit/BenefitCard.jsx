import React from 'react'
import card1 from '../../assets/item tandur/sawah.png'
import card2 from '../../assets/item tandur/drone1.png'
import card3 from '../../assets/item tandur/termometer.png'

function BenefitCard() {
  return (
    <div className='grid grid-cols-3 gap-4 text-white'>
        <div>
            <img src={card1} alt="halaman" className='h-[450px] w-full rounded-lg object-cover ' />
            <div className=''>
                <p className='font-semibold text-2xl my-4'>
                Precision Farming
                </p>
                <p>
                Agricultural techniques that use advanced technology to optimize all farming operations. This can include the 
                use of sensors, drones, and data analytics to manage the use of fertilizers, water, and pesticides more efficiently.
                </p>
            </div>
        </div>

        <div>
            <img src={card2} alt="halaman" className='h-[450px] w-full rounded-lg object-cover' />
            <div className=''>
                <p className='font-semibold text-2xl my-4'>
                Crop Monitoring
                </p>
                <p>
                Monitoring crop health and growth in real-time using technologies such as drones, 
                satellite imagery, and soil sensors. This allows farmers to detect problems early and take appropriate action.
                </p>
            </div>
        </div>

        <div>
            <img src={card3} alt="halaman" className='h-[450px] w-full rounded-lg object-cover' />
            <div className=''>
                <p className='font-semibold text-2xl my-4'>
                Automation Solutions
                </p>
                <p>
                Optimizing agriculture with advanced automation to increase 
                efficiency and productivity. An example is the use of IoT for planting, harvesting, and other agricultural tasks.
                </p>
            </div>
        </div>
    </div>
  )
}

export default BenefitCard
