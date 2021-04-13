import React from 'react';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className='w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-rose-500 to-red-500 focus:outline-none'
    >
      {children}
    </button>
  );
};

export default CustomButton;
