import React, {useState, useRef, useEffect} from 'react';
import { useIntersection } from 'react-use';
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


    //Listening for when the user scrolls to component
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '300px',
        threshold: 1
    });
    //Changing background colors when scrolled to this component
    useEffect(() => {
        ((intersection && intersection.intersectionRatio) < 1) ?
        (document.body.style.backgroundColor = '')
        :
        (document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)')
    })
    //Changing text colors when scrolled to this component
    useEffect(() => {
        ((intersection && intersection.intersectionRatio) < 1) ?
        (document.body.style.color = 'black')
        :
        (document.body.style.color = 'white')
    })
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
      ContactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    return (
        <ContactContainer id="contact" onMouseMove={handleMouseMove}
        ref={intersectionRef}
        style={{ color: (intersection && intersection.intersectionRatio) < 1 ? 'black' : 'white' }}
            >
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
