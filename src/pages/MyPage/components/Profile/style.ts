import styled from '@emotion/styled';
import { Text } from '../../../../components/atoms';

const Wrapper = styled.div`
  display: flex;
  margin: ${({ theme: { gaps } }) => `30px ${gaps.default_margin} 0`};
  gap: ${({ theme: { gaps } }) => gaps.gap2};
`;

const Nickname = styled(Text)`
  margin-bottom: ${({ theme: { gaps } }) => gaps.gap2};
`;
export { Wrapper, Nickname };
