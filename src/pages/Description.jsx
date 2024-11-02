import React, { useEffect, useRef, useState } from 'react';
import tractor from '../../src/assets/item tandur/tractor.svg';
import hand from '../../src/assets/item tandur/tangan.png';
import drop from '../../src/assets/item tandur/drop.svg';
import { motion } from 'framer-motion';

function Description() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observerInstance.unobserve(entry.target); // Stop observing after first intersect
        }
      });
    });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible]);

  return (
    <div className='flex my-20 justify-between' ref={sectionRef}>
      <div className='basis-1/2 flex flex-col justify-between'>
        <div>
          <motion.p 
            initial={{ x: -50, opacity: 0 }} // Kondisi awal teks kiri
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} // Kondisi saat animasi
            transition={{ duration: 0.6 }}
            className='text-7xl font-medium'>
            Improving Farming With New Ideas For The Future.
          </motion.p>
          <motion.p 
            initial={{ x: -50, opacity: 0 }} // Kondisi awal teks kiri
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} // Kondisi saat animasi
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-2xl mt-6'>
            We're all about shaking up modern agriculture with cool, sustainable practices to make the industry way greener and awesome for the future.
          </motion.p>
        </div>
        <motion.div
        initial={{ y: 50, opacity: 0 }} // Kondisi awal teks kiri
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
        transition={{ duration: 0.5, delay: 0.9 }}
        className='grid grid-cols-2 mt-8 icon '>
            <div className='flex space-y-4 flex-col items-start'>
                <div 
                
                className='bg-[#8F9D68] rounded-full w-fit p-3 '>
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
        </motion.div>
      </div>
      
      <motion.div
       initial={{ y: 50, opacity: 0 }} // Kondisi awal teks kiri
       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
       transition={{ duration: 0.5, delay: 0.8 }}
      >
        <img src={hand} alt="hand"  className='rounded-lg h-[690px] w-[560px] object-cover'/>
      </motion.div>
    </div>
  )
}

export default Description
