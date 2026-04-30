import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Service from '../pages/Service';
import Header from '../component/Header';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const RoutingComponent = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <NavBar   />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default RoutingComponent;
