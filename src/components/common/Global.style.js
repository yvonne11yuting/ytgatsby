import { createGlobalStyle } from 'styled-components'
import * as restcss from 'reset-css/reset.css';

const GlobalStyle = createGlobalStyle`
  ${ restcss }
  html * {
    color: #676767;
    font-family: 'PingFang', 'Roboto', '微軟正黑體', sans-serif;
    background: #F1EDE5;
  }

  a {
    /* color: #95A4A7; */
    color: #676767;
    text-decoration: none;
  }
`;

export default GlobalStyle;
