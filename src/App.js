import React from 'react';

import { Footer, Blog, Features, Header, Possibility, ModernUIUX } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <ModernUIUX />
        <Features />
        <Possibility />
        <cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App