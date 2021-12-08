import styled from '@emotion/styled';
import React from 'react';
import { Navigation } from '../../components/atoms';
import { IoChevronBackOutline } from 'react-icons/io5';
import { BsTrashFill } from 'react-icons/bs';
export default {
  title: 'Example/Navigation',
  component: Navigation,
};

export const Default = () => {
  const leftSide = (
    <>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
    </>
  );
  const rightSide = (
    <>
      <li>
        <a href="">
          <BsTrashFill />
        </a>
      </li>
    </>
  );
  return (
    <Wrapper>
      <Navigation navType="header" leftSide={leftSide} rightSide={rightSide} />
    </Wrapper>
  );
};

export const Test1 = () => {
  const leftSide = (
    <>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
    </>
  );
  const rightSide = (
    <>
      <li>
        <a href="">
          <BsTrashFill />
        </a>
      </li>
    </>
  );
  return (
    <Wrapper>
      <Navigation navType="header" leftSide={leftSide} rightSide={rightSide} gap={20} />
    </Wrapper>
  );
};

export const Test2 = () => {
  const leftSide = (
    <>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
    </>
  );
  const middleSide = (
    <>
      <li>
        <a href="">페이지 위치</a>
      </li>
    </>
  );
  return (
    <Wrapper>
      <Navigation navType="header" leftSide={leftSide} middleSide={middleSide} gap={20} />
    </Wrapper>
  );
};

export const Test3 = () => {
  const rightSide = (
    <>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
    </>
  );
  const middleSide = (
    <>
      <li>
        <a href="">페이지 위치</a>
      </li>
    </>
  );
  return (
    <Wrapper>
      <Navigation navType="header" rightSide={rightSide} middleSide={middleSide} gap={20} />
    </Wrapper>
  );
};

export const Test4 = () => {
  const rightSide = (
    <>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
    </>
  );
  const leftSide = (
    <>
      <li>
        <a href="">
          <IoChevronBackOutline />
        </a>
      </li>
    </>
  );
  const middleSide = (
    <>
      <li>
        <a href="">페이지 위치</a>
      </li>
    </>
  );
  return (
    <Wrapper>
      <Navigation
        navType="header"
        leftSide={leftSide}
        rightSide={rightSide}
        middleSide={middleSide}
        gap={20}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;
