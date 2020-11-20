import styled from 'styled-components';
// import {Link} from 'react-scroll';
import {NavLink as Link} from 'react-router-dom';

//nav class = "navbar"
export const NavMenu = styled.nav`
    position: fixed;
    background-color: transparent;
    z-index: 999;
    transition: width 200ms ease;


@media only screen and (max-width: 600px){
    bottom: 0;
    width: 100%;
    height: 3rem;
    background: white;
}

@media only screen and (min-width: 600px){
    width: 3rem;
    height: 100vh;
    :hover{
        max-width: 16rem;
    }
    :hover .link-text{
        display: inline-block;
    }
}
`



//ul class="navbar-nav"
export const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 600px){
        flex-direction: row;
    }

    @media only screen and (min-width: 600px){

    }
`;

//li class="nav-item"
export const NavItem = styled.li`
`;

// class="nav-link"
export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 3rem;
    cursor: pointer;
    filter: grayscale(100%) opacity(0.5);

    :hover{
        filter: grayscale(0%) opacity(0.9);
    }
    :active{
        color: green;
    }

    .link-text{
        display: none;
        white-space: nowrap;
        margin-left: 1rem;
    }


    .icon{
        min-width: 2rem;
        margin: 0 auto;
    }
`;
