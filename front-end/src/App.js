import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import {Header, Footer} from './components';
// pages
import {Home, Contact, Admin, Cart, OrderHistory,
  Login, Register, Reset} from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div >
      <BrowserRouter>
        <ToastContainer/>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/reset" element={<Reset/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/order-history" element={<OrderHistory/>}></Route>
            <Route path="/*" element={<Home/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
      
  );
}

export default App;
