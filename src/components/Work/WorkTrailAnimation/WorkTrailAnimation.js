import React from "react";
import { a, useTrail } from "react-spring";
import { useInView } from "react-intersection-observer";

import styled from "styled-components";

//trails-main
const TrailsMain = styled.div`
  .trails-text {
    will-change: transform, opacity;
  }
  .trails-text > div {
  }
`;

const WorkTrailAnimation = ({ children, ...props }) => {
  //listen when component is in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    // rootMargin: "0px 0px 0px 50px",
  });

  const countItems = React.Children.count(children);
  const trail = useTrail(countItems, {
    config: { mass: 5, tension: 400, friction: 80 },
    to: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -10,
    },
    reset: false,
  });
  return (
    <TrailsMain {...props}>
      {trail.map(({ x, ...rest }, id) => (
        <a.div
          ref={ref}
          key={id}
          className="trails-text"
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <a.div style={{}}>{children[id]}</a.div>
        </a.div>
      ))}
    </TrailsMain>
  );
};

export default WorkTrailAnimation;
