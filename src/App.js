import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import ParallaxSection from './components/StaticSection';
import ConsultationSection from './components/ConsultationSection';
import ExpandingImageSection from './components/ExpandingImageSection ';
import CapsuleFeatures from './components/CapsuleFeatures';
import CapsuleBusinessInfo from './components/CapsuleBusinessInfo';
import Features from './components/Features';
import HouseDetails from './components/HouseDetails';
import './App.css';
import Aesthetic from './components/Aesthetic';
import FAQ from './components/FAQ';
import ContactCards from './components/ContactCards';

const App = () => {
  return (
    <Router>
      <div className="all">
        <Routes>
          <Route
            path="/"
            element={
            <>
              <div className='back'>
              <Navbar />
              <Home />
              </div>
              <div className="divider"></div>
              <About />
              <ParallaxSection />
              <ConsultationSection />
              <ExpandingImageSection />
              <CapsuleFeatures />
              <CapsuleBusinessInfo />
              <div id="profitability">
              {/* <Profitability /> */}
              </div>
              <div id="catalog">
              <Catalog />
              </div>
              <Features />
              <ConsultationSection/>
              <Aesthetic/>
              <FAQ/>
              <div id="contact" ><ContactCards /></div>              
            </>
            }
          />
          <Route path="/:id" element={<HouseDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;