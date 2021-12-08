import { useRef, useState } from 'react';
import { useInterSectionObserver } from './useInterSectingObserver';
import { Img } from './style';
interface Props {
  lazy?: boolean;
  threshold?: number;
  src: string;
  alt: string;
  placeholder: string;
  width: number;
  height: number;
  block?: boolean;
}

let observer: IntersectionObserver;

const Image = ({
  lazy = false,
  threshold = 0,
  src,
  alt,
  placeholder,
  height,
  width,
  block = true,
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useInterSectionObserver(imgRef, setLoaded, threshold, lazy, observer);

  return (
    <Img
      ref={imgRef}
      src={!lazy ? src : loaded ? src : placeholder}
      alt={alt}
      width={width}
      height={height}
      block={block}
    />
  );
};

export default Image;
