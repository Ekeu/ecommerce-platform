import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'col-span-3',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'col-span-3',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }
  render() {
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
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
    );
  }
}
