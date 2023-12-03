import React from 'react';
import Banner from './components/banner';
import PgCards from '../pgCards/pgCards';
import Reviews from '../reviews/reviews';
import Registration from '../registration/registration';

const Home = () => {
  return (
    <>
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
