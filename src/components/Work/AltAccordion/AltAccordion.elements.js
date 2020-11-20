import styled from 'styled-components';
import {Container} from '../../../globalStyles';

export const Wrapper = styled(Container)`
  max-width: 70vw;
  width: 1000px;
  border-bottom: 2px solid black;
    .expand {
        background: transparent;
        height: 50px;
        width: 50px;
        border-radius: 100px;
        border: none;
        margin-top: 25px;
        display: block;
        float: right;
        margin-right: 30px;
        color: #000;
        font-size: 3rem;

        outline: none;
        cursor: pointer;
        &:hover{
          color: red;
        }
      }
  .accordion {
    background: transparent;
    overflow: hidden;
    position: relative;
    padding-bottom: 30px;
      .content {
        padding: 15px 30px;

        h3{
            font-size: 3rem;
            margin-bottom: 2rem;
            text-align: left;
        }
      }
  .accordion::after {
    content: "";
    height: 50px;
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;
  }
  }
  
  `;
  
  
  
  