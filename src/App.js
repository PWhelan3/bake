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

const products = [
	{
		id: 1,
		name: "Vivamus vitae",
		rating: 4.3,
		description:
			"Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
		price: 199,
		image: require("./assets/images/product-1.png"),
	},
	{
		id: 2,
		name: "Fusce sit amet ipsum",
		rating: 4.2,
		description:
			"Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
		price: 229,
		image: require("./assets/images/product-2.png"),
	},
	{
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: require("./assets/images/product-3.png"),
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: require("./assets/images/product-4.png"),
	},
	{
		id: 5,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		image: require("./assets/images/product-5.jpg"),
	},
	{
		id: 6,
		name: "Curabitur in elementum tortor",
		rating: 3.8,
		description:
			" Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
		price: 149,
		image: require("./assets/images/product-6.png"),
	},
];

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