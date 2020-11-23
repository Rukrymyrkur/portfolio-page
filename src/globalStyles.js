import styled, { createGlobalStyle } from "styled-components";

const primaryFont = "'Playfair Display', serif";
const secondaryFont = "'Raleway', sans-serif";
const tertiaryFont = "'Inter', sans-serif";
const anotherFont = "";
const beforeAfterColor = "#a8a8a8";

export const GlobalStyle = createGlobalStyle`


*{
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 100%;

    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}

html{
    scroll-behavior: smooth;
}

body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    margin: 0;
    padding: 0;
    transition-property: color;
    transition: 0.7s ease;
    /* background-color: #e8e8e8; */
}
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 10px 100px;
    font-family: ${secondaryFont};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    

    
   h1{
    font-family: ${tertiaryFont};
    text-align: center;
    width: 100%;
    
    /* &:before,:after{
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
    } */
}

   h2{
    font-family: ${primaryFont};
    text-align: center;
    width: 100%;
    font-size: 2rem;
    padding-bottom: 50px;


    text-decoration: underline;
    text-decoration-thickness: 1rem;
    text-decoration-color: #0c3c78;
    text-underline-offset: -1.5rem;
    text-decoration-skip-ink: none;
/* 
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
    } */
}
   h3{
    font-family: ${tertiaryFont};
    width: 100%;
    font-size: 1.5rem;


    text-decoration: underline;
    text-decoration-thickness: 9px;
    text-decoration-color: #f30a49;
    text-underline-offset: -6px;
    text-decoration-skip-ink: none;
    /* background-color: ${({ theme }) => theme.body}; */

    /* &:before,:after{
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
    } */
}

   p{
    font-family: ${secondaryFont};
    width: 100%;

    /* &:before,:after{
        font-size: 1rem;
        font-family: 'Courier New', Courier, monospace;
        color: ${beforeAfterColor};
    }
    &:before{
        content: '<p>';
    }
    &:after{
        content: '</p>'
    } */
}
   a{
    font-family: ${secondaryFont};

}
   ul{
    font-family: ${primaryFont};


`;

export const lightTheme = {
  body: "#eee",
  text: "#111",
  textShadow: "#111",
  navcolor: "#eee",
};

export const darkTheme = {
  body: "#111",
  text: "#eee",
  textShadow: "#eee",
  navcolor: "#111",
};
