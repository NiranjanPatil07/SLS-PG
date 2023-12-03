import React from 'react';

const AppListSkeleton = () => {
  return Array(4)
    ?.fill()
    ?.map((item, index) => (
      <div className='h-full w-[318px] rounded-md border-2 border-gray-200 p-[39px]' key={index}>
        <div className='flex h-full animate-pulse  space-x-5'>
          <div className='flex flex-col space-y-4 '>
            <div className='mb-2 h-3 w-36 rounded-md bg-gray-300'></div>
            <div className='mb-10 h-2 w-20 rounded-md bg-gray-300'></div>
            <div className='mb-4 h-6 w-36 rounded-md bg-gray-300'></div>
            <div className='h-6 w-24 rounded-md bg-gray-300 '></div>
            <div className='mb-2 h-3 w-52 rounded-md bg-gray-300'></div>
            <div className='mb-2 h-3 w-52 rounded-md bg-gray-300'></div>
            <div className='mb-2 h-3 w-52 rounded-md bg-gray-300'></div>
            <div className='mb-2 h-3 w-52 rounded-md bg-gray-300'></div>
          </div>
        </div>
      </div>
    ));
};

export default AppListSkeleton;
