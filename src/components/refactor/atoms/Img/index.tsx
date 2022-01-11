import { useRef, useState } from 'react';
import { useInterSectionObserver } from './useInterSectingObserver';
import { Image } from './style';

export interface Props {
  lazy?: boolean;
  threshold?: number;
  src: string;
  alt: string;
  placeholder?: string;
  width: number | string;
  height: number | string;
  block?: boolean;
  borderRadius?: string;
  circle?: boolean;
  [x: string]: any;
}

let observer: IntersectionObserver;

const Img = ({
  lazy = false,
  threshold = 0,
  src,
  alt,
  placeholder = '',
  height,
  width,
  borderRadius,
  block = true,
  circle,
  ...props
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useInterSectionObserver(imgRef, setLoaded, threshold, lazy, observer);

  return (
    <Image
      {...props}
      ref={imgRef}
      src={!lazy ? src : loaded ? src : placeholder}
      alt={alt}
      width={width}
      height={height}
      block={block}
      borderRadius={circle ? '50%' : borderRadius}
    />
  );
};

export default Img;
