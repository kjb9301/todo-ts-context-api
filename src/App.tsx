import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Template from './components/Template';
import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <TodoHeader />
        <TodoCreate />
      </Template>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

export default App;
