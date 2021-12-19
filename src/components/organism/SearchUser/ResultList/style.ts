import styled from '@emotion/styled';

const ResultListContainer = styled.div`
  padding-left: 22px;
  padding-right: 22px;
  border: solid 1px;
  border-top: none;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray400};
  height: 300px;
  overflow-y: scroll;
`;

const ObserveDiv = styled.div`
  width: 100%;
  height: 30;
`;

export { ResultListContainer, ObserveDiv };
