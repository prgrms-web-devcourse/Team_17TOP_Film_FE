import AvatarGroup from './AvatarGroup';
import { VALID_AVATAR } from './constants';
import Img, { Props as ImgProps } from '../Img';

interface Props extends Omit<ImgProps, 'height' | 'width' | 'borderRadius' | 'block'> {
  size: number;
}

const Avatar = ({ size, lazy, threshold, src, alt, placeholder, ...props }: Props) => {
  return (
    <Img
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
