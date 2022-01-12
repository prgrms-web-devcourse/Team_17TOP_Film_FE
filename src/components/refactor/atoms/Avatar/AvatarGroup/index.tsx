import React, { ReactElement, ReactNode } from 'react';
import { VALID_AVATAR } from '../constants';
import { Wrapper } from './style';

interface Props {
  children: ReactNode;
  overlapPx?: number;
  maxLen?: number;
}

const AvatarGroup = ({ children, overlapPx = 0, maxLen }: Props) => {
  const calcMargin = (overlayPx: number) => {
    if (typeof overlayPx === 'number') {
      return -overlapPx + 'px';
    }
    return -overlayPx;
  };
  const avatars = React.Children.toArray(children)
    .filter((element: ReactNode) => {
      if (React.isValidElement(element) && element.props.__TYPE === VALID_AVATAR) {
        return true;
      }
      return false;
    })
    .map((avatar, index, avatars) => {
      if (!maxLen) return;
      if (index > maxLen - 1) return;

      const item = avatar as ReactElement;
      return React.cloneElement(item, {
        ...item.props,
        style: {
          marginLeft: `${index === 0 ? 0 : calcMargin(overlapPx)}`,
          zIndex: avatars.length - index,
        },
        className: index < maxLen - 1 ? undefined : 'last-avatar',
      });
    });
  return <Wrapper>{avatars}</Wrapper>;
};

export default AvatarGroup;
