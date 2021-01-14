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

// const TrailsAnimation = ({ children, ...props }) => {
//   // let descItems = React.Children.toArray(children);
//   const countItems = React.Children.count(children);
//   console.log(children);
//   // console.log(descItems);
//   // console.log(countItems);
//   const trail = useTrail(countItems, {
//     config: { mass: 5, tension: 400, friction: 80 },
//     opacity: 1,
//     x: 0,
//     from: { opacity: 0, x: -10 },
//     reset: true,
//   });
//   return (
//     <TrailsMain {...props}>
//       {trail.map(({ x, ...rest }, i) => (
//         <a.div
//           key={children[i]}
//           className="trails-text"
//           style={{
//             ...rest,
//             transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
//           }}
//         >
//           <a.div style={{}}>{children[i]}</a.div>
//         </a.div>
//       ))}
//     </TrailsMain>
//   );
// };
const TrailsAnimation = ({ children, ...props }) => {
  // let descItems = React.Children.toArray(children);
  const countItems = React.Children.count(children);
  // console.log(descItems);
  // console.log(countItems);
  const trail = useTrail(countItems, {
    config: { mass: 5, tension: 400, friction: 80 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: -10 },
    reset: true,
  });
  return (
    <TrailsMain {...props}>
      {trail.map(({ x, ...rest }, id) => (
        <a.div
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

export default TrailsAnimation;
