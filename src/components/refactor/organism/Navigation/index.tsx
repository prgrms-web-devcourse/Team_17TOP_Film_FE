import React, { ReactElement, ReactNode } from 'react';
import { Container, Wrapper } from './style';
interface Props {
  children?: ReactNode;
  bgColor?: string;
}
const Navigation = ({ children, bgColor = 'white', ...props }: Props) => {
  const navLists = React.Children.toArray(children)
    .filter((element: ReactNode) => {
      if (React.isValidElement(element)) {
        return true;
      }
      return false;
    })
    .map((content, index) => <li key={index}>{React.cloneElement(content as ReactElement)}</li>);
  return (
    <Wrapper bgColor={bgColor} {...props}>
      <Container>{navLists}</Container>
    </Wrapper>
  );
};
export default Navigation;
