import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Template from './components/Template';

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>react</Template>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

export default App;
