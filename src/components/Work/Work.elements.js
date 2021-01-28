import styled from "styled-components";
import { Container, BackgroundText } from "../../globalStyles";

export const FullPageContainer = styled.div`
  /* min-height: 100vh; */
`;

export const WorkContainer = styled(Container)`
  ${Container}
`;

export const DescriptionContainer = styled.div`
  background-color: ${({ theme }) => theme.transparentBody};
  /* margin: 0 auto; */
  display: flex;
  /* flex-direction: row; */
  /* align-items: center; */
  max-width: 1000px;
  margin: 50px 0;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin: 10px 0;
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
    margin: 10px 0;
  }
`;
export const DescriptionImages = styled.div`
  @media screen and (min-width: 900px) {
    flex-direction: column;
    flex: 1 1 0;
  }
  @media screen and (max-width: 900px) {
    padding: 0 50px;
  }
  img {
    &.laptop {
      width: 100%;
      border-radius: 5px;
    }
    &.mobile {
      width: 30%;
      margin-top: -50px;
      margin-left: 50px;
      border-radius: 10px;
    }
  }
`;

export const Background = styled(BackgroundText)`
  ${BackgroundText}
  overflow-x: hidden;
`;

export const Description = styled.div`
  position: relative;
  z-index: 100;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  justify-content: space-between;

  span {
    display: block;
    strong {
      color: #0c3c78;
    }
  }

  button {
    cursor: pointer;
    width: 100px;
    height: 30px;
    margin: 10px;
    display: inline-block;
    align-self: bottom;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.text};
    :hover {
    }
    :active {
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      background-color: transparent;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-top: 100px;
  padding: 10px;
`;
