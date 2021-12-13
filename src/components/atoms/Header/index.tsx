import { MiddleSide, Wrapper, Side } from './style';
import LeftSide, { Props as LeftSideInterface } from './components/LeftSide';
import RightSide, { Props as RightSideInterface } from './components/RightSide';

interface Props extends LeftSideInterface, RightSideInterface {
  midText?: string;
  bgColor?: string;
  [x: string]: any;
}

const Header = ({
  leftComp,
  handleLeftEvent,
  midText,
  rightComp,
  handleRightEvent,
  bgColor = 'white',
  ...props
}: Props) => {
  return (
    <Wrapper bgColor={bgColor} {...props}>
      {midText && <MiddleSide>midText</MiddleSide>}
      {(leftComp || rightComp) && (
        <Side>
          {leftComp && <LeftSide leftComp={leftComp} handleLeftEvent={handleLeftEvent} />}
          {rightComp && <RightSide rightComp={rightComp} handleRightEvent={handleRightEvent} />}
        </Side>
      )}
    </Wrapper>
  );
};
export default Header;
