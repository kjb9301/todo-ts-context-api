import React from 'react';
import styled from 'styled-components';

function CreateForm() {
  return (
    <Form>
      <Input type='text' placeholder='할 일을 입력 후, Enter를 누르세요' />
    </Form>
  );
}

const Form = styled.form`
  width: 90%;
  /* height: 30px; */
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  padding: 12px;
`;

export default CreateForm;
