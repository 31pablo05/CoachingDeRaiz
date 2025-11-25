import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhatIsCoaching from './components/WhatIsCoaching';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhatIsCoaching />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

