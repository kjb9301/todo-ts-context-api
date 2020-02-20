import React from 'react';
import styled from 'styled-components';

function TodoHeader() {
  const today = new Date();
  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
  return (
    <Wrapper>
      <HeaderText>투두리스트</HeaderText>
      <DateText>{dateString}</DateText>
      <UndoneText>할 일 0개 남음</UndoneText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
`;

const HeaderText = styled.h1`
  background-color: #bae0f8;
  padding: 12px 0;
  margin-bottom: 20px;
  color: #6e6e6e;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
`;

const DateText = styled.h2`
  padding: 0 20px;
  margin-bottom: 15px;
  color: #868e96;
  font-size: 20px;
`;

const UndoneText = styled.span`
  color: #81daf5;
  padding: 0 20px;
  font-size: 18px;
  font-weight: bold;
`;

export default TodoHeader;
