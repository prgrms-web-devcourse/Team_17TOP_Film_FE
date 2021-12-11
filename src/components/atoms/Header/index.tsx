import React, { MouseEvent, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { MiddleSide, Wrapper, Side } from './style';
import { Props as LefeSideInterface } from './components/LeftSide';
import LeftSide from './components/LeftSide';

interface Props {
  midText?: string;
}

const Header = ({ midText }: Props) => {
  return <Wrapper>{midText && <MiddleSide>{midText}</MiddleSide>}</Wrapper>;
};
export default Header;
