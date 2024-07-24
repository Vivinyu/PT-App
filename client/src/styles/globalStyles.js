import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f4c3; /* Light green */
    color: #ffeb3b; /* Sand */
  }

  .container {
    width: 90%;
    margin: 0 auto;
    padding: 20px;
  }

  .button {
    background-color: #4caf50; /* Green */
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background-color: #45a049;
  }
`;
