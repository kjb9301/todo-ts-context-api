import React from 'react';
import styled from 'styled-components';

function CreateForm() {
  return (
    <Form>
      <Input type='text' name='todo' placeholder='할 일을 입력 후, Enter를 누르세요' />
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
