import React from 'react';

const InputField = (props) => {
  const error = props?.error;

  return (
    <div className='relative w-full'>
      <label
        className={`mb-2 block text-sm font-medium text-black-700 ${error ? 'text-red-500' : ''}  ${props?.disable ? 'text-gray-500' : ''}`}
        htmlFor={props?.label}
      >
        {props?.label}
      </label>
      <input
        id={props?.label}
        type={props?.type ? props?.type : 'text'}
        value={props?.value}
        name={props?.label}
        placeholder={props?.disable ? props?.placeholder : props?.label}
        onChange={(e) => props?.changeText(e.target.value)}
        className={`block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-black-800 outline-none ${
          error ? 'border-red-500' : ''
        } ${props?.disable ? 'text-gray-500' : ''}`}
        autoComplete='off'
        disabled={props?.disable ? true : false}
      />
      {error ? <span className='absolute ml-2 text-xs text-red-500'>{error}</span> : null}
    </div>
  );
};

export default InputField;
