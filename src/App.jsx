// import { useState } from 'react'
// import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layouts from './pages/Layouts/Layouts';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/Scrollontop';
import Map from './components/Map/Map';
import Layout1 from './pages/Layouts/Layout1';
import Layout2 from './pages/Layouts/Layout2';
import Layout3 from './pages/Layouts/Layout3';
import Layout4 from './pages/Layouts/Layout4';
import Layout5 from './pages/Layouts/Layout5';
import Layout6 from './pages/Layouts/Layout6';
import Layout7 from './pages/Layouts/Layout7';
import Layout8 from './pages/Layouts/Layout8';
import Layout9 from './pages/Layouts/Layout9';
import Layout10 from './pages/Layouts/Layout10';
import EnquiryForm from './components/Enquiry/Enquiry';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="our-layouts" element={<Layouts />} />
          <Route path="our-layouts1" element={<Layout1 />} />
          <Route path="our-layouts2" element={<Layout2 />} />
          <Route path="our-layouts3" element={<Layout3 />} />
          <Route path="our-layouts4" element={<Layout4 />} />
          <Route path="our-layouts5" element={<Layout5 />} />
          <Route path="our-layouts6" element={<Layout6 />} />
          <Route path="our-layouts7" element={<Layout7 />} />
          <Route path="our-layouts7" element={<Layout7 />} />
          <Route path="our-layouts8" element={<Layout8 />} />
          <Route path="our-layouts9" element={<Layout9 />} />
          <Route path="our-layouts10" element={<Layout10 />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="map" element={<Map />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          

          
        </Route>
         {/* <Route path="/enquiry" element={<EnquiryForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
