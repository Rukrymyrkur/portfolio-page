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
import { useInView, InView } from "react-intersection-observer";
import { a, useSpring, useChain } from "react-spring";
import laptop1 from "../../images/laptop1.png";
import laptop2 from "../../images/laptop2.png";
import laptop3 from "../../images/laptop3.png";
import laptop4 from "../../images/laptop4.png";
import mobile1 from "../../images/mobile1.png";
import mobile2 from "../../images/mobile2.png";
import mobile3 from "../../images/mobile3.png";
import mobile4 from "../../images/mobile4.png";
import { Parallax, useController } from "react-scroll-parallax";
import TrailsAnimation from "../TrailsAnimation/TrailsAnimation";
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
                <h3>03.01 Personal portfolio page</h3>
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
                    <a href="" target="_blank">
                      Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/portfolio-page"
                      target="_blank"
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
                <h3>03.02 Sewing projects' page</h3>
                <span>
                  Got to know about styled-components, creating routes and
                  anchors to different portions of various pages.
                </span>
                <br />
                <br />
                <span>
                  Stack:{" "}
                  <strong>
                    Javascript, CSS, HTML, React, styled-components
                  </strong>
                </span>
                <div>
                  <button>
                    <a href="https://neringasews.netlify.app/" target="_blank">
                      Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/sewing-portfolio-page"
                      target="_blank"
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
                <h3>03.03 Quote generator</h3>
                <span>
                  First I've created an API, then applied it to a page that
                  generates a random quote <strong>Architecture</strong>
                </span>
                <br />
                <br />
                <span>
                  Stack:{" "}
                  <strong>
                    Javascript, CSS, HTML, React, Bootstrap, express.js
                  </strong>
                </span>
                <div>
                  <button>
                    <a
                      href="https://blooming-depths-82764.herokuapp.com/"
                      target="_blank"
                    >
                      Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/office-quote-generator"
                      target="_blank"
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
                  <img className="mobile" src={mobile2} alt="" />
                </Parallax>
              </WorkTrailAnimation>
            </DescriptionImages>
          </DescriptionContainer>

          <DescriptionContainer>
            <Description>
              <WorkTrailAnimation>
                <h3>03.04 Quote API</h3>
                <span>
                  Created an Office Quote API that can be used by anyone, using
                  express.js.
                </span>
                <br />
                <br />
                <span>
                  Stack:{" "}
                  <strong>
                    Javascript, CSS, HTML, React, Bootstrap, express.js,
                    Handlebars
                  </strong>
                </span>
                <div>
                  <button>
                    <a
                      href="https://frozen-anchorage-84147.herokuapp.com/"
                      target="_blank"
                    >
                      Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/Rukrymyrkur/office-quote-api"
                      target="_blank"
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
        </WorkContainer>
      </FullPageContainer>
    </>
  );
};

export default Work;
