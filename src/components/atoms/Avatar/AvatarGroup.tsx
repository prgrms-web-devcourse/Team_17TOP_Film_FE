import React, { ReactNode } from 'react';
import { VALID_AVATAR } from './constants';

interface Props {
  children: ReactNode;
}

const AvatarGroup = ({ children }: Props) => {
  const avatars = React.Children.toArray(children).filter((element: ReactNode) => {
    if (React.isValidElement(element) && element.props.__TYPE === VALID_AVATAR) {
      return true;
    }
    return false;
  });
  return <div>{children}</div>;
};
export default AvatarGroup;
