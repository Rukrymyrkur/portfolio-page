import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  Description,
  Directions,
  Circle,
  DescriptionContainer,
  ImgWrapper,
} from "./Home.elements";
import { Parallax } from "react-scroll-parallax";
import { a, useSpring } from "react-spring";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  //wait for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //fade out 'Directions'
  const props = useSpring({
    opacity: scrollPosition > 10 ? 0 : 1,
  });

  return (
    <>
      <HomeContainer id="home">
        <DescriptionContainer>
          <Description>
            <Parallax x={[3, -3]}>
              <span>Hi, I am Neringa,</span>
            </Parallax>
            <Parallax x={[-3, 3]}>
              <span>a web developer</span>
            </Parallax>
          </Description>
          <ImgWrapper />
        </DescriptionContainer>
        <a.div style={props}>
          <Directions>Scroll</Directions>
        </a.div>
      </HomeContainer>
    </>
  );
};

export default Home;
