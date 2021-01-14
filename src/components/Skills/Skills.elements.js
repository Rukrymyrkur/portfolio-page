import styled, { keyframes } from "styled-components";
import { Container, BackgroundText } from "../../globalStyles";

export const FullPageContainer = styled.div`
  min-height: 100vh;
`;

export const SkillContainer = styled(Container)`
  ${Container}
`;

export const TitleContainer = styled.div`
  margin-top: 100px;
  padding: 10px;
`;

export const breath = keyframes`
    from {
      transform: translateY(5px);
    }
    to {
      transform: translateY(0px);
    }
`;

export const Hint = styled.span`
  position: absolute;
  writing-mode: vertical-rl;
  transform: translate(-50px, 150px);
  font-family: "La Belle Aurore", cursive !important;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    writing-mode: horizontal-tb;
    transform: translate(0px);
  }
`;

export const SkillItem = styled.div`
  text-align: center;
  margin: 10px;
  display: inline-block;
  width: 6rem;

  animation: ${breath} 2s linear infinite alternate;

  @media screen and (max-width: 768px) {
    width: 5rem;
    justify-items: space-between;
  }
  :hover {
    cursor: pointer;
    animation-play-state: paused;
  }

  p {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  svg {
    height: 3rem;
    width: 3rem;
    fill: ${({ theme }) => theme.text};
  }
  :hover::before,
  :focus::before {
    content: attr(data-tooltip);
    margin-left: 20px;
    padding: 1rem;
    border-radius: 3px;
    position: absolute;
    transform: translate(-50%, -110%);
    width: max-content;
    max-width: 10rem;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    opacity: 0.9;
    border: 1px solid gray;
    border-radius: 3px;
  }
`;

export const DescriptionContainer = styled.div`
/* border-top: 3px dashed ${({ theme }) => theme.text}; */
  /* box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.05), -8px -8px 12px 0 rgba(255, 255, 255, 0.3); */
  width: 1000px;
  background-color: ${({ theme }) => theme.transparentBody};
  padding: 50px;
  flex-direction: column;
  height: 100%;
  z-index: 100;

  div {
    display: inline-block;
  }
  h3 {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    /* margin-left: 1rem; */
  }
  }
`;

export const DescSectionContainer = styled.div`
  flex-direction: row;
`;

export const Background = styled(BackgroundText)`
  ${BackgroundText}
  overflow-x: hidden;
`;
