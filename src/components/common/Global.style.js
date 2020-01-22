import { createGlobalStyle } from 'styled-components'
import * as restcss from 'reset-css/reset.css';

const GlobalStyle = createGlobalStyle`
  ${ restcss }
  html * {
    line-height: 22px;
    color: #F1EDE5;
    font-family: 'PingFang', 'Roboto', '微軟正黑體', sans-serif;
    background: #676767;
    letter-spacing: .5px;
    text-size-adjust: 100%;
    word-break: break-all;
  }

  a {
    /* color: #95A4A7; */
    color: #efefef;
    text-decoration: none;
  }
`;

export default GlobalStyle;
