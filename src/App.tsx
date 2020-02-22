import React, { createContext } from 'react';
import { createGlobalStyle } from 'styled-components';

import Template from './components/Template';
import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { TodosContextProvider } from './contexts/TodosContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <TodosContextProvider>
          <TodoHeader />
          <TodoCreate />
          <TodoList />
        </TodosContextProvider>
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
