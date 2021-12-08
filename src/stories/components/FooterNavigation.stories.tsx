import styled from '@emotion/styled';
import React from 'react';
import { Navigation } from '../../components/atoms';
export default {
  title: 'Example/FooterNavigation',
  component: Navigation,
};

export const Default = () => {
  const contents = (
    <>
      <li>
        <a href="">홈으로</a>
      </li>
    </>
  );

  return (
    <>
      <Wrapper></Wrapper>
      안녕하세요
      <Navigation navType="footer" contents={contents} />
    </>
  );
};

export const Test1 = () => {
  const contents = (
    <>
      <li>
        <a href="">홈으로</a>
      </li>
      <li>
        <a href="">카메라</a>
      </li>
      <li>
        <a href="">마이페이지</a>
      </li>
    </>
  );

  return (
    <>
      <Wrapper></Wrapper>
      안녕하세요
      <Navigation navType="footer" contents={contents} />
    </>
  );
};
const Wrapper = styled.div`
  width: 500px;
  height: 1000px;
  background-color: red;
`;
