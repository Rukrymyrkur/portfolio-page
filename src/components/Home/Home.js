import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  Description,
  Directions,
  Circle,
  DescriptionContainer,
} from "./Home.elements";
import { Parallax } from "react-scroll-parallax";
import { a, useSpring } from "react-spring";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  //wait for scroll fade out 'Directions'
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  //wait for scroll fade out 'Directions'
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //fade out 'Directions'
  const { opacity } = useSpring({
    opacity: scrollPosition > 10 ? 0 : 1,
  });

  //fade in from left'Description'
  const { fadeLeft, transformLeft } = useSpring({
    to: { fadeLeft: 1, transformLeft: `scale(1) translate(0px, 0px)` },
    from: { fadeLeft: 0, transformLeft: `scale(0.98) translate(-50px, 0px)` },
  });
  // fade in from right 'Description'
  const { fadeRight, transformRight } = useSpring({
    to: { fadeRight: 1, transformRight: `scale(1) translate(0px, 0px)` },
    from: { fadeRight: 0, transformRight: `scale(0.98) translate(50px, 0px)` },
  });

  return (
    <>
      <HomeContainer id="home">
        <DescriptionContainer>
          <Description>
            <Parallax x={[3, -3]}>
              <a.div style={{ opacity: fadeRight, transform: transformRight }}>
                <span>Hi, I am Neringa,</span>
              </a.div>
            </Parallax>
            <Parallax x={[-3, 3]}>
              <a.div style={{ opacity: fadeLeft, transform: transformLeft }}>
                <span>a web developer</span>
              </a.div>
            </Parallax>
          </Description>
        </DescriptionContainer>
        <a.div style={{ opacity }}>
          <Directions>Scroll</Directions>
        </a.div>
        <Circle className="big" />
        <Circle className="small" />
      </HomeContainer>
    </>
  );
};

export default Home;
