import styled from 'styled-components';
import { Container, ContainerBackground } from '../../globalStyles';

export const AboutContainer = styled(Container)`
    color: #fff;
    padding: 10px;
${Container}
`;

export const AboutContainerBackground = styled(ContainerBackground)`
    height: 100%;
    
@media screen and (max-width: 1024px){
            height: 100vh;
    }

`;

export const DescriptionContainer = styled.div`
    margin: 0 auto;
    flex-direction: row;
    display: flex;
    align-items: center;


    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
    
img{
    border-radius: 150px;
    max-height: 300px;
    max-width: 300px;
}
`;

export const Description = styled.p`
    z-index: 100;
    padding: 50px;
    div > span {
        display: block;
    }
`;

export const TitleContainer = styled.div`
    margin-top: 100px;
    padding: 10px;
    /* border-bottom: 8px solid white;
    border-left: 8px solid white;
    border-top: 8px solid black;
    border-right: 8px solid black;
    transform: skew(-5deg); */
`