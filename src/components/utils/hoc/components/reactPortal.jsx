import React from 'react';
import { createPortal } from 'react-dom';

const ReactPortal = ({ children, transparent }) => {
  return createPortal(
    <div
      className={`fixed top-0 z-[100] flex h-full w-full items-center justify-center overflow-auto backdrop-blur-sm ${
        transparent ? 'bg-transparent ' : 'bg-[rgba(31,31,31,0.4)]'
      }`}
    >
      {children}
    </div>,
    document.getElementById('portal-root'),
  );
};

export default ReactPortal;
