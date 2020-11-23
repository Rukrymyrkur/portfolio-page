import styled from "styled-components";
import { Container } from "../../globalStyles";

// const baseColor = "#000000";
// const otherColor = "#3e3636";
// const anotherColor = "#d72323";
// const justAnotherColor = "#f5eded";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  z-index: 100;
  padding: 50px;
  ${Container}
`;

export const ProjectWrapper = styled.div`
  min-width: 1000px;
  min-height: 500px;
  border: 2px solid green;

  button {
    justify-content: center;
    align-items: center;
    margin: 10px;
    float: left;

    &.source-button {
      background-color: green;
      margin-left: -100;
    }
  }
`;

export const ProjectDescription = styled.div`
  padding: 10px;
  background-color: red;
`;
