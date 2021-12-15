import styled from '@emotion/styled';
import { RiArrowDownSFill } from 'react-icons/ri';

const Label = styled.label<{ width: number | string }>`
  position: relative;
  display: inline-block;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    right: 32px;
    top: 45%;
    border: solid 10px transparent;
    border-top-color: rgb(0, 0, 0);
    border-radius: 0.125rem;
    cursor: pointer;
  }
`;

const Select = styled.select`
  padding: 16px 32px;
  width: 100%;
  outline: none;
  border-radius: 4px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export { Select, Label };
