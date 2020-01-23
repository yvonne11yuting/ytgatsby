import styled from 'styled-components';

export const MdxStyles = styled.div`
  h1, h2, h3, h4 {
    margin: 15px 0;
    font-weight: 500;
    color: #fff;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
    padding-bottom: 5px;
  }

  h3 {
    font-size: 20px;
    border-bottom: 2px solid #888;
    padding-bottom: 5px;
  }

  h4 {
    font-size: 18px
  }

  ul {
    margin: 10px 0;
    line-height: 1.5;
    list-style-type: disc;
    list-style-position: inside;
  }

  p {
    padding: 5px 0;
  }

  pre {
    background: #333;
    padding: 10px;
    border-radius: 3px;
  }

  code {
    background: none;
    line-height: 1.5;
  }
`;
