import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className='relative min-h-screen bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-white-900/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white-900/95 sm:to-white-900/25 rtl:sm:bg-gradient-to-l'></div>

      <div className='relative mx-auto flex h-screen max-w-screen-xl items-center justify-center px-4 py-32 sm:px-6 md:justify-start lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          className='max-w-xl text-center sm:text-left rtl:sm:text-right'
        >
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Let us find your
            <strong className='block font-extrabold text-indigo-700'> Forever Home. </strong>
          </h1>

          <p className='mt-4 max-w-lg sm:text-xl/relaxed'>
            Seamless Living, Your Home Away from Home <br /> Paying Guest Comfort in Bangalore.
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <a
              href='#'
              className='block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white-900 shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto'
            >
              Get Started
            </a>

            <a
              href='#'
              className='block w-full rounded bg-white-900 px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto'
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
