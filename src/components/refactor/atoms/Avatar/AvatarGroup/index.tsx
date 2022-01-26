import React, { MouseEvent, ReactElement, ReactNode } from 'react';
import { VALID_AVATAR } from '../constants';
import { Circle, CircleGroup, Wrapper, AvatarWrapper } from './style';
import { Props as avatarProps } from '../index';
interface Props {
  children: ReactNode;
  overlapPx?: number;
  maxLen?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const AvatarGroup = ({ children, overlapPx = 0, maxLen, onClick }: Props) => {
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
          filter: `${maxLen && index === maxLen - 1 ? 'brightness(0.5)' : undefined}`,
        },
      });
    });

  return (
    <Wrapper onClick={onClick} style={{ width: 'fit-content' }}>
      <AvatarWrapper>{avatars}</AvatarWrapper>
      {maxLen && isCircleExist && (
        <CircleGroup size={size} marginLeft={size * maxLen - (maxLen - 1) * overlapPx - size}>
          <Circle size={size} />
          <Circle size={size} />
          <Circle size={size} />
        </CircleGroup>
      )}
    </Wrapper>
  );
};

export default AvatarGroup;
