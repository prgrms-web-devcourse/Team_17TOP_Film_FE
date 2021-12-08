import { RoundImg } from './style';

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

export default Avatar;
