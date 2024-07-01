import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/ratingstars/RatingStars";
import ShoppingCart from "./components/cart/Cart";
import { Layout } from "./pages/layout/Layout";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/Shop";
import { About } from "./pages/about/About";
import { Checkout } from "./pages/checkout/Checkout";
import { NoPage } from "./pages/nopage/NoPage";
import { products } from './data/Products';


function App() {
  const [cartsVisibility, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(JSON.parse(localStorage.getItem("shopping-cart")) || []);

  useEffect(() => {
		localStorage.setItem("shopping-cart",JSON.stringify(productsInCart));
	}, [productsInCart]);


  const addProductToCart = (product) => {
		const newProduct = {...product, count: 1, };
		setProducts([...productsInCart, newProduct,]);
	};

	const onQuantityChange = (productId, count) => {
		setProducts((oldState) => {
			const productsIndex = oldState.findIndex((item) => item.id === productId);
			if (productsIndex !== -1) {
				oldState[productsIndex].count = count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex = oldState.findIndex((item) => item.id === product.id);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

  return (
    <div className={styles.App}>
      <ShoppingCart visibility={cartsVisibility} products={productsInCart}/>
      <div className={styles.navbar}>
        <h3 className={styles.logo}>Logo</h3>
        <button className={`${styles.btn} ${styles.shopping-cart-btn}`} onClick={() => setCartVisible(true)}>
          <GiShoppingBag size={24}/>
        </button>
      </div>
	  <main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div className="product" key={product.id}>
							<img className="product-image" src={ product.image } alt={ product.image } />
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars rating={ product.rating } />
							<p>
								{ product.description}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button className="btn" onClick={() => addProductToCart( product ) }>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
      <div>
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
      </div>
    </div>
  );
}

export default App;