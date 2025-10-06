import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Footer from './components/Footer';
import ThreeStarPackages from './components/ThreeStarPackages';
import FourStarPackages from './components/FourStarPackages';
import FiveStarPackages from './components/FiveStarPackages';

import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Services from "./components/Services";
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from "./components/AboutUs";
import FiveStarPackage1 from './components/FiveStarPackage1';
import FiveStarPackage2 from './components/FiveStarPackage2';
import FiveStarPackage3 from './components/FiveStarPackage3';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Quote />
              <ThreeStarPackages/>
              <FourStarPackages/>
              <FiveStarPackages/>
              <Services/>
              <WhyChooseUs/>
            </>
          }
        />

        {/* Individual package pages */}
        <Route path="/packages/3star" element={<FiveStarPackage3 />} />
        <Route path="/packages/4star" element={<FiveStarPackage2 />} />
        <Route path="/packages/5star" element={<FiveStarPackage1 />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
