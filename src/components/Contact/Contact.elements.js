import styled from "styled-components";
import { Container } from "../../globalStyles";
import Modal from "react-modal";

export const ContactContainer = styled(Container)`
  ${Container}
  display: flex;

  width: 100%;
  min-height: 70vh;
  transition: 0.7s ease;

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 2000ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
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
  margin: 10px;
  span {
    display: block;
  }
  @media screen and (max-width: 700px) {
    padding: 1rem;
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
  margin: 50px;
  max-width: 1000px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  outline: none;
  border: 2px solid ${({ theme }) => theme.text};
  padding: 50px;

  @media screen and (max-width: 425px) {
    margin: 0;
    /* height: calc(100% - 50px); */
    height: 100%;
    padding: 10px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  h2,
  p {
    padding: 1rem;
  }
  p {
    font-family: "La Belle Aurore", cursive !important;
    font-size: 1.5rem;
    @media screen and (max-width: 725px) {
      line-height: 1.5rem;
    }
  }
  label {
    margin-left: 2rem;
    font-size: 1.2rem;
    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  text-decoration: none;
  transition-duration: 0.4s;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  border: 2px solid ${({ theme }) => theme.body};

  &:hover {
    transition: 0.3s ease-out;
    border: 2px solid #a1083b;
    outline: none;
  }
  &:active {
    color: #fff;
    background-color: #a1083b;
  }
`;
export const Input = styled.input`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 0.5em;
  margin: 1rem 0;
  width: 100%;
  font-size: 1rem;
  border: 2px solid #ccc;
  font-family: "Raleway", sans-serif;
  /* border-radius: 4px; */

  &:focus {
    border: 2px solid #a1083b;
    outline: none;
  }
  @media screen and (max-width: 725px) {
  }
  @media screen and (max-width: 425px) {
    margin: 0.2rem 0 0.4rem 0;
    font-size: 0.9rem;
  }
`;

export const MessageArea = styled.textarea`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 12px;
  margin: 1rem 0;
  border: 2px solid #ccc;
  /* border-radius: 4px; */
  box-sizing: border-box;
  height: 300px;
  /* max-height: 500px; */
  height: 100px;
  width: 100%;
  resize: vertical;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-family: "Raleway", sans-serif;
  &:focus {
    border: 2px solid #a1083b;
    outline: none;
  }

  @media screen and (max-width: 725px) {
    height: 50px;
  }
  @media screen and (max-width: 425px) {
    margin: 0.3rem 0;
    padding: 6px;
    font-size: 0.9rem;
  }
`;

export const Close = styled.button`
  font-size: 2rem;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  float: right;
  margin: -40px;
  transition-duration: 0.4s;

  &:hover {
    transition: 0.3s ease-in-out;
    color: #a1083b;
  }

  @media screen and (max-width: 725px) {
    margin-right: 0;
    margin-top: 0;
  }
`;
