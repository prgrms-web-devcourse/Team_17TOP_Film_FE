import styled from '@emotion/styled';

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

const SelectItemWrapper = styled.ul<{ maxHeight: number }>`
  position: absolute;
  top: 0;
  width: 100%;
  list-style: none;
  overflow-y: scroll;
  background-color: white;
  z-index: 100;
  border: 1px solid black;
  border-radius: 4px;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  & {
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;
const SelectItem = styled.li`
  padding: 10px 10px;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray200};
  }
`;
export { Select, Label, SelectItemWrapper, SelectItem };
