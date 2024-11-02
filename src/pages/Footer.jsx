import React from 'react';
import icon from '../../src/assets/item tandur/icon.svg';

function Footer() {
  return (
    <div className="flex flex-col mt-20 h-96 relative bg-black">
      <div className="flex px-24 bg-blue-400 justify-between">
        <div className="basis-[47%]">
          <div className="flex mb-4">
            <img src={icon} alt="Tandur Icon" />
            <p className="ml-4 text-2xl">Tandur</p>
          </div>
          <p className="leading-5">
            Tandur is transforming agriculture by blending technology with sustainable practices. Using IoT,
            data, and smart solutions, we help farmers improve productivity, cut waste, and make smarter decisions, all for a greener, more secure food future.
          </p>
        </div>
        <div>
          <p className="text-2xl mb-4">Navigation</p>
          <div>
            <p>Product</p>
            <p>Benefit</p>
            <p>Contact Us</p>
            <p>Let's Talk</p>
          </div>
        </div>
        <div>
          <p className="text-2xl mb-4">Social Media</p>
          <div>
            <p>Instagram</p>
            <p>YouTube</p>
            <p>TikTok</p>
            <p>X</p>
          </div>
        </div>
        <div>
          <p className="text-2xl mb-4">Contact</p>
          <div>
            <p>tandurs@gmail.com</p>
            <p>+6234 4646 5565</p>
          </div>
        </div>
      </div>
     <div className='text-[33vw] bottom-0 absolute font-bold text-white'>Tandur</div>
    </div>
  );
}

export default Footer;
