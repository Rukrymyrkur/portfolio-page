import React, { useLayoutEffect } from "react";
import {
  WorkContainer,
  Description,
  DescriptionContainer,
  TitleContainer,
  Background,
  FullPageContainer,
  DescriptionImages,
} from "./Work.elements";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import laptop1 from "../../images/laptop1.JPG";
import laptop2 from "../../images/laptop2.png";
import laptop3 from "../../images/laptop3.JPG";
import laptop4 from "../../images/laptop4.png";
import mobile1 from "../../images/mobile1.JPG";
import mobile3 from "../../images/mobile3.JPG";
import mobile4 from "../../images/mobile4.png";
import { Parallax, useController } from "react-scroll-parallax";
import WorkTrailAnimation from "./WorkTrailAnimation/WorkTrailAnimation";

const Work = () => {
  //listen when component is in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    // rootMargin: "0px 0px 0px 50px",
  });

  // //fade in container
  // const { opacity, transform } = useSpring({
  //   opacity: inView ? 1 : 0,
  //   transform: inView
  //     ? "scale(1) translate(0px, 0px)"
  //     : "scale(0.97) translate(20px, 20px)",
  // });

  //slide in title
  const { slideIn, slideInOpacity } = useSpring({
    slideIn: inView ? `translate(0px, 0px)` : `translate(-10px, -10px)`,
    slideInOpacity: inView ? 1 : 0,
  });

  //parallax cache taken from 'react-scroll-parallax' documentation
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
          <Background>03.Work</Background>
        </Parallax>
        <WorkContainer id="work" ref={ref}>
          <a.div
            style={{
              transform: slideIn,
              opacity: slideInOpacity,
            }}
          >
            <TitleContainer>
              <h2>
                <span>03.</span> Work
              </h2>
            </TitleContainer>
          </a.div>
          <DescriptionContainer>
            <Description>
              <WorkTrailAnimation>
                <h3>03.01 Sourdough scheduling app</h3>
                <span>
                  Created a full-stack app, with React on the front stack and
                  Flask behind it. The app is created to simplify and take out
                  the guesswork for a homebaker making sourdough.
                </span>
                <br />
                <br />
                <span>
                  Stack:{" "}
                  <strong>
                    Javascript, React, Flask, styled-components, HTML,
                    SQLAlchemy. Deployed with Docker and nginx.
                  </strong>
                </span>
                <div>
                  <button disabled>
                    {/* <a
                      href="https://sourdough.surm.lt"
                      target="_blank"
                      rel="noreferrer"
                    > */}
                    Not Live Yet
                    {/* </a> */}
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/sourdough"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </WorkTrailAnimation>
            </Description>
            <DescriptionImages>
              <WorkTrailAnimation>
                <img className="laptop" src={laptop3} alt="" />
                <Parallax y={[-20, 0]}>
                  <img className="mobile" src={mobile3} alt="" />
                </Parallax>
              </WorkTrailAnimation>
            </DescriptionImages>
          </DescriptionContainer>
          <DescriptionContainer>
            <Description>
              <WorkTrailAnimation>
                <h3>03.02 Personal portfolio page</h3>
                <span>
                  Aimed to show to show my progress from the last one, notable
                  features are: a global <strong>theme selector</strong>,{" "}
                  <strong>animations</strong> that appear on scroll, a working{" "}
                  <strong>contact form</strong>. This site is also{" "}
                  <strong>mobile friendly</strong>!
                </span>
                <br />
                <br />
                <span>
                  Stack:{" "}
                  <strong>
                    Javascript, CSS, HTML, React, styled-components,
                    react-spring
                  </strong>
                </span>
                <div>
                  <button>
                    <a
                      href="https://neringa.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/portfolio-page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </WorkTrailAnimation>
            </Description>
            <DescriptionImages>
              <WorkTrailAnimation>
                <img className="laptop" src={laptop4} alt="" />
                <Parallax y={[-20, 0]}>
                  <img className="mobile" src={mobile4} alt="" />
                </Parallax>
              </WorkTrailAnimation>
            </DescriptionImages>
          </DescriptionContainer>

          <DescriptionContainer>
            <Description>
              <WorkTrailAnimation>
                <h3>03.03 Quote Generator</h3>
                <span>
                  A generator app as a follow-up to my API building project.
                  It's a simple project made for practising API building.
                </span>
                <br />
                <br />
                <span>
                  Stack:{" "}
                  <strong>
                    express.js, express-handlebars, React, sass, HTML
                  </strong>
                </span>
                <div>
                  <button>
                    <a
                      href="https://blooming-depths-82764.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/office-quote-generator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </WorkTrailAnimation>
            </Description>
            <DescriptionImages>
              <WorkTrailAnimation>
                <img className="laptop" src={laptop1} alt="" />
                <Parallax y={[-20, 0]}>
                  <img className="mobile" src={mobile1} alt="" />
                </Parallax>
              </WorkTrailAnimation>
            </DescriptionImages>
          </DescriptionContainer>

          <DescriptionContainer>
            <Description>
              <WorkTrailAnimation>
                <h3>03.04 Flack</h3>
                <span>
                  When a user visits the app, they input their username or a
                  generated one. Next time user visits the page, their username
                  is taken from localStorage saved previously. All users are
                  able to create new channels, previous messages sent in the
                  channel (max 100 per room).
                </span>
                <br />
                <br />
                <span>
                  Stack:{" "}
                  <strong>
                    Javascript, socketio, jQuery, Python, SCSS, HTML, Bootstrap
                  </strong>
                </span>
                <div>
                  <button disabled>
                    {/* <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    > */}
                    Not Live Yet
                    {/* </a> */}
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/flack"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </WorkTrailAnimation>
            </Description>
            <DescriptionImages>
              <WorkTrailAnimation>
                <img className="laptop" src={laptop2} alt="" />
                <Parallax y={[-20, 0]}>
                  {/* <img className="mobile" src={mobile2} alt="" /> */}
                </Parallax>
              </WorkTrailAnimation>
            </DescriptionImages>
          </DescriptionContainer>
        </WorkContainer>
      </FullPageContainer>
    </>
  );
};

export default Work;
