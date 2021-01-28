import React, { useState, useEffect } from "react";
import {
  ContactContainer,
  ContactModal,
  ContactBox,
  ContactOther,
  ButtonContainer,
  TitleContainer,
  SocialContact,
  SocialLink,
  StyledForm,
  Button,
  MessageArea,
  Input,
  Close,
} from "./Contact.elements";
import { useInView } from "react-intersection-observer";
import { useSpring, a } from "react-spring";
import { FaFacebookMessenger, FaGithub, FaLinkedin } from "react-icons/fa";

const trans = (x, y) => `translate(${x}px,${y}px) translate(${x}px,${y}px)`;

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
      setModalIsOpen(true);
    }
  }, []);

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
            <SocialLink
              href="https://www.linkedin.com/in/neringa-surmilavi%C4%8Di%C5%ABt%C4%97-56b522202/"
              target="_blank"
            >
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
          // onAfterOpen={() => {
          //   document.body.style.overflow = "hidden";
          // }}
          // onAfterClose={() => {
          //   document.body.removeAttribute("style");
          // }}
        >
          <Close aria-label="close" onClick={() => setModalIsOpen(false)}>
            ✘
          </Close>
          <StyledForm
            name="contact"
            method="POST"
            action="/contact/?success=true"
            data-netlify="true"
          >
            <Input type="hidden" name="form-name" value="contact" />
            <h2>Write me!</h2>
            <p>
              I'd appreciate any feedback, job opportunities, or just an
              invitation to chat!
            </p>
            <label for="email">Your email:</label>
            <Input
              required
              type="email"
              name="email"
              placeholder="email@domain.com"
            />
            <label for="name">Your name:</label>
            <Input
              required
              type="name"
              name="name"
              placeholder="e.g. John Doe"
            />
            <label for="message">Message:</label>
            <MessageArea
              required
              id="message"
              name="message"
              placeholder="Type here"
            />
            <Button type="submit">Send message</Button>
            {success && <p>Thank You!</p>}
          </StyledForm>
        </ContactModal>
      </ContactContainer>
    </>
  );
};

export default Contact;
