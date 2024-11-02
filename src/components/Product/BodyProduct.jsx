import React from 'react';
import drone from '../../assets/item tandur/drone3.png';
import globe from '../../assets/item tandur/globe.svg';
import globewhite from '../../assets/item tandur/globe-simple-white.svg';
import lotus from '../../assets/item tandur/flowerlotus.svg';
import lotuswhite from '../../assets/item tandur/flower-lotus-white.svg';
import droneicon from '../../assets/item tandur/droneblack.svg';
import dronewhite from '../../assets/item tandur/drone-white.svg';
import leaf from '../../assets/item tandur/leaf.svg';
import leafwhite from '../../assets/item tandur/leaf-white.svg';
import { motion } from 'framer-motion';

function BodyProduct({ isVisible }) {
  return (
    <div>
      <motion.div
        initial={{ x: -50, opacity: 0 }} // Kondisi awal teks kiri
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} // Kondisi saat animasi
        transition={{ duration: 0.8 }}
        className="mt-16 text-4xl w-[80%]"
      >
        <p>
          Explore Tandur's innovative technology that is revolutionizing farming practices and shaping the future of food production.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 mt-10">
        <motion.img
          key="drone-image"
          initial={{ y: 50, opacity: 0 }} // Kondisi awal untuk gambar
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
          transition={{ duration: 0.8 }}
          src={drone}
          alt="drone"
        />
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }} // Kondisi awal untuk gambar
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                hover:bg-black cursor-pointer group hover:text-white hover:rounded-lg"
          >
            <div>
              <p className="text-xl font-medium mb-2">IoT Technology Irrigation</p>
              <img src={globe} alt="globe" className="group-hover:hidden" />
              <img src={globewhite} alt="globe white" className="hidden group-hover:block text-[32px]" />
            </div>
            <div>
              <p>[View Detail]</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }} // Kondisi awal untuk gambar
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                 hover:bg-black cursor-pointer group hover:text-white hover:rounded-lg"
          >
            <div>
              <p className="text-lg font-medium mb-2">Organic Fertilizer</p>
              <img src={lotus} alt="lotus" className="group-hover:hidden" />
              <img src={lotuswhite} alt="lotus white" className="hidden group-hover:block text-[32px]" />
            </div>
            <div>
              <p>[View Detail]</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Kondisi awal untuk gambar
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                 hover:bg-black cursor-pointer hover:text-white group hover:rounded-lg"
          >
            <div>
              <p className="text-lg font-medium mb-2">Eco Friendly Technology</p>
              <img src={leaf} alt="leaf" className="group-hover:hidden" />
              <img src={leafwhite} alt="leaf white" className="hidden group-hover:block text-[32px]" />
            </div>
            <div>
              <p>[View Detail]</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Kondisi awal untuk gambar
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Kondisi saat animasi
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t-[1px] border-solid border-t-black py-4 px-2 flex flex-col justify-between
                 hover:bg-black cursor-pointer hover:text-white group hover:rounded-lg"
          >
            <div>
              <p className="text-lg font-medium mb-2">Agricultural Monitoring</p>
              <img src={droneicon} alt="drone icon" className="group-hover:hidden" />
              <img src={dronewhite} alt="drone white" className="hidden group-hover:block text-[32px]" />
            </div>
            <div>
              <p>[View Detail]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BodyProduct;
