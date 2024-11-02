import React from 'react'
import { motion } from 'framer-motion'

function BenefitBody({isVisible, sectionRef}) {
  return (
    <div className='mt-20 text-white'>
      <motion.p 
      ref={sectionRef}
      initial={{ x: -50, opacity: 0 }} // Kondisi awal teks kiri
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} // Kondisi saat animasi
      transition={{ duration: 0.5 }}
      className='text-4xl w-2/3'>
        Innovative Modern Agriculture Solutions For Achieving Optimal Crop Growth And Yield.
      </motion.p>
      <motion.p
      ref={sectionRef}
       initial={{ x: -50, opacity: 0 }} // Kondisi awal teks kiri
       animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} // Kondisi saat animasi
       transition={{ duration: 0.5, delay: 0.2 }}
      className='w-2/5 my-10'>We provide cutting-edge services to help farmers maximize crop yields. 
        Our precision farming, crop monitoring, and automation solutions aim to revolutionize agriculture.
        </motion.p>
        
    </div>
  )
}

export default BenefitBody
