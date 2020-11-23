import React, { useRef, useState, useEffect } from "react";
import {
  NavLink,
  NavMenu,
  NavList,
  SocialList,
  NavItem,
} from "./Navbar.elements";
import { useTrail, a } from "react-spring";
import {
  FaCampground,
  FaFemale,
  FaFolderOpen,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { IconContext } from "react-icons";

// Main Component
const AltNavbar = () => {
  return (
    <>
      <IconContext.Provider value={{}}>
        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink as="a" href="#home" smooth={true} arial-label="home">
                <FaCampground className="react-icons" />
                <span className="link-text">Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as="a" href="#about" smooth={true} aria-label="about">
                <FaFemale className="react-icons" />
                <span className="link-text">1. About</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as="a" href="#skills" smooth={true} aria-label="skills">
                <FaLaptopCode className="react-icons" />
                <span className="link-text">2. Skills</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as="a" href="#work" smooth={true} aria-label="work">
                <FaFolderOpen className="react-icons" />
                <span className="link-text">3. Work</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                href="#contact"
                smooth={true}
                aria-label="contact"
              >
                <FaPaperPlane className="react-icons" />
                <span className="link-text">4. Contact</span>
              </NavLink>
            </NavItem>
          </NavList>
          <SocialList>
            <NavItem>
              <NavLink as="a" href="#contact" smooth={true} aria-label="github">
                <FaGithub className="react-icons" />
                <span className="link-text">Github</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                href="#contact"
                smooth={true}
                aria-label="linkedin"
              >
                <FaLinkedin className="react-icons" />
                <span className="link-text">Linkedin</span>
              </NavLink>
            </NavItem>
          </SocialList>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default AltNavbar;
