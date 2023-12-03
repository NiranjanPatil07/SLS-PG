import React from 'react';
import Banner from './components/banner';
import PgCards from '../pgCards/pgCards';
import Reviews from '../reviews/reviews';
import Registration from '../registration/registration';
import { motion, useScroll } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <div className=''>
        <Banner />
        <PgCards />
        <Reviews />
        <Registration />
      </div>
    </>
  );
};

export default Home;
