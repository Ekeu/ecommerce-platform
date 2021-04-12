import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      {label && (
        <label className='block text-sm font-medium text-blue-gray-700 font-hind'>
          {label}
        </label>
      )}
      <div className='mt-1'>
        <input
          {...otherProps}
          onChange={handleChange}
          className='appearance-none block w-full px-3 py-2 border border-blue-gray-300 rounded-md shadow-sm placeholder-blue-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm font-hind'
        />
      </div>
    </>
  );
};

export default FormInput;
