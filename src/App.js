import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './features/products/Products';
import OrderHistory from './features/order-history/OrderHistory';
import NavigationBar from './components/navigation-bar/NavigationBar';
import { useEffect, useState } from "react";
import Checkout from './features/checkout/Checkout';
import { getProducts } from "./services/products/products";
import Cart from './components/cart/Cart';


function App() {
  const [products, setProducts] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false)

  useEffect(() => {
    getProducts().then(res => setProducts(res.data))
  }, [])

  return (
    <BrowserRouter>
      <NavigationBar onCartClick={() => setIsCartOpened(!isCartOpened)} />
      { isCartOpened ? <Cart /> : null }
      <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-history" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
