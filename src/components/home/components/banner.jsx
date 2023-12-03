import React from 'react';

const Banner = () => {
  return (
    <section class='relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat'>
      <div class='absolute inset-0 bg-white-900 sm:bg-transparent sm:bg-gradient-to-r sm:from-white-900/95 sm:to-white-900/25 '></div>

      <div class='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div class='max-w-xl text-center sm:text-left '>
          <h1 class='text-3xl font-extrabold sm:text-5xl'>
            Let us find your
            <strong class='block font-extrabold text-indigo-700'>Forever Home.</strong>
          </h1>

          <p class='mt-4 max-w-lg font-medium sm:text-xl/relaxed'>
            Seamless Living, Your Home Away from Home <br /> Paying Guest Comfort in Bangalore.
          </p>

          <div class='mt-8 flex flex-wrap gap-4 text-center'>
            <a
              href='#'
              class='block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white-900 shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto'
            >
              Get Started
            </a>

            <a
              href='#'
              class='block w-full rounded bg-white-900 px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
