import styled from '@emotion/styled';
import { ButtonProps } from './types';

const PrimaryBtn = styled.button<ButtonProps>`
  padding: 16px;
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  border-radius: 4px;
`;
const SecondaryBtn = styled.button<ButtonProps>`
  padding: 16px;
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  background-color: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.gray700};
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  border-radius: 4px;
`;
const DefaultBtn = styled.button<ButtonProps>`
  padding: 16px;
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  background-color: none;
  color: ${({ theme }) => theme.colors.gray900};
  border: 1px solid ${({ theme }) => theme.colors.gray900};
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  border-radius: 4px;
`;
export { PrimaryBtn, SecondaryBtn, DefaultBtn };
