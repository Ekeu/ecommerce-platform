import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <li>
      <div class='space-y-4'>
        <div class='aspect-w-3 aspect-h-2'>
          <img
            class='object-cover shadow-lg rounded-lg'
            src={imageUrl}
            alt=''
          />
        </div>

        <div class='space-y-2 font-hind'>
          <div class='text-lg leading-6 font-medium space-y-1 flex justify-between'>
            <h3>{name}</h3>
            <p class='text-red-500'>{price}</p>
          </div>
          <ul class='flex space-x-5'>
            <li>
              <CustomButton onClick={() => addItem(item)} >Add to Cart</CustomButton>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
