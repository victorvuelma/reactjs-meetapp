import { createGlobalStyle } from 'styled-components';

import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  #root {
    background: linear-gradient(0, #402845, #22202C);
  }

  .react-datepicker__day--selected, 
  .react-datepicker__day--keyboard-selected, 
  .react-datepicker__time-list-item--selected {
    background: #f94d6a !important;
    transition: background 0.2s;

    &:hover{
      background: ${darken(0.05, '#f94d6a')} !important;
    }
  } 

`;
