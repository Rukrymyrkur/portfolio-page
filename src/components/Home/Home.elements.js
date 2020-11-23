import styled from "styled-components";
import { Container } from "../../globalStyles";
import pic from "../../../src/images/pic.JPG";

const baseColor = "#000000";
const otherColor = "#3e3636";
const anotherColor = "#d72323";
const justAnotherColor = "#f5eded";

export const HomeContainer = styled(Container)`
  min-height: 100vh;

  ${Container}
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
  text-shadow: 2px 2px 2px ${({ theme }) => theme.textShadow};;

  span {
    display: block;
  }
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
    overflow-x: hidden;
    line-height: 3rem;
  }
  @media only screen and (min-width: 600px) {
    top: 50%;
    left: 50%;
    height: 100%;
    font-size: 8rem;
`;

export const ImgWrapper = styled.div`
  min-height: 70vh;
  min-width: 50vw;

  position: absolute;
  background-image: url(${pic});
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
