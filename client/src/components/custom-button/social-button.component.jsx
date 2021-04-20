import React from 'react';

const SocialButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className='w-full inline-flex justify-center py-2 px-4 border border-blue-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-blue-gray-500 hover:bg-blue-gray-50 focus:outline-none'
    >
      <span className='sr-only'>Sign in with {otherProps.social}</span>
      {children}
    </button>
  );
};

export default SocialButton;
