import { ReactChild, ReactElement } from 'react';
import { setElementProps } from './setElementProps';
import { useIsTabActive } from './useTabActive';

export const useCreateNewChildren = (validChildren: ReactChild[], direction?: 'column') => {
  const [isTabActive, setIsTabActive] = useIsTabActive(validChildren);

  return validChildren.map((element, idx) => {
    const item = element as ReactElement;
    return setElementProps(item, idx, isTabActive, setIsTabActive, direction);
  });
};
