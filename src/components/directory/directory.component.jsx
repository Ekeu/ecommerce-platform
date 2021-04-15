import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
  return (
    <div class='relative mt-20'>
      <div class='relative'>
        <h2 class='text-center text-3xl leading-8 font-extrabold tracking-tight text-blue-gray-900 sm:text-4xl font-poppins'>
          Competitive as Always
        </h2>
        <p class='mt-4 max-w-3xl mx-auto text-center text-xl text-blue-gray-500 fot-hind'>
          Hot Shopping is the leading e-commerce platform with thousands of
          products. Have a look at our different categories
        </p>
      </div>
      <div class='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-6 lg:gap-4 lg:items-start'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
