import styled from "styled-components";
import { Container } from "../../globalStyles";

export const SkillContainer = styled(Container)`
  ul {
    padding: 1rem;
    /* border-top: 2px solid ${({ theme }) => theme.text}; */

    max-width: 1000px;
  }
  ul > li {
    height: 40px;
    width: 40px;
    list-style: none;
    display: inline-block;
    margin: 10px 20px;
  }
  ${Container}
`;

export const DescriptionContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 100%;
  margin: 0 auto;
  z-index: 100;
  padding: 50px;

  h3 {
    margin-bottom: -16px;
    margin-left: 1rem;

    :hover {
      /* text-decoration: underline wavy blue; */
    }
    mix-blend-mode: difference;
  }
`;
