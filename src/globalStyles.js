import styled, {createGlobalStyle} from 'styled-components';

const primaryFont = "'Playfair Display', serif";
const secondaryFont = "'Raleway', sans-serif";
const tertiaryFont = "'Inter', sans-serif";
const beforeAfterColor = '#a8a8a8';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 100%;

}

html{
    scroll-behavior: smooth;
}

body{
        margin: 0;
        padding: 0;
        transition-property: color;
        transition: 0.7s ease;
        /* background-color: #e8e8e8; */
}
`

export const Container = styled.div`
    margin: 0 auto;
    padding: 10px 50px;
    font-family: ${secondaryFont};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    
   h1{
    font-family: ${tertiaryFont};
    text-align: center;
    width: 100%;
    
    &:before,:after{
        font-size: 1rem;
        font-family: 'Courier New', Courier, monospace;
        display: inline-block;
        color: ${beforeAfterColor};
    }
    &:before{
        content: '<h1>';
    }
    &:after{
        content: '</h1>'
    }
}

   h2{
    font-family: ${tertiaryFont};
    text-align: center;
    width: 100%;
    font-size: 2rem;

    &:before,:after{
        margin: 0 10px;
        font-size: 1rem;
        font-family: 'Courier New', Courier, monospace;
        display: inline-block;
        color: ${beforeAfterColor};
    }
    &:before{
        content: '<h2>';
    }
    &:after{
        content: '</h2>'
    }
}
   h3{
    font-family: ${tertiaryFont};
    width: 100%;
    font-size: 1.5rem;

    &:before,:after{
        font-size: 1rem;
        font-family: 'Courier New', Courier, monospace;
        display: inline-block;
        color: ${beforeAfterColor};
    }
    &:before{
        content: '<h3>';
    }
    &:after{
        content: '</h3>'
    }
}

   p{
    font-family: ${secondaryFont};
    width: 100%;

    &:before,:after{
        font-size: 1rem;
        font-family: 'Courier New', Courier, monospace;
        color: ${beforeAfterColor};
    }
    &:before{
        content: '<p>';
    }
    &:after{
        content: '</p>'
    }
}
   a{
    font-family: ${secondaryFont};
    width: 100%;
}
   ul{
    font-family: ${primaryFont};
    width: 100%;
`



export default GlobalStyle

