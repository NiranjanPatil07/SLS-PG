import React from 'react';
import { motion } from 'framer-motion';

const SuccessAlert = ({ title, subTitle }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
      className='absolute top-2 z-30 w-[96%]'
    >
      <div className='relative border-l-4 border-green-500 bg-green-100 p-3 text-green-700' role='alert'>
        <p className='text-base font-semibold'>{title}</p>
        <p className='text-sm font-light'>{subTitle}</p>
      </div>
    </motion.div>
  );
};

export default SuccessAlert;
