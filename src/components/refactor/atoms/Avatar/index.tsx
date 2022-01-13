import { VALID_AVATAR } from './constants';
import Img, { Props as ImgProps } from '../Img';
import { MouseEvent } from 'react';
import AvatarGroup from './AvatarGroup';

export interface Props extends Omit<ImgProps, 'height' | 'width' | 'borderRadius' | 'block'> {
  size: number;
  onClick?: (event: MouseEvent<HTMLImageElement>) => void;
}

const Avatar = ({ size, lazy, threshold, src, alt, placeholder, onClick, ...props }: Props) => {
  return (
    <Img
      onClick={onClick}
      {...props}
      lazy={lazy}
      threshold={threshold}
      src={src}
      alt={alt}
      placeholder={placeholder}
      height={size}
      width={size}
      circle
    />
  );
};
Avatar.defaultProps = {
  __TYPE: VALID_AVATAR,
};
Avatar.Group = AvatarGroup;
export default Avatar;
