import styled, { createGlobalStyle } from "styled-components";

const primaryFont = "'Playfair Display', serif";
const secondaryFont = "'Raleway', sans-serif";
const tertiaryFont = "'Inter', sans-serif";
const anotherFont = "'Roboto Mono', monospace";

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
    ::selection {
      background: #ffb7b7; /* WebKit/Blink Browsers */
    }
    ::-moz-selection {
      background: #ffb7b7; /* Gecko Browsers */
    }
}

html{
    scroll-behavior: smooth;
    overflow-x: hidden;

}

body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    transition-property: color;
    transition: 0.7s ease;
    /* background-color: #e8e8e8; */

}
`;

export const SectionTitleContainer = styled.div``;

//Background element with outline
export const BackgroundText = styled.div`
  font-family: "Roboto Mono", sans-serif;
  font-size: 40rem;

  float: left;
  position: absolute;
  z-index: -5;
  opacity: 0.2;

  color: ${({ theme }) => theme.text};
  -webkit-text-fill-color: ${({ theme }) => theme.body};
  /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.text};
  /* filter: blur(2px); */

  display: none;
  @media screen and (max-width: 1024px) {
    font-size: 10rem;

    float: left;
    position: absolute;
    margin-left: 200px;
    margin-top: -5rem;
    overflow-x: hidden;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 10px 100px;
    font-family: ${secondaryFont};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px) {
    padding: 5px;
  }
    
   h1{
    font-family: ${tertiaryFont};
    text-align: center;
    width: 100%;
}

   h2{
    font-family: ${primaryFont};
    text-align: left;

    width: 100%;
    font-size: 4rem;
    padding-bottom: 50px;

    text-decoration: underline;
    text-decoration-thickness: 1rem;
    text-decoration-color: #0c3c78;
    text-underline-offset: -1.5rem;
    text-decoration-skip-ink: none;

    span{
        font-family: ${anotherFont};
        font-weight: 400;
        font-size: 2.5rem;
    }
    @media screen and (max-width: 600px) {
      text-decoration: none;
    font-size: 3rem;

  }
}

span{
        font-family: ${anotherFont};
    }


   h3{
    font-family: ${tertiaryFont};
    width: 100%;
    font-size: 1.5rem;


    text-decoration: underline;
    text-decoration-thickness: 9px;
    text-decoration-color: #f30a49;
    text-underline-offset: -10px;
    text-decoration-skip-ink: none;
    @media screen and (max-width: 600px) {
      text-decoration: none;
  }
}

   p{
    font-family: ${anotherFont};
    font-weight: 100;
    width: 100%;
}
   a{
    font-family: ${anotherFont};

}
   ul{
    font-family: ${primaryFont};

}
button{
  :focus{
    border: 5px solid ${({ theme }) => theme.text};
    color: 5px solid ${({ theme }) => theme.body};
  }
`;

export const lightTheme = {
  body: "#eee",
  transparentBody: "rgba(238,238,238, 0.7)",
  text: "#111",
  textShadow: "#111",
  navcolor: "#eee",
};

export const darkTheme = {
  body: "#111",
  transparentBody: "rgba(17, 17, 17, 0.7)",
  text: "#eee",
  textShadow: "#eee",
  navcolor: "#111",
};
