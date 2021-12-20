import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  padding: 0;
  left: ${({ theme }) => theme.gaps.default_margin};
  cursor: pointer;
`;

export { Wrapper };
