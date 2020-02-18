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
`;

export default Template;
