import * as React from 'react';
import styled from '@emotion/styled';
const ICON = `M34 5.66675C23.035 5.66675 14.1667 14.5351 14.1667 25.5001C14.1667 40.3751 34 62.3334 34 62.3334C34 62.3334 53.8334 40.3751 53.8334 25.5001C53.8334 14.5351 44.965 5.66675 34 5.66675ZM34 32.5834C30.09 32.5834 26.9167 29.4101 26.9167 25.5001C26.9167 21.5901 30.09 18.4167 34 18.4167C37.91 18.4167 41.0834 21.5901 41.0834 25.5001C41.0834 29.4101 37.91 32.5834 34 32.5834Z`;

interface Props {
  size: number;
}

const Pin = ({ size, ...props }: Props) => {
  return (
    <PinSvg height={size} viewBox="0 0 64 64">
      <path d={ICON} />
    </PinSvg>
  );
};

export default React.memo(Pin);

const PinSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  stroke: 'none';
`;
