import React from 'react';
import '../../../styles/loadingSpinner.css';
import ReactPortal from './components/reactPortal';

const LoadingSpinner = () => {
  return (
    <ReactPortal transparent={true}>
      <div className='absolute flex h-[100dvh] w-full items-center justify-center'>
        <div className='loadingspinner'>
          <div id='square1'></div>
          <div id='square2'></div>
          <div id='square3'></div>
          <div id='square4'></div>
          <div id='square5'></div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default LoadingSpinner;
