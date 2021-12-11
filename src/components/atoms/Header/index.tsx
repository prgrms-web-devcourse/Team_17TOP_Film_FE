import { MiddleSide, Wrapper, Side } from './style';
import { Props as LefeSideInterface } from './components/LeftSide';
import LeftSide from './components/LeftSide';

interface Props extends LefeSideInterface {
  midText?: string;
}

const Header = ({ leftComp, handleLeftEvent, midText }: Props) => {
  return (
    <Wrapper>
      {midText && <MiddleSide>midText</MiddleSide>}
      <Side>{leftComp && <LeftSide leftComp={leftComp} handleLeftEvent={handleLeftEvent} />}</Side>
    </Wrapper>
  );
};
export default Header;
