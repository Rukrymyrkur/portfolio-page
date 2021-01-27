import React, { useLayoutEffect, useRef, useState } from "react";
import { a, useTrail, useSpring, useChain } from "react-spring";
import {
  FullPageContainer,
  SkillContainer,
  DescriptionContainer,
  TitleContainer,
  Background,
  SkillItem,
  DescSectionContainer,
  Hint,
} from "../Skills/Skills.elements";
import { useInView } from "react-intersection-observer";
import { Parallax, useController } from "react-scroll-parallax";
import TrailsAnimation from "../TrailsAnimation/TrailsAnimation";
import {
  SiBootstrap,
  SiCss3,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiRedux,
  SiStyledComponents,
} from "react-icons/si";
import {
  DiIllustrator,
  DiPhotoshop,
  DiSass,
  DiNodejsSmall,
  DiSqllite,
} from "react-icons/di";
import { IconContext } from "react-icons";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  //fade in container
  const opacityRef = useRef();
  const { opacity, transform } = useSpring({
    config: { mass: 5, tension: 500, friction: 200 },
    ref: opacityRef,
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
    delay: 1,
  });

  //hide hint
  const hide = useSpring({
    delay: 5000,
    to: { opacity: 0 },
    from: { opacity: 1 },
    reset: true,
  });

  //delay animation
  useChain([opacityRef, transformRef]);

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
      <FullPageContainer>
        <ParallaxCache />
        <Parallax x={[-20, -50]}>
          <Background>02.Skills</Background>
        </Parallax>
        <IconContext.Provider value={{ size: "100px" }}>
          <SkillContainer id="skills" ref={ref}>
            <a.div
              style={{
                transform: slideIn,
                opacity: slideInOpacity,
              }}
            >
              <TitleContainer>
                <h2>
                  <span>02.</span>Skills
                </h2>
              </TitleContainer>
            </a.div>
            <a.div style={{ opacity, transform }}>
              <a.div style={hide}>
                <Hint>Psst, click/hover on icons</Hint>
              </a.div>
              <DescriptionContainer>
                <DescSectionContainer>
                  <h3>Fairly confident in:</h3>
                  <TrailsAnimation>
                    <SkillItem data-tooltip="Making webpages interactive, mainly using the client-side JavaScript">
                      <SiJavascript />
                      <p>JavaScript</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Semantics of HTML">
                      <SiHtml5 />
                      <p>HTML5</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Styling and layouts">
                      <SiCss3 />
                      <p>CSS3</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Building user interfaces for websites">
                      <SiReact />
                      <p>React</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Defining global styles and creating styles for each component separately">
                      <SiStyledComponents />
                      <p>styled components</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Mainly nesting styles">
                      <DiSass />
                      <p>Sass</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Animations using the library">
                      <p>react spring</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Basics of Bootstrap">
                      <SiBootstrap />
                      <p>Bootstrap</p>
                    </SkillItem>
                  </TrailsAnimation>
                  <h3>Gaining confidence in:</h3>
                  <TrailsAnimation>
                    <SkillItem data-tooltip="Programming fundamentals and basic algorithm scripting">
                      <svg viewBox="0 0 128 128">
                        <path d="M116.5 32.3c-.6-1.1-1.4-2.1-2.3-2.6l-48.1-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48.5 27.8c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4v-55.7c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2l-47.6 27.8c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2l-48.2-27.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2v-55.7c1-.5.9-1.7 1.4-1.9l48.3-27.9c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 38.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5z"></path>
                      </svg>
                      <p>C</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Knowledge about basic algorithms, have tried some web scraping">
                      <SiPython />
                      <p>Python</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Knowledge about routes, Jinja templating">
                      <SiFlask />
                      <p>Flask</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Basics of creating tables and extracting data">
                      <DiSqllite />
                      <p>SQLite</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Basics of Redux state and actions">
                      <SiRedux />
                      <p>Redux</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Handling files on the server, modifying data">
                      <DiNodejsSmall />
                      <p>Node.js</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Knowledge about creating REST APIs">
                      <svg viewBox="0 0 128 128">
                        <title>Artboard 16</title>
                        <g id="original">
                          <path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"></path>
                          <path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"></path>
                        </g>
                      </svg>
                      <p>express</p>
                    </SkillItem>
                  </TrailsAnimation>
                  <h3>Other tools:</h3>
                  <TrailsAnimation>
                    <SkillItem data-tooltip="Online repositories">
                      <SiGithub />
                      <p>Github</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Version control">
                      <SiGit />
                      <p>Git</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Design compositions">
                      <DiIllustrator />
                      <p>Adobe Illustrator</p>
                    </SkillItem>
                    <SkillItem data-tooltip="Photo manipulation">
                      <DiPhotoshop />
                      <p>Adobe Photoshop</p>
                    </SkillItem>
                  </TrailsAnimation>
                </DescSectionContainer>
              </DescriptionContainer>
            </a.div>
          </SkillContainer>
        </IconContext.Provider>
      </FullPageContainer>
    </>
  );
};

export default Skills;
