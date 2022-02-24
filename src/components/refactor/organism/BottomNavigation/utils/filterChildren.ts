import React, { ReactNode } from 'react';

export const filterReactNode = (element: ReactNode, propType: string) => {
  if (React.isValidElement(element) && element.props.__TYPE === propType) {
    return true;
  }
  console.warn('BNItem 컴포넌트만 올 수 있습니다~');
  return false;
};
