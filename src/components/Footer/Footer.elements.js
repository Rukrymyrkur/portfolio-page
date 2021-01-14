import styled from "styled-components";
import { Container } from "../../globalStyles";

export const FooterContainer = styled.div`
  width: 100%;
  height: 3rem;
  /* color: ${({ theme }) => theme.text}; */
  margin: 0 auto;
  ${Container};

  @media only screen and (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;
