import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { LazyAbout, LazyServices, LazyWhatIsCoaching, LazyContact } from './components/LazyComponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="animate-pulse text-verde-claro">Cargando...</div>
          </div>
        }>
          <LazyAbout />
          <LazyServices />
          <LazyWhatIsCoaching />
          <LazyContact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

