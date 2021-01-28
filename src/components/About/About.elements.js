import styled from "styled-components";
import { Container, BackgroundText } from "../../globalStyles";

export const FullPageContainer = styled.div`
  min-height: 70vh;
`;

export const AboutContainer = styled(Container)`
  ${Container}
`;

export const Circles = styled.div`
  border-radius: 155px;
  border: 1px solid white;
  height: 310px;
  width: 310px;
  position: absolute;
  margin-left: -5px;
`;

export const DescriptionContainer = styled.div`
  margin: 0 auto;
  flex-direction: row;
  display: flex;
  align-items: center;
  max-width: 1000px;
  background-color: ${({ theme }) => theme.transparentBody};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  a {
    &.link {
      background-color: ${({ theme }) => theme.text};
      text-decoration: none;
      padding: 5px;
      color: ${({ theme }) => theme.body};
      display: inline-block;
      margin-top: 2rem;
    }
  }
  img {
    border-radius: 150px;
    max-height: 300px;
    max-width: 300px;
    position: relative;
  }
`;

export const Background = styled(BackgroundText)`
  ${BackgroundText}
  overflow-x: hidden;
`;

export const Description = styled.p`
  z-index: 100;
  padding: 50px;

  span {
    display: block;

    strong {
      /* color: #f30a49; */
      color: #0c3c78;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
`;

//trails-main
export const TrailsMain = styled.div`
  .trails-text {
    will-change: transform, opacity;
  }
  .trails-text > div {
    overflow: hidden;
  }
`;
