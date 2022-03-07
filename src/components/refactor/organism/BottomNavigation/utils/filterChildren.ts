import React, { ReactNode } from 'react';
import { VALID_BNITEM } from '../constants';

const filterReactNode = (element: ReactNode, propType: string) => {
  if (React.isValidElement(element) && element.props.__TYPE === propType) {
    return true;
  }
  console.warn('BNItem 컴포넌트만 올 수 있습니다~');
  return false;
};

export const createValidChildren = (children: ReactNode) =>
  React.Children.toArray(children).filter((element) => filterReactNode(element, VALID_BNITEM));
