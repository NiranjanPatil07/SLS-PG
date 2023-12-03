import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ErrorAlert = ({ title, subTitle }) => {
  const [alertVisible, setAlertVisible] = useState(true);

  return (
    alertVisible && (
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        className='absolute top-2 w-[96%]'
      >
        <div className='relative border-l-4 border-red-500 bg-red-100 p-3 text-red-700' role='alert'>
          <p className='text-base font-semibold'>{title}</p>
          <p className='text-sm font-light'>{subTitle}</p>
          <button
            type='button'
            className='absolute right-2 top-2 -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent p-1.5 text-red-500 hover:bg-red-200 focus:ring-2 focus:ring-red-400'
            data-dismiss-target='#alert-border-2'
            aria-label='Close'
            onClick={() => setAlertVisible(false)}
          >
            <span className='sr-only'>Dismiss</span>
            <svg className='h-3 w-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                strokeWidth='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
          </button>
        </div>
      </motion.div>
    )
  );
};

export default ErrorAlert;
