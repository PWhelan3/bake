import React from 'react';
import { Navbar } from '.../components/navbar/Navbar';
import { Cart } from '.../components/cart/Cart';
import { Featured } from '.../components/featured/Featured';
import { Footer } from '.../components/footer/Footer';
import { Hero } from '.../components/hero/Hero';
import { Items } from '.../components/items/Items';
import { Special } from '.../components/special/Special';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Items />
      <Special />
      <Footer />
    </div>
  )
}

export default Home