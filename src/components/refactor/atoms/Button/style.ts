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
  &:disabled {
    cursor: not-allowed;
  }

  /* btnStyle */
  ${({ btnStyle }) => btnStyle === 'primary' && Primary};
  ${({ btnStyle }) => btnStyle === 'secondary' && Secondary};

  /* size */
  ${({ size }) => size === 'small' && Small};
  ${({ size }) => size === 'medium' && Medium};
  ${({ size }) => size === 'full' && Full};

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
  &:disabled {
    background-color: #b0d5cc;
    cursor: not-allowed;
  }
`;
const Secondary = css`
  color: ${theme.colors.gray700};
  background-color: ${theme.colors.gray200};
  border: none;
  &:disabled {
    color: ${theme.colors.gray500};
    cursor: not-allowed;
  }
`;
const Small = css`
  font-size: 0.75rem;
  font-weight: 400;
  padding: ${theme.gaps.gap1} ${theme.gaps.gap2};
`;
const Medium = css`
  padding: ${theme.gaps.gap2} ${theme.gaps.gap3};
`;
const Full = css`
  padding: ${theme.gaps.gap1} auto;
  width: 100%;
`;
export default ButtonStyle;
