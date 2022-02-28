import { ReactChild, ReactNode } from 'react';
import { Container, Wrapper } from './style';
import { createValidChildren } from './utils/filterChildren';
import { useCreateNewChildren } from './utils/useCreateNewChildren';

interface Props {
  children?: ReactNode;
  bgColor?: string;
  divider?: boolean;
  direction?: 'column';
  dividerColor?: string;
  activeColor?: string;
}

const BottomNavigation = ({
  children,
  bgColor = 'white',
  divider,
  dividerColor,
  direction,
  activeColor = 'white',
  ...props
}: Props) => {
  const validChildren = createValidChildren(children);
  const newChildren = useCreateNewChildren(validChildren as ReactChild[], direction);

  return (
    <Wrapper bgColor={bgColor} {...props}>
      <Container divider={divider} dividerColor={dividerColor} activeColor={activeColor}>
        {newChildren}
      </Container>
    </Wrapper>
  );
};
export default BottomNavigation;
