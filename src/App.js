import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Footer from './components/Footer';
import ThreeStarPackages from './components/ThreeStarPackages';
import FiveStarPackages from './components/FiveStarPackages';
import FourStarPackages from './components/FourStarPackages';
import UmrahDescription from './components/UmrahDescription';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Services from "./components/Services";
import WhyChooseUs from './components/WhyChooseUs';

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
              <ThreeStarPackages />
              <FourStarPackages />
              <FiveStarPackages />
              <Services/>
              <WhyChooseUs/>
              
              <UmrahDescription />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
