import styled from 'styled-components';
import {Link} from 'react-scroll';

export const MenuContainer = styled.div`
  overflow-x: hidden;
 
`;

export const NavMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;

    transform-origin: right;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    color: white;



    @media (max-width: 576px) {
        width: 100%;
    }


    
`


export const NavLink = styled(Link)`
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

  &:hover {
      color: red;
  }
@media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
}
`;

export const BurgerContainer = styled.div`
    mix-blend-mode: normal;
    height: 3rem;
    float: right;
    margin-right: 40px;
    padding: 10px;

    
`;

export const StyledBurger = styled.button`

  z-index: 999;
  top: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0; 
  background: transparent;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ open }) => open ? 'white' : 'black'};


    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`