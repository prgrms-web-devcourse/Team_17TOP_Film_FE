import styled from '@emotion/styled';
import { Header } from '../../components/atoms';
import { SelectBox } from './components';

const MyPageHeader = styled(Header)`
  z-index: 100;
`;
const Body = styled.div`
  padding: 52px 0px;
`;
const MyPageSelectBox = styled(SelectBox)`
  margin: 16px 20px;
`;
export { Body, MyPageHeader, MyPageSelectBox };
