import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonProps } from './types';
import { theme } from '../../../../styles/theme';

const ButtonStyle = styled.button<ButtonProps>`
  /* 공통 스타일(Default) */
  display: flex;
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
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  path {
    fill: ${({ theme }) => theme.colors.gray900};
  }

  /* btnStyle */
  ${({ btnStyle }) => btnStyle === 'primary' && Primary};
  ${({ btnStyle }) => btnStyle === 'secondary' && Secondary};

  /* size */
  ${({ size }) => size === 'small' && Small};
  ${({ size }) => size === 'medium' && Medium};
  ${({ size }) => size === 'full' && Full};

  /* hover */
  ${({ hover }) => (hover ? HoverAnimation : '')};

  /* custom */
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
  color: ${({ color }) => (color ? color : '')};
  background: ${({ bgColor }) => (bgColor ? bgColor : '')};
  border: ${({ border }) => (border ? border : '')};
  border-radius: ${({ borderRadius }) => (borderRadius ? '4px' : 0)};
`;

const Primary = css`
  color: #fff;
  background-color: ${theme.colors.primary};
  border: none;
  path {
    fill: #fff;
  }
  &:disabled {
    background-color: #b0d5cc;
    cursor: not-allowed;
  }
`;

const Secondary = css`
  color: ${theme.colors.gray700};
  background-color: ${theme.colors.gray200};
  border: none;
  path {
    fill: ${theme.colors.gray700};
  }
  &:disabled {
    color: ${theme.colors.gray500};
    cursor: not-allowed;
  }
`;

const Small = css`
  gap: calc(${theme.gaps.gap1} / 2);
  font-size: 0.75rem;
  font-weight: 400;
  padding: ${theme.gaps.gap1} ${theme.gaps.gap2};
`;
const Medium = css`
  gap: ${theme.gaps.gap1};
  padding: ${theme.gaps.gap2} ${theme.gaps.gap3};
`;
const Full = css`
  gap: ${theme.gaps.gap1};
  padding: ${theme.gaps.gap1} auto;
  width: 100%;
`;
const HoverAnimation = css`
  &:hover {
    box-shadow: ${theme.shadows.shadow1};
    transform: translateY(-5%);
    transition: all 0.1s ease-out;
  }
`;
export default ButtonStyle;
