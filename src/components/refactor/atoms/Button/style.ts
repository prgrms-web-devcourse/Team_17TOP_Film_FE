import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonProps } from './types';
import { theme } from '../../../../styles/theme';

const ButtonStyle = styled.button<ButtonProps>`
  /* 공통 스타일(Default) */
  padding: 16px;
  width: auto;
  height: auto;
  background-color: none;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray900};
  border: 1px solid ${({ theme }) => theme.colors.gray900};
  border-radius: 4px;
  box-sizing: border-box;

  /* btnStyle */
  ${({ btnStyle }) => btnStyle === 'primary' && Primary};
  ${({ btnStyle }) => btnStyle === 'secondary' && Secondary};

  /* custom */
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
  color: ${({ color }) => (color ? color : '')};
  background: ${({ bgColor }) => (bgColor ? bgColor : '')};
  border: ${({ border }) => (border ? border : '')};
`;

const Primary = css`
  color: #fff;
  background-color: ${theme.colors.primary};
  border: none;
`;
const Secondary = css`
  color: ${theme.colors.gray700};
  background-color: ${theme.colors.gray200};
  border: none;
`;

export default ButtonStyle;
