import styled from "styled-components";
// import {Link} from 'react-scroll';
import { NavLink as Link } from "react-router-dom";

//nav class = "navbar"
export const NavMenu = styled.nav`
  position: fixed;
  background-color: transparent;
  z-index: 999;
  transition: width 200ms ease;

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100%;
    height: 3rem;
    background: ${({ theme }) => theme.navcolor};
  }

  @media only screen and (min-width: 600px) {
    width: 3rem;
    height: 100vh;

    /* :hover {
      max-width: 16rem;
    }
    :hover .link-text {
      display: inline-block;
    } */
  }
`;

//ul class="navbar-nav"
export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 600px) {
    align-items: flex-end;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
`;

export const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: column;
  }
`;

//li class="nav-item"
export const NavItem = styled.li`
  list-style: none;
  transition: transform 100ms ease-in-out;
  filter: grayscale(100%) opacity(0.5);

  @media only screen and (min-width: 600px) {
    :hover {
      transform: scale(1.05);
      max-width: 16rem;
      display: block;
      margin-left: 0.5rem;

      filter: grayscale(0%) opacity(0.9);
    }
  }
`;

// class="nav-link"
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 3rem;
  cursor: pointer;

  @media only screen and (min-width: 600px) {
    /* :after {
      transition: 500ms transform;
      /* font-family: "'Roboto Mono', monospace" !important; */
    /* } */
    ::after {
      opacity: 0;
      transition: 100ms;
    }
    :hover::after {
      content: attr(data-tooltip);
      padding: 5px;
      width: max-content;
      font-family: "Roboto Mono", monospace;
      color: ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.body};
      opacity: 1;
    }
  }

  .react-icons {
    color: ${({ theme }) => theme.text};
    min-width: 2rem;
    height: 1.2rem;
  }
`;
