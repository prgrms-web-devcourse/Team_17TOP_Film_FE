import React, { MouseEventHandler } from 'react';
import { CustomHeader } from './style';
interface Props {
  handleBackBtn: MouseEventHandler<HTMLElement>;
}

const UploadHeader = ({ handleBackBtn }: Props) => {
  return <CustomHeader leftComp="backBtn" handleLeftEvent={handleBackBtn} midText="필름 만들기" />;
};

export default UploadHeader;
