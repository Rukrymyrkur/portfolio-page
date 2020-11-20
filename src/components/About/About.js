import React, {useEffect, useRef} from 'react'
import { AboutContainer, Description, DescriptionContainer, TitleContainer } from './About.elements'
import { useInView } from 'react-intersection-observer';
import { a, useSpring } from 'react-spring';
import pic3 from '../../images/pic3.JPG';
import { Parallax } from 'react-scroll-parallax';


const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 1,
        rootMargin: '500px 10px 100px 10px '
    });
    
    const props = useSpring({
         opacity: inView ? 1 : 0,
         transform: inView ? 'scale(1)' : 'scale(0.95)'
    })


    return (
        <>
                <AboutContainer id="about">
                <a.div ref={ref} style={props}>
                    <TitleContainer>
                        <h2>1. About</h2>
                    </TitleContainer>
                    <DescriptionContainer>
                            <img src={pic3} alt="" />
                        <Description>
                                <span>Getting really good at what I do is my goal. I want to become a professional developer</span>                    
                                <span>Coding is just what I love and it gives me feelings of happiness and fullfillment</span>                    
                                <span>I am searching for a place where I can become a more important part of a dev team!</span>  
                        </Description>
                    </DescriptionContainer>
                    </a.div>
                </AboutContainer>
        </>
    )
}

export default About
