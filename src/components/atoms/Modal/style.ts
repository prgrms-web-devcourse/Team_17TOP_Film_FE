import styled from '@emotion/styled';

const BlackBG = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;
export { BlackBG, Wrapper };
