import React from 'react';
import { Navbar } from '.../components/navbar/Navbar';
import { Cart } from '.../components/cart/Cart';
import { Featured } from '.../components/featured/Featured';
import { Footer } from '.../components/footer/Footer';
import { Hero } from '.../components/hero/Hero';
import { Items } from '.../components/items/Items';
import { Special } from '.../components/special/Special';
import { Cart } from '.../components/cart/Cart';
import { Header } from '.../components/header/Header';
import { Testimonials } from '.../components/testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Header />
      <Hero />
      <Featured />
      <Items />
      <Special />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home