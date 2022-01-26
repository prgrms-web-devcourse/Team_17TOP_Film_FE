import { useCallback, useRef } from 'react';

const useTimeoutFn = (fn: () => void, ms: number): [() => void, () => void] => {
  const timeoutId = useRef(0);
  const callback = useRef(fn);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = window.setTimeout(() => {
      callback.current();
    }, ms);
  }, []);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  return [run, clear];
};
export default useTimeoutFn;
