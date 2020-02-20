import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const todoList = [
  { id: 0, text: '숨쉬기', done: true },
  { id: 1, text: '개발하기', done: false },
  { id: 2, text: '잠자기', done: false }
];

function TodoList() {
  return (
    <Wrapper>
      {todoList.map(todo => {
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
