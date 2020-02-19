import React from 'react';
import styled from 'styled-components';

function TodoList() {
  return <Wrapper>list</Wrapper>;
}

const Wrapper = styled.div`
  border: 1px solid red;
  height: calc(100% - 170px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default TodoList;
