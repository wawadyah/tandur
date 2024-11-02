import React, { useEffect, useRef, useState } from 'react';
import NavbarBenefit from '../components/Benefit/NavbarBenefit'
import BenefitBody from '../components/Benefit/BenefitBody'
import BenefitCard from '../components/Benefit/BenefitCard'
import { motion } from 'framer-motion'

function Benefit() {
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
    <div className='bg-[#2A2A2A] w-full py-20 px-16'>
      <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: -50 }} // Kondisi awal untuk Navbar
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Kondisi saat animasi
      transition={{ duration: 0.5 }}>
        <NavbarBenefit/>
      </motion.div>
      <BenefitBody isVisible={isVisible} sectionRef={sectionRef} />
      <BenefitCard isVisible={isVisible} sectionRef={sectionRef}/>
    </div>
  )
}

export default Benefit
