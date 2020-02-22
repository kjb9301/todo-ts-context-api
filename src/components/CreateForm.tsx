import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { TodosDispatchContext } from '../contexts/TodosContext';

function CreateForm() {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useContext(TodosDispatchContext);
  const onCreate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch &&
      dispatch({
        type: 'CREATE',
        text: todoValue
      });
    setTodoValue('');
  };
  return (
    <Form onSubmit={onCreate}>
      <Input type='text' name='todo' placeholder='할 일을 입력 후, Enter를 누르세요' value={todoValue} onChange={e => setTodoValue(e.target.value)} />
    </Form>
  );
}

const Form = styled.form`
  width: 90%;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  padding: 12px;
  box-sizing: border-box;
  font-size: 18px;
`;

export default CreateForm;
