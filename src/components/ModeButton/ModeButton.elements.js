import styled from "styled-components";
import { animated } from "react-spring";

export const Button = styled.button`
  z-index: 999;
  position: fixed;
  right: 0;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: none;
  color: ${({ theme }) => theme.text};
  /* filter: drop-shadow(0 0 0.75rem #e23); */
  background: transparent;
  cursor: pointer;

  .mode-icon {
    font-size: 1.7rem;
  }
`;

export const PaintBlack = styled(animated.div)`
  float: right;
`;
