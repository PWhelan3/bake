import React, { useState } from 'react';
import styles from './app.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./pages/layout/Layout";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/Shop";
import { About } from "./pages/about/About";
import { Checkout } from "./pages/checkout/Checkout";
import { NoPage } from "./pages/nopage/NoPage";

function App() {
  const [cartsVisibility, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState([]);
  return (
    <div className={styles.App}>
      <ShoppingCart visibility={cartsVisibility} products={productsInCart}/>
      <div className={styles.navbar}>
        <h3 className={styles.logo}>Logo</h3>
        <button className={`${styles.btn} ${styles.shopping-cart-btn}`}>
          <GiShoppingBag size={24}/>
        </button>
      </div>
      <main>
      <p>Hello!</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;