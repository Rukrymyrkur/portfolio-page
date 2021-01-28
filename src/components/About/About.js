import React, { useRef, useLayoutEffect } from "react";
import {
  AboutContainer,
  Description,
  DescriptionContainer,
  TitleContainer,
  Background,
  FullPageContainer,
  Circles,
} from "./About.elements";
import { useInView } from "react-intersection-observer";
import { a, useSpring, useChain } from "react-spring";
import pic3 from "../../images/pic3.JPG";
import { Parallax, useController } from "react-scroll-parallax";
import TrailsAnimation from "../TrailsAnimation/TrailsAnimation";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  //fade in container
  const opacityRef = useRef();
  const { opacity, transform } = useSpring({
    ref: opacityRef,
    config: { mass: 5, tension: 500, friction: 200 },
    opacity: inView ? 1 : 0,
    transform: inView
      ? "scale(1) translate(0px, 0px)"
      : "scale(0.97) translate(20px, 20px)",
  });

  //slide in title
  const transformRef = useRef();
  const { slideIn, slideInOpacity } = useSpring({
    ref: transformRef,
    slideIn: inView ? `translate(0px, 0px)` : `translate(-10px, -10px)`,
    slideInOpacity: inView ? 1 : 0,
  });

  //delay animation
  useChain([opacityRef, transformRef], [0, 100]);

  //parallax cache taken from 'react-intersection-observer' documentation
  const ParallaxCache = () => {
    const { parallaxController } = useController();

    useLayoutEffect(() => {
      const handler = () => parallaxController.update();
      window.addEventListener("load", handler);
      return () => window.removeEventListener("load", handler);
    }, [parallaxController]);

    return null;
  };

  return (
    <>
      <ParallaxCache />
      <FullPageContainer>
        <Parallax x={[-50, -20]}>
          <Background>01.About</Background>
        </Parallax>
        <AboutContainer id="about" ref={ref}>
          <a.div
            style={{
              transform: slideIn,
              opacity: slideInOpacity,
            }}
          >
            <TitleContainer>
              <h2>
                <span>01.</span> About
              </h2>
            </TitleContainer>
          </a.div>
          <a.div style={{ opacity, transform }}>
            <DescriptionContainer>
              <Circles />
              <Parallax y={[20, -20]}>
                <img src={pic3} alt="" />
              </Parallax>
              <Description>
                <TrailsAnimation>
                  <span>
                    My aim is to design and code easy to use websites with a
                    creative flair.
                  </span>
                  <span>
                    I have a BA degree in <strong>architecture</strong>, but
                    gradually fell into the world of web development, finished a
                    few courses on <strong>FreeCodeCamp</strong>,{" "}
                    <strong>Coursera</strong>, currently working on{" "}
                    <strong>CS50</strong> full-stack based course in{" "}
                    <strong>Turing School</strong>.
                  </span>
                  <span>
                    I am looking for a place where I could become a part of a
                    dev team!
                  </span>
                </TrailsAnimation>
                <a href="#work" className="link">
                  Go straight to my projects!
                </a>
              </Description>
            </DescriptionContainer>
          </a.div>
        </AboutContainer>
      </FullPageContainer>
    </>
  );
};

export default About;
