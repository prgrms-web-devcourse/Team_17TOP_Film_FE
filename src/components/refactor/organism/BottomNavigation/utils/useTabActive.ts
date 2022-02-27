import { Dispatch, ReactChild, ReactElement, SetStateAction, useState } from 'react';

export const useIsTabActive = (
  children: ReactChild[],
): [number, Dispatch<SetStateAction<number>>] => {
  const [isTabActive, setIsTabActive] = useState(() => {
    const activeTabs = children.map((element, idx) => {
      if ((element as ReactElement).props.active) {
        return idx;
      }
    });
    const activeIdx = activeTabs.find((v) => v !== undefined);
    return activeIdx ? activeIdx : 0;
  });
  return [isTabActive, setIsTabActive];
};
