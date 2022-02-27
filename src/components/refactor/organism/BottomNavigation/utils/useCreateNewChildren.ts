import React, { ReactChild, ReactElement, ReactNode } from 'react';
import { VALID_BNITEM } from '../constants';
import { filterReactNode } from './filterChildren';
import { setElementProps } from './setElementProps';
import { useIsTabActive } from './useTabActive';

const createValidChildren = (children: ReactNode) =>
  React.Children.toArray(children).filter((element) => filterReactNode(element, VALID_BNITEM));

export const useCreateNewChildren = (children: ReactNode, direction?: 'column') => {
  const validChildren = createValidChildren(children);
  const [isTabActive, setIsTabActive] = useIsTabActive(validChildren as ReactChild[]);

  return validChildren.map((element, idx) => {
    const item = element as ReactElement;
    return setElementProps(item, idx, isTabActive, setIsTabActive, direction);
  });
};
