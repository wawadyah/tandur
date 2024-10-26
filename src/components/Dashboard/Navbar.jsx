import React from 'react'
import icon from '../../assets/item tandur/icon.svg'

function Navbar() {
  return (
    <div className="sticky top-2 w-full p-3  rounded-full bg-gradient-to-b from-[#8F9D68BF] to-[#bbc995bf] flex 
    justify-between z-50">
        <div className="text-white flex items-center text-2xl ml-2">
            <img src={icon} alt="icon" className='mr-2' />
            <p>Tandur</p>
        </div>
        <div className="text-white flex space-x-4 items-center text-xl font-400">
            <p>Product</p>
            <span>/</span>
            <p>Benefit</p>
            <span>/</span>
            <p>Contact Us</p>
            <div className='bg-white text-black rounded-3xl py-2 px-4'>Let's Talk</div>
        </div>

    </div>
  )
}

export default Navbar
