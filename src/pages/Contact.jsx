import React, { useEffect, useRef, useState } from 'react';
import bg from '../../src/assets/item tandur/2 1.png';
import arrow from '../../src/assets/item tandur/arrow.svg';
import { motion } from 'framer-motion';

function Contact() {
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
    <div className='relative'>
      <img src={bg} alt="bg" className='h-[740px] w-full object-cover' />
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }} // Kondisi awal untuk elemen
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
        transition={{ duration: 0.6 }}
        className='absolute bottom-20 flex px-16 justify-between'> {/* Memindahkan className ke sini */}
        <p className='text-white text-5xl w-3/4'>
          Collaborate And Learn From Industry Experts and Enthusiasts.
        </p>
        <div className='flex py-3 px-4 rounded-full bg-white self-end items-center'>
          <p className='text-xl'>Join Community</p>
          <div className='ml-4 bg-[#8F9D68BF] rounded-full'>
            <img src={arrow} alt="arrow" className='p-2' />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
