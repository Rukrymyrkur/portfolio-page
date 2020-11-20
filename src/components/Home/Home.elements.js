import styled from 'styled-components';
import { Container } from '../../globalStyles';


const baseColor = "#000000";
const otherColor = "#3e3636";
const anotherColor = "#d72323";
const justAnotherColor = "#f5eded";

export const HomeContainer = styled(Container)`
    min-height: 70vh;
    color: #000;
    ${Container}
`;

export const DescriptionContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    height: 100%;

`;

export const Description = styled.h1`
    font-weight: 700;
    line-height: 7rem;
    color: ${baseColor};
    z-index: 999;
    span{
        display: block;
    }
    &.top{
        margin-bottom: -20px;
    }
    &.bottom{
        margin-top: -20px;
    }

    @media only screen and (max-width: 600px){
        top: 50%;
        left: 50%;
        height: 100%;
        font-size: 3rem;
        overflow-x: hidden;
        line-height: 3rem;
}
    @media only screen and (min-width: 600px){
        top: 50%;
        left: 50%;
        height: 100%;
        font-size: 8rem;
}
`;


export const ImgWrapper = styled.div`
    align-self: center;
    justify-self: center;
    height: 100%;

    &.center-parallax{

        }
img{
    width: 40%;
}

`;

export const Directions = styled.span`
    position: absolute;
    
    color: #dedede;
    text-transform: uppercase;

    @media only screen and (max-width: 600px){
    bottom: 60px;
}
    @media only screen and (min-width: 600px){

    bottom: 30px;
}
`;