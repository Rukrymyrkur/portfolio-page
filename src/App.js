import React, { lazy, Suspense, useState } from "react";
import { GlobalStyle, lightTheme, darkTheme } from "./globalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { useDarkMode } from "./useDarkMode";
import { ThemeProvider } from "styled-components";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Work = lazy(() => import("./components/Work/Work"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Skills2 = lazy(() => import("./components/Skills2/Skills2"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const AltNavbar = lazy(() => import("./components/AltNavbar/AltNavbar"));
const ModeButton = lazy(() => import("./components/ModeButton/ModeButton"));

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ParallaxProvider>
      <Router>
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyle />
            <Suspense fallback={<div>Loading page...</div>}>
              <Navbar />
              <ModeButton theme={theme} setTheme={setTheme} />
              <Home />
              <About />
              <Skills />
              <Work />
              <Contact />
            </Suspense>
          </>
        </ThemeProvider>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
