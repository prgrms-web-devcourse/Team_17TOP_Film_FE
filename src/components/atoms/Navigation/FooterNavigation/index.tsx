import { ReactNode } from 'react';
import { Container, Wrapper } from './style';

export interface Props {
  contents?: ReactNode;
  bgColor?: string;
}
const FooterNavigation = ({ contents, bgColor }: Props) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Container>{contents}</Container>
    </Wrapper>
  );
};
export default FooterNavigation;
