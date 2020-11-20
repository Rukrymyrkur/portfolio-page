import React, {lazy, Suspense, useState} from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Work = lazy(() => import('./components/Work/Work'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Skills2 = lazy(() => import('./components/Skills2/Skills2'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const AltNavbar = lazy(() => import('./components/AltNavbar/AltNavbar'));

function App() {

  return (
    <ParallaxProvider>
    <Router>
    <GlobalStyle />
      <Suspense fallback={<div>Loading page...</div>}>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
      </Suspense>
    </Router>
    </ParallaxProvider>
  );
}

export default App;
