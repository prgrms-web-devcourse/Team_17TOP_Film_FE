import { VALID_AVATAR } from './constants';
import Img from '../Img';
import { ImgHTMLAttributes, MouseEvent } from 'react';
import AvatarGroup from './AvatarGroup';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  size: number;
  lazy?: boolean;
  threshold?: number;
  src: string;
  alt: string;
  placeholder?: string;
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
