import React from 'react';
import { Navbar } from '.../components/navbar/Navbar';
import { Cart } from '.../components/cart/Cart';
import { Footer } from '.../components/footer/Footer';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  )
}

export default Checkout