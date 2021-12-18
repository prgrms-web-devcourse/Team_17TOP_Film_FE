import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  margin-top: 44px;
`;
const Tab = styled.div<{ isSelected: boolean }>`
  padding: 10px 0;
  width: 50%;
  text-align: center;
  border-bottom: 2px solid
    ${({ theme: { colors }, isSelected }) => (isSelected ? colors.primary : undefined)};
`;
export { Wrapper, Tab };
