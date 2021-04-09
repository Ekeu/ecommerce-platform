import React from 'react';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-red-500 focus:outline-none'
    >
      {children}
    </button>
  );
};

export default CustomButton;
