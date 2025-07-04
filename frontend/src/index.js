import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from '../src/landing_page/home/HomePage'
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SignUp from './landing_page/signup/Signup';
import Login from './landing_page/login/Login'
import SupportPage from './landing_page/support/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
// import 'react-toastify/dist/ReactTostify.css';


import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
   <Navbar/>
      <Routes>
        < Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/product" element={<ProductPage/>} />
         <Route path="/pricing" element={<PricingPage/>} />
          <Route path="/support" element={<SupportPage/>} />
         
      </Routes> 
      {<Footer/>  }
    </BrowserRouter>
    
  
);

