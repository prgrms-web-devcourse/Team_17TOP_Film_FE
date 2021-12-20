import React from 'react';
import PinOpen from '../../../assets/icons/icon_marker_open.svg';
import PinClose from '../../../assets/icons/icon_marker_close.svg';
import PinSelectedOpen from '../../../assets/icons/icon_marker_open_selected.svg';
import PinSelectedClose from '../../../assets/icons/icon_marker_close_selected.svg';
import PinImg from './style';

interface PinProps {
  selected: boolean;
  state: string;
  [x: string]: any;
}
const Pin = ({ selected, state, ...props }: PinProps) => {
  return (
    <>
      {selected ? (
        state === 'CLOSED' ? (
          <PinImg {...props} src={PinSelectedClose} />
        ) : (
          <PinImg {...props} src={PinSelectedOpen} />
        )
      ) : state === 'CLOSED' ? (
        <PinImg {...props} src={PinClose} />
      ) : (
        <PinImg {...props} src={PinOpen} />
      )}
    </>
  );
};

export default React.memo(Pin);
