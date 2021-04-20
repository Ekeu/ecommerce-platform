import React from 'react';
import Hot from '../../assets/hot-nigga.svg';
import CustomButton from '../custom-button/custom-button.component';

const Hero = () => {
  return (
    <div className='bg-white font-hind'>
      <main>
        <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48'>
          <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24'>
            <div>
              <div>
                <img className='h-11 w-auto' src={Hot} alt='Hot Niggga' />
              </div>
              <div className='mt-20'>
                <div>
                  <a
                    href='https://github.com/Ekeu/ecommerce-platform'
                    className='inline-flex space-x-4'
                    target='blank'
                  >
                    <span className='rounded bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-500 tracking-wide uppercase'>
                      Test Platform
                    </span>
                    <span className='inline-flex items-center text-sm font-medium text-red-500 space-x-1'>
                      <span>Github repository</span>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        ariaHidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='mt-6 sm:max-w-xl'>
                  <h1 className='text-5xl font-extrabold font-poppins text-blue-gray-900 tracking-tight sm:text-6xl'>
                    Welcome to Hot Shopping
                  </h1>
                  <p className='mt-6 text-xl text-blue-gray-500'>
                    Hot shopping is a testing and learning platform for all
                    developers working on e-commerce projects
                  </p>
                </div>
                <div className='mt-12 sm:max-w-lg sm:w-full sm:flex'>
                  <div className='mt-4 sm:mt-0'>
                    <CustomButton type='submit'>Get started</CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
            <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
              <div className='hidden sm:block'>
                <div className='absolute inset-y-0 left-1/2 w-screen bg-blue-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full'></div>
                <svg
                  className='absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0'
                  width='404'
                  height='392'
                  fill='none'
                  viewBox='0 0 404 392'
                >
                  <defs>
                    <pattern
                      id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='392'
                    fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
                  />
                </svg>
              </div>
              <div className='relative z-0 pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
                <img
                  className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                  src='https://res.cloudinary.com/dmcookpro/image/upload/v1618302170/portrait-beautiful-woman-shopping-time_bhqvth.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
