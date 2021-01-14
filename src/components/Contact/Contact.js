import React, { useState } from "react";
import {
  ContactContainer,
  ContactModal,
  ContactBox,
  ContactOther,
  ButtonContainer,
  TitleContainer,
  SocialContact,
  SocialLink,
} from "./Contact.elements";
import { useInView } from "react-intersection-observer";
import { useSpring, a } from "react-spring";
import { FaFacebookMessenger, FaGithub, FaLinkedin } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";

const trans = (x, y) => `translate(${x}px,${y}px) translate(${x}px,${y}px)`;

// Modal.setAppElement('#root')
const Contact = () => {
  //contact form
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (event) => {
    event.preventDefault();

    console.log("We will fill this up shortly.");
    //code to trigger sending email
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
    // rootMargin: "0px 0px 0px 50px",
  });

  //slide in title
  const { slideIn, slideInOpacity } = useSpring({
    slideIn: inView ? `translate(0px, 0px)` : `translate(-10px, -10px)`,
    slideInOpacity: inView ? 1 : 0,
  });
  //Opening email contact modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //Animated button
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 200, friction: 100 },
  }));

  const handleMouseMove = (e) => {
    set({
      xy: [
        (e.clientX * 50) / window.innerWidth,
        (e.clientY * 50) / window.innerHeight,
      ],
    });
  };
  //Overlay behind Modal
  ContactModal.defaultStyles.overlay.backgroundColor = "rgba(17, 17, 17, 0.7)";
  // ContactModal.defaultStyles.overlay.backgroundColor = `${({ theme }) =>
  //   theme.transparentBody}`;
  ContactModal.defaultStyles.overlay.zIndex = "1000";
  // document.body.style.filter = "blur(5px)";
  //           ContactModal.defaultStyles.overlay.filter = "blur(0px)";

  return (
    <>
      <ContactContainer id="contact" onMouseMove={handleMouseMove}>
        <a.div
          style={{
            transform: slideIn,
            opacity: slideInOpacity,
          }}
        >
          <TitleContainer ref={ref}>
            <h2>
              <span>04.</span>Contact
            </h2>
          </TitleContainer>
        </a.div>
        <ContactBox>
          <ButtonContainer>
            <a.button
              arial-label="write me"
              className="write-me"
              style={{ transform: props.xy.interpolate(trans) }}
              onClick={() => setModalIsOpen(true)}
            >
              Say Hello
            </a.button>
          </ButtonContainer>
          <ContactOther>
            <h3>Everything begins with a hello!</h3>
            <span>&gt; Would you have any ideas how to improve this site?</span>
            <span>&gt; Would like to suggest job opportunities?</span>
            <span>&gt; Want to chat? </span>
            <span>Anything!</span>
          </ContactOther>
          <SocialContact>
            <SocialLink href="https://github.com/Rukrymyrkur" target="_blank">
              <FaGithub />
              Github
            </SocialLink>
            <SocialLink href="/" target="_blank">
              <FaLinkedin />
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.messenger.com/t/neringasurm"
              target="_blank"
            >
              <FaFacebookMessenger />
              Messenger
            </SocialLink>
          </SocialContact>
        </ContactBox>
        <ContactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onAfterOpen={() => {
            document.body.style.overflow = "hidden";
          }}
          onAfterClose={() => {
            document.body.removeAttribute("style");
          }}
        >
          <form onSubmit={sendEmail}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={state.name}
                placeholder="Enter name"
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={state.email}
                placeholder="Enter email"
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={state.subject}
                placeholder="Enter subject"
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={state.message}
                rows="3"
                placeholder="Enter message"
                onChange={onInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
          <button aria-label="close" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </ContactModal>
      </ContactContainer>
    </>
  );
};

export default Contact;
