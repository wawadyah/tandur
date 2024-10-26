import React from 'react'

function NavbarProduct() {
  return (
    <div>
      <div className='text-2xl flex justify-between border-solid border-b-2 pb-2'>
        <div className='relative ml-4 '>
            <span className='absolute -left-4 text-sm '>01</span>
            <div className='font-bold'>Product</div>
        </div>
        <p>Tandur</p>
        <p>2024</p>
      </div>
    </div>
  )
}

export default NavbarProduct
