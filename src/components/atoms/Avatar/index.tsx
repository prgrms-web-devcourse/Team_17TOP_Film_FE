import AvatarGroup from './AvatarGroup';
import { RoundImg } from './style';
import { VALID_AVATAR } from './constants';

interface Props {
  size: number;
  src: string;
  alt: string;
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  block?: boolean;
  [x: string]: any;
}

const Avatar = ({
  lazy = false,
  size,
  src,
  alt,
  threshold = 0,
  placeholder = '',
  block,
  ...props
}: Props) => {
  return (
    <RoundImg
      {...props}
      lazy={lazy}
      threshold={threshold}
      src={src}
      alt={alt}
      placeholder={placeholder}
      height={size}
      width={size}
      block={block}
    />
  );
};

Avatar.defaultProps = {
  __TYPE: VALID_AVATAR,
};

Avatar.Group = AvatarGroup;
export default Avatar;
