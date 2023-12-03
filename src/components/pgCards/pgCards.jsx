import React from 'react';
import { CONFIG } from '../../config/config';

const PgCards = () => {
  const AVAILABLE_PG = CONFIG?.PG_OPTIONS;
  return (
    <div className='main-container'>
      <header className='p-4'>
        <h2 class='text-xl font-bold text-gray-900 sm:text-3xl'>Available PG</h2>

        <p class='mt-4 max-w-md text-gray-500'>
          Discover comfort and convenience in Bangalore's PGs. From shared spaces to private retreats, find your ideal stay with ease
        </p>
      </header>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {AVAILABLE_PG?.map((item) => {
          return (
            <a href='#' className='block rounded-xl bg-white-900 p-4 shadow-lg '>
              <img
                alt='Home'
                src='https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                className='h-56 w-full rounded-md object-cover'
              />

              <div className='mt-2'>
                <dl>
                  <div>
                    <dt className='sr-only'>Price</dt>

                    <dd className='text-sm text-gray-500'>{item?.price}</dd>
                  </div>

                  <div>
                    <dt className='sr-only'>Address</dt>

                    <dd className='font-medium'>{item?.address}</dd>
                  </div>
                </dl>

                <div className='mt-6 flex items-center gap-8 text-xs'>
                  <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                    <svg
                      className='h-4 w-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                      />
                    </svg>

                    <div className='mt-1.5 sm:mt-0'>
                      <p className='text-gray-500'>Parking</p>

                      <p className='font-medium'>{item?.parkingSpace}</p>
                    </div>
                  </div>

                  <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                    <svg
                      className='h-4 w-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                      />
                    </svg>

                    <div className='mt-1.5 sm:mt-0'>
                      <p className='text-gray-500'>Cupboard</p>

                      <p className='font-medium'>Provided</p>
                    </div>
                  </div>

                  <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                    <svg
                      className='h-4 w-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>

                    <div className='mt-1.5 sm:mt-0'>
                      <p className='text-gray-500'>Bedroom</p>

                      <p className='font-medium'>{item?.bedroom}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PgCards;
