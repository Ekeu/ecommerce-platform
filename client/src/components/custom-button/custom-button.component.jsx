import React from 'react';

const CustomButton = ({ children, custom, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${
        custom
          ? custom
          : 'border-transparent text-white bg-gradient-to-r from-rose-500 to-red-500'
      } w-full flex justify-center py-3 px-5 border rounded-md shadow-sm text-base font-medium focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
