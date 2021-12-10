import React, { MouseEventHandler } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, To } from 'react-router-dom';
import { Navigation } from '../../../../components/atoms';

interface Props {
  handleBackBtn: MouseEventHandler<HTMLAnchorElement>;
  href: To;
}

const Header = ({ handleBackBtn, href }: Props) => {
  const leftSide = (
    <li>
      <Link to={href} onClick={handleBackBtn}>
        <FiArrowLeft />
      </Link>
    </li>
  );
  return <Navigation navType="header" leftSide={leftSide} middleSide="필름 만들기" />;
};
export default Header;
