import React from 'react';
import PinOpen from '../../../assets/icons/icon_marker_open.svg';
import PinClose from '../../../assets/icons/icon_marker_close.svg';
import PinSelectedOpen from '../../../assets/icons/icon_marker_open_selected.svg';
import PinSelectedClose from '../../../assets/icons/icon_marker_close_selected.svg';
import PinImg from './style';

interface PinProps {
  selected: boolean;
  state: string;
}
const Pin = ({ selected, state, ...props }: PinProps) => {
  return (
    <div {...props}>
      {selected ? (
        state === 'Closed' ? (
          <PinImg src={PinSelectedClose} />
        ) : (
          <PinImg src={PinSelectedOpen} />
        )
      ) : state === 'Closed' ? (
        <PinImg src={PinClose} />
      ) : (
        <PinImg src={PinOpen} />
      )}
    </div>
  );
};

export default React.memo(Pin);
