import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
    outline: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto','Poppins', sans-serif;
}
body {
    -webkit-overflow-scrolling: touch;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: #7474BF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#root{
    min-height: 100vh;
  }
`;
