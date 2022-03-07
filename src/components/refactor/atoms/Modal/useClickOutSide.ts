import { RefObject, useEffect, useRef } from 'react';

const eventTypes = ['mouseup', 'touchend'];

const useClickOutSide = (handler: () => void): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);
  const saveHandler = useRef(handler);

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = ref.current;
    if (!targetElement) return;

    const handleClickOutside = (e: Event) => {
      !targetElement.contains(e.target as HTMLElement) && saveHandler.current();
    };

    for (const eventType of eventTypes) {
      document.addEventListener(eventType, handleClickOutside);
    }
    return () => {
      for (const eventType of eventTypes) {
        document.removeEventListener(eventType, handleClickOutside);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickOutSide;
