import React, { useContext } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import { TodosStateContext } from '../contexts/TodosContext';

function TodoList() {
  const todoList = useContext(TodosStateContext);
  console.log(todoList);
  return (
    <Wrapper>
      {todoList &&
        todoList.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100% - 210px);
  padding: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default TodoList;
