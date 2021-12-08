import AvatarGroup from './AvatarGroup';
import { RoundImg } from './style';
import PropTypes from 'prop-types';
import { VALID_AVATAR } from './constants';
interface Props {
  size: number;
  src: string;
  alt: string;
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
}

const Avatar = ({ lazy = false, size, src, alt, threshold = 0, placeholder = '' }: Props) => {
  return (
    <RoundImg
      lazy={lazy}
      threshold={threshold}
      src={src}
      alt={alt}
      placeholder={placeholder}
      height={size}
      width={size}
    />
  );
};

Avatar.defaultProps = {
  __TYPE: VALID_AVATAR,
};

Avatar.Group = AvatarGroup;
export default Avatar;
