import styles from './app.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./pages/layout/Layout";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/Shop";
import { About } from "./pages/about/About";
import { Checkout } from "./pages/checkout/Checkout";
import { NoPage } from "./pages/nopage/NoPage";

function App() {
  return (
    <div className={styles.app}>
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
  );
}

export default App;