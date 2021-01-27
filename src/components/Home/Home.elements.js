import styled from "styled-components";
import { Container } from "../../globalStyles";

const baseColor = "#000000";
const otherColor = "#3e3636";
const anotherColor = "#d72323";
const justAnotherColor = "#f5eded";

export const HomeContainer = styled(Container)`
  min-height: 100vh;

  ${Container}
`;

export const Circle = styled.div`
  background: ${({ theme }) => theme.text};
  mix-blend-mode: difference;

  display: none;

  &.big {
    position: absolute;
    height: 500px;
    width: 500px;
    border-radius: 250px;
    top: 200px;
    left: 400px;
  }

  &.small {
    height: 300px;
    width: 300px;
    border-radius: 150px;
    top: 100px;
    right: 100px;
  }
`;

export const DescriptionContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  height: 100%;
`;

export const Description = styled.h1`
  mix-blend-mode: difference;
  font-weight: 700;
  line-height: 7rem;
  z-index: 999;

  
  span {
    display: block;
  &.top {
    margin-bottom: -20px;
  }
  &.bottom {
    margin-top: -20px;
  }

  @media only screen and (max-width: 600px) {
    top: 50%;
    left: 50%;
    height: 100%;
    font-size: 3rem;

    line-height: 3rem;
  }
  @media only screen and (min-width: 600px) {
    top: 50%;
    left: 50%;
    height: 100%;
    font-size: 6rem;
  }
  @media only screen and (min-width: 1024px) {
    top: 50%;
    left: 50%;
    height: 100%;
    font-size: 8rem;
  }
`;

export const ImgWrapper = styled.div`
  min-height: 70vh;
  min-width: 50vw;

  position: absolute;
  background-attachment: fixed;
  opacity: 0.3;
  background-repeat: no-repeat;
`;

export const Directions = styled.div`
  text-transform: uppercase;
  position: fixed;

  text-align: center;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 600px) {
    bottom: 60px;
  }
  @media only screen and (min-width: 600px) {
    bottom: 30px;
  }
`;
