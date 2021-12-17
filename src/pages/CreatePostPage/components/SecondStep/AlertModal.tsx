import { Button, Modal } from '../../../../components/atoms';
import { AlertContent, AlertModalTextContainer, AlertTitle } from '../../style';
import { AlertModalProps } from '../../types';

const AlertModal = ({ isModalOpen, alertText, setIsModalOpen }: AlertModalProps) => {
  return (
    <Modal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <AlertModalTextContainer>
        <AlertTitle textType={'Heading3'}>아직 덜 입력된 부분이 있네요?</AlertTitle>
        <AlertContent textType={'Paragraph1'}>{alertText}</AlertContent>
        <Button buttonType={'PrimaryBtn'} onClick={() => setIsModalOpen(false)} width={'100%'}>
          알겠어요!
        </Button>
      </AlertModalTextContainer>
    </Modal>
  );
};

export default AlertModal;
