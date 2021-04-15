import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import HotShopping from '../../assets/hotShopping.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IgZ9EFE5V1MkMH4eWZgEyQtTXGGtlbpIkZ8TZ4Jv2yi6LTo2T5OOg4hBuK59zsSyXlpg0sUv0tXpeQLR5Kjd2hT00hzIhbiAQ';

  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Hot Shopping Ltd.'
      billingAddress
      shippingAddress
      image={HotShopping}
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
