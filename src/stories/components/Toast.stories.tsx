import Button from '../../components/refactor/atoms/Button';
import Toast from '../../components/refactor/atoms/Toast';

export default {
  title: 'Example/Toast',
  component: Toast,
};

export const Default = (args: any) => {
  const onBtnClick = () => Toast.info({ msg1: 'asdf' });
  return (
    <Button btnStyle="primary" size="small" onClick={onBtnClick}>
      click me!
    </Button>
  );
};
export const WarnToast = (args: any) => {
  const onBtnClick = () => Toast.warn({ msg1: 'test' });
  return (
    <Button btnStyle="primary" size="small" onClick={onBtnClick}>
      click me!
    </Button>
  );
};

export const DivideTwoLine = (args: any) => {
  const onBtnClick = () => Toast.info({ msg1: '첫번째 줄입니다.!', msg2: '두 번쨰 줄입니다.!' });
  return (
    <Button btnStyle="primary" size="small" onClick={onBtnClick}>
      click me!
    </Button>
  );
};

export const LongDuration = (args: any) => {
  const onBtnClick = () => Toast.info({ msg1: '첫번째 줄입니다.!', duration: 100000 });
  return (
    <Button btnStyle="primary" size="small" onClick={onBtnClick}>
      유지 기간이 길다면 X버튼을 눌러서 종료할 수 있습니다.
    </Button>
  );
};

export const OverFlowingFirstLine = (args: any) => {
  const onBtnClick = () =>
    Toast.info({
      msg1: '첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! ',
      msg2: '두번째 줄입니다.!',
      duration: 1000,
    });
  return (
    <Button btnStyle="primary" size="small" onClick={onBtnClick}>
      화면의 크기보다 메시지의 길이가 길다면 띄어쓰기 단위로 줄바꿈합니다.
    </Button>
  );
};

export const OverFlowingSecondLine = (args: any) => {
  const onBtnClick = () =>
    Toast.info({
      msg1: '첫번째 줄입니다.!',
      msg2: '두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! ',
      duration: 1000,
    });
  return (
    <Button btnStyle="primary" size="small" onClick={onBtnClick}>
      화면의 크기보다 메시지의 길이가 길다면 띄어쓰기 단위로 줄바꿈합니다.
    </Button>
  );
};

export const OverFlowingBothLine = (args: any) => {
  const onBtnClick = () =>
    Toast.info({
      msg1: '첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! 첫번째 줄입니다.! ',
      msg2: '두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! 두번째 줄입니다.! ',
      duration: 1000,
    });
  return (
    <Button btnStyle="primary" size="small" onClick={onBtnClick}>
      화면의 크기보다 메시지의 길이가 길다면 띄어쓰기 단위로 줄바꿈합니다.
    </Button>
  );
};
