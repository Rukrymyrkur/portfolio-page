import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";
import { Wrapper } from './AltAccordion.elements';

const AltAccordion = ({title, children}) => {
    const defaultHeight = "100px";
    const [open, toggle] = useState(false);
    const [contentHeight, setContentHeight] = useState(defaultHeight);
    const [ref, { height }] = useMeasure();
  

    const expand = useSpring({
      config: { friction: 10 },
      height: open ? `${contentHeight}px` : defaultHeight
    });

    const spin = useSpring({
      config: { friction: 10 },
      transform: open ? "rotate(45deg)" : "rotate(0deg)"
    });
  

    useEffect(() => {
      setContentHeight(height);
      window.addEventListener("resize", setContentHeight(height));
      return window.removeEventListener("resize", setContentHeight(height));
    }, [height]);
  
    return (
        <Wrapper>
        <animated.button
          className="expand" onClick={() => toggle(!open)} style={spin}
        >+
          
        </animated.button>
        <animated.div className="accordion" style={expand}>
          <div ref={ref} className="content">
              <h3>{title}</h3>
            <div>
              {children}
            </div>
          </div>
        </animated.div>
        </Wrapper>

    )
}

export default AltAccordion
