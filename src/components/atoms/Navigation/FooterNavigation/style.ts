import styled from '@emotion/styled';

const Wrapper = styled.nav<{ bgColor?: string }>`
  position: sticky;
  width: 100%;
  height: 52px;
  bottom: 0;
  left: 0;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
`;
const Container = styled.ul`
  height: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export { Wrapper, Container };
