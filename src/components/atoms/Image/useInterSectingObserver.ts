import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from 'react';

const LOAD_EVENT = '@loadImage';

export const useInterSectionObserver = (
  htmlElRef: RefObject<HTMLElement>,
  setLoaded: Dispatch<SetStateAction<boolean>>,
  threshold: number,
  lazy: boolean,
  observer: IntersectionObserver,
) => {
  const handleLoadImage = useRef(() => setLoaded(true));

  useEffect(() => {
    if (!lazy) return;
    const htmlElement = htmlElRef?.current;

    htmlElement && htmlElement.addEventListener(LOAD_EVENT, handleLoadImage.current);
    return () => {
      htmlElement && htmlElement.removeEventListener(LOAD_EVENT, handleLoadImage.current);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;
    if (observer) return;
    const intersectionCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        entry.target.dispatchEvent(new CustomEvent(LOAD_EVENT));
      });
    };

    observer = new IntersectionObserver(intersectionCallback, { threshold });
    htmlElRef.current && observer.observe(htmlElRef.current);
  }, [lazy, threshold, observer]);
};
