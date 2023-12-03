import React from 'react';
import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

const PasswordField = (props) => {
  const error = props?.error;
  const [hiddenText, setHiddenText] = useState(true);

  return (
    <div className='m-b-sm input-field-wrapper-position-relative'>
      <label className={`input-field-label ${error ? 'error' : ''} `} htmlFor={props?.label}>
        {props?.label}
      </label>
      <div className={`input-field-wrapper ${error ? 'background-error' : ''} relative`}>
        <div>
          <input
            id={props?.label}
            type={hiddenText ? 'password' : 'text'}
            value={props?.value}
            name={props?.label}
            placeholder='Enter password'
            onChange={(e) => props?.changeText(e.target.value)}
            className={`input-field-text ${error ? 'background-error' : ''}`}
            autoComplete={props?.newPassword ? 'new-password' : 'on'}
            disabled={props?.disable ? true : false}
          />
        </div>
        {props?.disable ? null : (
          <div>
            {hiddenText ? (
              <Eye size='17' color={'#6E7079'} className='dropdown-icons' onClick={() => setHiddenText(!hiddenText)} role={'button'} />
            ) : (
              <EyeOff size='17' color={'#6E7079'} className='dropdown-icons' onClick={() => setHiddenText(!hiddenText)} role={'button'} />
            )}
          </div>
        )}
      </div>
      {error ? <span className='input-field-text-error'>{error}</span> : null}
    </div>
  );
};

export default PasswordField;
