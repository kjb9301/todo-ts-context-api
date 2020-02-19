import React from 'react';
import styled from 'styled-components';

import CreateForm from './CreateForm';

function TodoCreate() {
  return (
    <Wrapper>
      <CreateForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
`;

export default TodoCreate;
