import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const AboutContainer = styled(Container)`

    
${Container}
`;



export const DescriptionContainer = styled.div`
    margin: 0 auto;
    flex-direction: row;
    display: flex;
    align-items: center;
    max-width: 1200px;


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