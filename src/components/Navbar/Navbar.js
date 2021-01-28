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
import TrailsAnimation from "../TrailsAnimation/TrailsAnimation";

import styled from "styled-components";

// Main Component
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  function onLinkClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    // in Element, onClick={onLinkClick}
  }
  // if (width > breakpoint) {
  //   return (
  //     <div>
  //       <h3>Component 1</h3>
  //       <p>Current width is {width} px</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <IconContext.Provider value={{}}>
        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink
                as="a"
                href="#home"
                smooth={true}
                arial-label="home"
                data-tooltip="Home"
                onClick={onLinkClick}
              >
                <FaCampground className="react-icons" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                href="#about"
                smooth={true}
                aria-label="about"
                data-tooltip="01.About"
                onClick={onLinkClick}
              >
                <FaFemale className="react-icons" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                href="#skills"
                smooth={true}
                aria-label="skills"
                data-tooltip="02.Skills"
                onClick={onLinkClick}
              >
                <FaLaptopCode className="react-icons" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                href="#work"
                smooth={true}
                aria-label="work"
                data-tooltip="03.Work"
                onClick={onLinkClick}
              >
                <FaFolderOpen className="react-icons" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                href="#contact"
                smooth={true}
                aria-label="contact"
                data-tooltip="04.Contact"
                onClick={onLinkClick}
              >
                <FaPaperPlane className="react-icons" />
              </NavLink>
            </NavItem>
          </NavList>
          {/* <SocialList>
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
          </SocialList> */}
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
