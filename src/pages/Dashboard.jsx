import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import FieldDashboard from '../components/Dashboard/FieldDashboard';
import Product from './Product';
import Benefit from './Benefit';
import Contact from './Contact';
import Description from './Description';
import Talk from './Talk';
import Footer2 from './Footer2';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('');
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const sectionDashboardRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5 // 50% elemen terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe setiap section yang ingin dideteksi
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    // Bersihkan observer saat komponen tidak digunakan
    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
    };
  }, []);

  return (
    <div className='relative'>
      {/* Navbar tetap di atas dengan posisi fixed */}
     <div className='z-50'>
     <div className='flex justify-center'>
        <div className={`fixed top-2 px-16 z-50 ${activeSection !== 'section1' ? 'w-2/3' : 'w-full'} transition-all duration-800 ease-in-out`}>
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} sectionRefs={{ section1Ref, section2Ref, section3Ref }} />
        </div>
      </div>
      {/* Tambahkan padding top untuk memberi ruang di bawah navbar */}
      <div className='mt-40 px-16'>
        {/* Section 1 */}
        <div ref={sectionDashboardRef}>
          <FieldDashboard />
        </div>
        <div id='section1' ref={section1Ref}>
          <Product />
        </div>
      </div>
      
      {/* Section 3 */}
      <div id="section2" ref={section2Ref}>
        <Benefit />
      </div>
      
      <div className='px-16'>
        <Description />
      </div>
      
      <div id="section3" ref={section3Ref}>
        <Talk />
      </div>
     </div>
     <Footer2 scrollToSection={scrollToSection} sectionRefs={{  sectionDashboardRef }} />
    </div>
  );
}

export default Dashboard;
