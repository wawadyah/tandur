import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import botani from '../../assets/item tandur/field.png';

const FieldDashboard = () => {
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
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Kondisi awal untuk seluruh bagian
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
      transition={{ duration: 0.5 }} // Durasi transisi
      className='mt-24 mb-40'>
      
      <div className='flex flex-row justify-around h-[158px] mb-14'>
        {/* Teks Kiri */}
        <motion.p
          initial={{ x: -50, opacity: 0 }} // Kondisi awal teks kiri
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} // Kondisi saat animasi
          transition={{ duration: 0.5 }} 
          className='text-5xl font-semibold basis-[60%]'>
          Transforming Agriculture with Cutting-Edge Innovation.
        </motion.p>

        {/* Teks Kanan */}
        <motion.p 
          initial={{ x: 50, opacity: 0 }} // Kondisi awal teks kanan
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }} // Kondisi saat animasi
          transition={{ duration: 0.5 }} 
          className='basis-[40%] leading-4 font-medium self-end text-base'>
          Tandur is transforming agriculture by blending technology with sustainable practices. Using IoT, data, 
          and smart solutions, we help farmers improve productivity, 
          cut waste, and make smarter decisions, all for a greener, more secure food future.
        </motion.p>
      </div>

      {/* Gambar dengan animasi dari bawah */}
      <motion.div
        initial={{ y: 50, opacity: 0 }} // Kondisi awal untuk gambar
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
        transition={{ duration: 0.5 }} 
        className='relative'>
        <img src={botani} alt="botani" />
        {/* <p className='absolute text-white font-bold'>Tandur</p> */}
      </motion.div>
    </motion.div>
  );
}

export default FieldDashboard;
