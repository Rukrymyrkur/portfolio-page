import React, {useState, useRef, useEffect} from 'react';
import { useIntersection } from 'react-use';
import { useInView } from 'react-intersection-observer';
import { ContactContainer, ContactModal } from './Contact.elements';
import {useSpring, useTransition, a} from 'react-spring';

const trans = (x, y) => `translate(${x}px,${y}px) translate(${x}px,${y}px)`;

// Modal.setAppElement('#root')
const Contact = () => {
    //Opening email contact modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
    //Modal animations
    const transitions = useTransition(modalIsOpen, null, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" }
  });
//Listening for when the user scrolls to component - useInview
    const [intersectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 1,
        rootMargin: '500px 10px 100px 10px '
    });
    





    //Animated button
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 200, friction: 100 }
      }));

    const handleMouseMove = (e) => {
        set({
          xy: [
            (e.clientX * 50) / window.innerWidth,
            (e.clientY * 50) / window.innerHeight
          ]
        });
      };
      //Overlay behind Modal 
      ContactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.7)';

    return (
        <ContactContainer id="contact" onMouseMove={handleMouseMove}>
            <a.button arial-label="write me" className="write-me" style={{transform: props.xy.interpolate(trans)}} onClick={() => setModalIsOpen(true)}>Say Hello</a.button>   
            <ContactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
            onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
            onAfterClose={() => { document.body.removeAttribute('style'); }}
            >
                <a.div style={{props}}>
                    <form className="form">
                        <h1>Contact form</h1>
                        <label>Name</label>
                        <input placeholder="name"/>
                        <label>Email</label>
                        <input placeholder="email"/>
                        <label>Message</label>
                        <textarea placeholder="message" />
                        <button type="submit">Submit</button>
                    </form>
                    <button aria-label="close" onClick={() => setModalIsOpen(false)}>Close</button>
                </a.div>
            </ContactModal>
        </ContactContainer>
    )
}

export default Contact