import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const SkillContainer = styled(Container)`
height: 100%;
${Container}
`;

export const DescriptionContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 100%;
    margin: 0 auto;
    z-index: 100;
    padding: 50px;

        ul{
    li{
        display: inline;
        z-index: 10;
        padding: 50px;
        margin: 0 auto;
        color: #000;
    svg{
        height: 50px;
        width: 50px;
    }


       &:before{
          content: '';
          font-size: 2rem;
       }
    }

        }

`;



