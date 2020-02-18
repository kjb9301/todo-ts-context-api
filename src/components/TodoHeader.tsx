import React from 'react';
import styled from 'styled-components';

function TodoHeader() {
  return (
    <Wrapper>
      <span>할 일 목록</span>
      <span>날짜</span>
      <span>남은 개수</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #bae0f8;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default TodoHeader;
