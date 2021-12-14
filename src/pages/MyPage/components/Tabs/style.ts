import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  margin-top: 44px;
`;
const Tab = styled.div`
  padding: 10px 0;
  width: 50%;
  text-align: center;
  &.active {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
  }
`;
export { Wrapper, Tab };
