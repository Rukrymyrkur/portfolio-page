import styled from "styled-components";
import { animated } from "react-spring";

export const Button = styled.button`
  position: fixed;
  right: 0;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: none;
  color: ${({ theme }) => theme.text};
  background: transparent;

  .mode-icon {
    font-size: 1.2rem;
  }
`;

export const PaintBlack = styled(animated.div)`
  float: right;
`;
