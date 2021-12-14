import { useCallback, useEffect, useRef } from 'react';

const useTimeoutFn = (fn: () => void, ms: number): [() => void, () => void] => {
  const timeoutId = useRef(0);
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = window.setTimeout(() => {
      callback.current();
    }, ms);
  }, []);

  // 초기화 함수
  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]);
  return [run, clear];
};
export default useTimeoutFn;
