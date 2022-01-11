import React, { ReactElement, ReactNode } from 'react';
import { VALID_AVATAR } from '../constants';
import { AvatarGroupWrapper } from './style';

interface Props {
  children: ReactNode;
  overlapPx?: number;
}

const AvatarGroup = ({ children, overlapPx = 0 }: Props) => {
  const avatars = React.Children.toArray(children)
    .filter((element: ReactNode) => {
      if (React.isValidElement(element) && element.props.__TYPE === VALID_AVATAR) {
        return true;
      }
      return false;
    })
    .map((avatar, index, avatars) => {
      const item = avatar as ReactElement;
      return React.cloneElement(item, {
        ...item.props,
        style: {
          marginLeft: `${index === 0 ? 0 : -overlapPx}px`,
          zIndex: avatars.length - index,
        },
      });
    });
  return <AvatarGroupWrapper>{avatars}</AvatarGroupWrapper>;
};

export default AvatarGroup;
