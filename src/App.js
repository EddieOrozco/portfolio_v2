import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
