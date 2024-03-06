import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import { Products } from './components/Products 001/Products';
import { Products2 } from './components/Products 002/Products2';
import { Products3 } from './components/Products 003/Products3';
import { Products4 } from './components/Products 004/Products4';
import {App} from './App';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import {NavBar} from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer';
import { Shop } from './components/Shop/Shop';
import { App2 } from './App2';
import { ProductsAll } from './components/ProducsAll/ProductsAll';
import { CartProvider } from './context/CartContext';
import { CheckoutForm } from './components/Shop/CheckoutForm';
import { Checkout } from './components/Shop/Checkout';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
<NavBar/>

<Routes>
  <Route path='/' element={<App/>} />
  <Route path='/products/all' element={<ProductsAll/>} />
  <Route path='/products/001' element={<Products/>} />
  <Route path='/products/002' element={<Products2/>} />
  <Route path='/products/003' element={<Products3/>} />
  <Route path='/products/004' element={<Products4/>} />
  <Route path='/products/:productId' element={<ProductDetail/>} />
  <Route path='/shop' element={<Shop/>} />
  <Route path='/shop/checkout' element={<Checkout/>} />
  <Route path='/shop/checkoutform' element={<CheckoutForm/>} />
  <Route path='/*' element={<App msg={'ERROR 404 PAGE NOT FOUND'} />} />
  <Route path='/formulario' element={<App2/>} />
</Routes>
<Footer/>
</CartProvider>

</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

