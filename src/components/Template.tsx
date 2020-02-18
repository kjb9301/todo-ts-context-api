import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TemplateProps = {
  children: ReactNode;
};

function Template({ children }: TemplateProps) {
  console.log(children);
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 375px;
  height: 600px;
  background-color: #fff;
  margin: auto;
  margin-top: 100px;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

export default Template;
