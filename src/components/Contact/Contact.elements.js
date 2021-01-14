import styled from "styled-components";
import { Container } from "../../globalStyles";
import Modal from "react-modal";

export const ContactContainer = styled(Container)`
  ${Container}
  display: flex;

  width: 100%;
  min-height: 70vh;
  transition: 0.7s ease;
`;

export const TitleContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  /* border-bottom: 8px solid white;
    border-left: 8px solid white;
    border-top: 8px solid black;
    border-right: 8px solid black;
    transform: skew(-5deg); */
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContactOther = styled.div`
  flex: 1 1 0;
  height: 100%;
  span {
    display: block;
  }
`;

export const SocialContact = styled.div`
  height: 100%;
  flex: 1 1 0;
  span {
    display: block;
  }
`;

export const SocialLink = styled.a`
  width: 200px;
  margin: 10px;
  text-align: center;

  display: grid;
  justify-items: center;
  text-decoration: none;
  padding: 1rem;
  font-size: 1.2rem;

  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 425px) {
    padding: 1rem;
  }

  &:hover {
    color: #a1083b;
    transform: scale(1.1);
    transition: 0.3s ease;
    border-radius: 5px;
    border: none;
  }
  &:active {
    color: #fff;
    border: 1px solid #a1083b;
    background-color: #a1083b;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1 1 0;
  button {
    &.write-me {
      height: 200px;
      width: 200px;
      border-radius: 100px;
      cursor: pointer;
      font-size: 2rem;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      border: 2px solid ${({ theme }) => theme.text};
      @media screen and (max-width: 1024px) {
        margin: 0 0 50px 0;
      }
    }
  }
`;

export const ContactModal = styled(Modal)`
  padding: 50px;
  margin: 100px;
  background-color: ${({ theme }) => theme.body};

  color: ${({ theme }) => theme.text};

  outline: none;
  padding: 50px;
`;
