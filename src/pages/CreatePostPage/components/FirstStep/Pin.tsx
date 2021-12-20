import * as React from 'react';
import styled from '@emotion/styled';
const ICON = `M20 0.666687C9.03502 0.666687 0.166687 9.53502 0.166687 20.5C0.166687 35.375 20 57.3334 20 57.3334C20 57.3334 39.8334 35.375 39.8334 20.5C39.8334 9.53502 30.965 0.666687 20 0.666687ZM20 27.5834C16.09 27.5834 12.9167 24.41 12.9167 20.5C12.9167 16.59 16.09 13.4167 20 13.4167C23.91 13.4167 27.0834 16.59 27.0834 20.5C27.0834 24.41 23.91 27.5834 20 27.5834Z`;

interface Props {
  size: number;
}

const Pin = ({ size }: Props) => {
  return (
    <PinSvg height={size} viewBox="0 0 60 60">
      <path d={ICON} />
    </PinSvg>
  );
};

export default React.memo(Pin);

const PinSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  stroke: 'none';
`;
