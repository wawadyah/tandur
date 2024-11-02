import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import NavbarProduct from '../components/Product/NavbarProduct';
import BodyProduct from '../components/Product/BodyProduct';

function Product() {
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
    <div className='mt-40 mb-20'>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: -50 }} // Kondisi awal untuk Navbar
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Kondisi saat animasi
        transition={{ duration: 0.8 }}>
        <NavbarProduct />
      </motion.div>
      
      <div>
        <BodyProduct sectionRef={sectionRef} isVisible={isVisible} />
      </div>
    </div>
  );
}

export default Product;
