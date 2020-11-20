import React, {useRef, useState, useEffect} from 'react';
import { StyledBurger, NavLink, NavMenu, BurgerContainer } from './AltNavbar.elements';
import {useTrail, a} from 'react-spring';

// function Trail({open, children, ...props}){
//     const items = React.Children.toArray(children)
//     const trail = useTrail(items.length, {
//         config: { mass: 5, tension: 2000, friction: 200 },
//         opacity: open ? 1 : 0,
//         x: open ? 0 : 20,
//         height: open ? 110 : 0,
//         from: { opacity: 0, x: 20, height: 0 },
//     })
//   return (
//     <div className="trails-main" {...props}>
//       <div>
//         {trail.map(({ x, height, ...rest }, index) => (
//           <a.div
//             key={items[index]}
//             className="trails-text"
//             style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
//             <a.div style={{ height }}>{items[index]}</a.div>
//           </a.div>
//         ))}
//       </div>
//     </div>
//   )
// }

const Menu = ({ open, setOpen}) => {
    return (
        <>
            <NavMenu open={open}>
                    <NavLink to="home" smooth={true} arial-label="home" onClick={() => setOpen(!open)}>Home</NavLink>
                    <NavLink to="about" smooth={true} aria-label="about"  onClick={() => setOpen(!open)}>1. About</NavLink>
                    <NavLink to="skills" smooth={true} aria-label="skills"  onClick={() => setOpen(!open)}>2. Skills</NavLink>
                    <NavLink to="work" smooth={true} aria-label="work"  onClick={() => setOpen(!open)}>3. Work</NavLink>
                    <NavLink to="contact" smooth={true} aria-label="contact"  onClick={() => setOpen(!open)}>4. Contact</NavLink>
                <p>This is a short description</p>
            </NavMenu>
      </>
    )
  }

// Menu Icon
const Burger = ({ open, setOpen }) => {
    return (
        <BurgerContainer>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
      </BurgerContainer>
    )
  }

// Main Component
const AltNavbar = () => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Burger open={open} setOpen={setOpen} />
            <Menu  open={open} setOpen={setOpen} />
        </>
    )
}

export default AltNavbar



