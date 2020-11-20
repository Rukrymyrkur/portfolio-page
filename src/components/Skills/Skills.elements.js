import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const SkillContainer = styled(Container)`

    ul > li {
        height: 70px;
        width: 70px;
        list-style: none;
        display: inline-block;
        margin: 10px 20px;

    }
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

`;