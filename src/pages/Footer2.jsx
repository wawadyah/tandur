import React from 'react';
import icon from '../../src/assets/item tandur/iconblack.svg';
import arrow from '../../src/assets/item tandur/arrow.svg';

function Footer2({ scrollToSection, sectionRefs }) {
  return (
    <div className='relative h-full flex flex-col justify-between'>
      <div className="flex px-24 justify-between text-black mt-20">
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
            <p onClick={() => scrollToSection(sectionRefs.section1Ref)}>Product</p>
            <p onClick={() => scrollToSection(sectionRefs.section2Ref)}>Benefit</p>
            <p onClick={() => scrollToSection(sectionRefs.section3Ref)}>Contact Us</p>
            <p onClick={() => scrollToSection(sectionRefs.section3Ref)}>Let's Talk</p>
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
      <div className='text-white p-4 absolute right-20 bottom-40 bg-[#8F9D68BF] flex justify-center items-center rounded-full'>
        <p className='font-bold text-xl'>Back to top</p>
        <div className='ml-4 bg-black rounded-full cursor-pointer hover:bg-gray-800' 
          onClick={() => scrollToSection(sectionRefs.sectionDashboardRef)} 
        >
          <img src={arrow} alt="arrow" className='p-2 -rotate-90 ' />
        </div>
      </div>
      <div className='font-bold text-[33vw] leading-none tracking-tighter'>
        Tandur
      </div>
    </div>
  );
}

export default Footer2;
