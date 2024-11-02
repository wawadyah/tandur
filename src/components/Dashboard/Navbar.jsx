import React from 'react';
import icon from '../../assets/item tandur/icon.svg';

function Navbar({ activeSection, scrollToSection, sectionRefs }) {
  return (
    <div className="p-3 rounded-full bg-gradient-to-b from-[#8F9D68BF] to-[#bbc995bf] flex justify-between">
      {/* Logo */}
      <div className="text-white flex items-center text-2xl ml-2">
        <img src={icon} alt="icon" className='mr-2' />
        <p>Tandur</p>
      </div>
      
      {/* Navigation Links */}
      <div className="text-white flex space-x-4 items-center text-xl font-400">
        <p 
          onClick={() => scrollToSection(sectionRefs.section1Ref)} 
          className={`${activeSection === 'section1' ? 'text-gray-300 font-bold' : ''} cursor-pointer`}>
          Product
        </p>
        <span>/</span>
        <p 
          onClick={() => scrollToSection(sectionRefs.section2Ref)} 
          className={`${activeSection === 'section2' ? 'text-gray-300 font-bold' : ''} cursor-pointer`}>
          Benefit
        </p>
        <span>/</span>
        <p 
          onClick={() => scrollToSection(sectionRefs.section3Ref)} 
          className={`${activeSection === 'section3' ? 'text-gray-300 font-bold' : ''} cursor-pointer`}>
          Contact Us
        </p>
        <div className="bg-white text-black rounded-3xl py-2 px-4">Let's Talk</div>
      </div>
    </div>
  );
}

export default Navbar;
