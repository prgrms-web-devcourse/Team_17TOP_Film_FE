import React, { ReactElement, ReactNode } from 'react';
import { VALID_AVATAR } from '../constants';
import { Circle, CircleGroup, Wrapper } from './style';
import { Props as avatarProps } from '../index';
interface Props {
  children: ReactNode;
  overlapPx?: number;
  maxLen?: number;
}

const AvatarGroup = ({ children, overlapPx = 0, maxLen }: Props) => {
  const childrenArr = React.Children.toArray(children);

  const {
    props: { size },
  } = childrenArr[0] as { props: avatarProps };

  const calcMargin = (overlayPx: number) => {
    if (typeof overlayPx === 'number') {
      return -overlapPx + 'px';
    }
    return -overlayPx;
  };
  const calcAvatarClassName = (idx: number) => {
    if (!maxLen) return 'avatar';
    if (idx === maxLen - 1) return 'last-avatar';
    return 'avatar';
  };
  const isCircleExist = maxLen && childrenArr.length > maxLen;

  const avatars = childrenArr
    .filter((element: ReactNode) => {
      if (React.isValidElement(element) && element.props.__TYPE === VALID_AVATAR) {
        return true;
      }
      return false;
    })
    .map((avatar, index) => {
      if (maxLen && index > maxLen - 1) return;

      const item = avatar as ReactElement;
      return React.cloneElement(item, {
        ...item.props,
        style: {
          marginLeft: `${index === 0 ? 0 : calcMargin(overlapPx)}`,
          zIndex: index + 1,
        },
        className: `${calcAvatarClassName(index)}`,
      });
    });

  return (
    <div>
      <Wrapper>{avatars}</Wrapper>
      {maxLen && isCircleExist && (
        <CircleGroup size={size} marginLeft={size * maxLen - (maxLen - 1) * overlapPx - size}>
          <Circle size={size} />
          <Circle size={size} />
          <Circle size={size} />
        </CircleGroup>
      )}
    </div>
  );
};

export default AvatarGroup;
