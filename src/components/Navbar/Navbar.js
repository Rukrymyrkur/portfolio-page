import React, { useRef, useState, useEffect } from 'react';
import { NavLink, NavMenu, NavList, NavItem } from './Navbar.elements';
import { useTrail, a } from 'react-spring';
import { FaCampground, FaFemale, FaFolderOpen, FaLaptopCode, FaPaperPlane } from 'react-icons/fa';
import { IconContext } from 'react-icons';

// Main Component
const AltNavbar = () => {
    return (
        <>
        <IconContext.Provider value={{color: 'initial'}}>
            <NavMenu>
                <NavList>
                    <NavItem>
                        <NavLink as='a' href='#home' smooth={true} arial-label="home">
                            <FaCampground className="icon" />
                            <span className="link-text">Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as='a' href='#about' smooth={true} aria-label="about">
                            <FaFemale className="icon" />
                            <span className="link-text">1. About</span>
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as='a' href='#skills' smooth={true} aria-label="skills">
                            <FaLaptopCode className="icon" />
                            <span className="link-text">2. Skills</span>
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as='a' href='#work' smooth={true} aria-label="work">
                            <FaFolderOpen className="icon" />
                            <span className="link-text">3. Work</span>
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as='a' href='#contact' smooth={true} aria-label="contact">
                            <FaPaperPlane className="icon" />
                            <span className="link-text">4. Contact</span>
                            </NavLink>
                    </NavItem>
                </NavList>
            </NavMenu>
            </IconContext.Provider>
        </>
    )
}

export default AltNavbar



