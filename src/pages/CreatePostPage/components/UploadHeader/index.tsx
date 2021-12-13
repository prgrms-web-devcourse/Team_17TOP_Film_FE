import React, { MouseEventHandler } from 'react';
import { CustomHeader } from './style';

interface Props {
  handleBackBtn: MouseEventHandler<HTMLElement>;
}

const UploadHeader = ({ handleBackBtn }: Props) => {
  return <CustomHeader handleLeftEvent={handleBackBtn} midText="필름 만들기" />;
};

export default UploadHeader;
