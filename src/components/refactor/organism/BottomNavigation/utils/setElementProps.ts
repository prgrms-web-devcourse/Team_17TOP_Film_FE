import React, { Dispatch, ReactElement, SetStateAction } from 'react';

export const setElementProps = (
  item: ReactElement,
  idx: number,
  isTabActive: number,
  setIsTabActive: Dispatch<SetStateAction<number>>,
  direction?: 'column',
) =>
  React.cloneElement(item, {
    ...item.props,
    className: idx === isTabActive ? 'active' : 'nonactive',
    direction: direction ? 'column' : null,
    onClick: () => {
      item.props.handleClick && item.props.handleClick();
      setIsTabActive(idx);
    },
  });
