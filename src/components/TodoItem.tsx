import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

type TodoItemProps = {
  todo: Todo;
};

type Todo = {
  text: string;
  done: boolean;
};

function TodoItem({ todo }: TodoItemProps) {
  const { text, done } = todo;
  return (
    <Wrapper>
      <CheckBox done={done}>{done && <MdDone />}</CheckBox>
      <TextBox done={done}>{text}</TextBox>
      <DeleteBox>
        <MdDelete />
      </DeleteBox>
    </Wrapper>
  );
}

const DeleteBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  display: none;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

const Wrapper = styled.div`
  padding: 12px 0;
  display: flex;
  align-items: center;

  &:hover {
    ${DeleteBox} {
      display: initial;
    }
  }
`;

const CheckBox = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #00bfff;
      color: #00bfff;
    `}
`;

const TextBox = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 20px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default TodoItem;
