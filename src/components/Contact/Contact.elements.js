import styled from 'styled-components';
import {Container} from '../../globalStyles';
import Modal from 'react-modal';

export const ContactContainer = styled(Container)`
    width: 100%;
    min-height: 50vh;
    transition: 0.7s ease;

    button {
    &.write-me{
        height: 200px;
        width: 200px;
        border-radius: 100px;
        cursor: pointer;
        font-size: 2rem;
        text-transform: uppercase;
        background-color: black;
        color: white;
        border: none;
    }
}
`;

export const ContactModal = styled(Modal)`
    bottom: -50px;
    background-color: #000;
    width: 70vw;
    height: 50vh;
    outline: none;
    padding: 50px;

`
