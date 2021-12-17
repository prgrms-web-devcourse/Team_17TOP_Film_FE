import { Modal, Button } from '../../../components/atoms';
import { ModalWrapper, ModalText, ButtonGroup } from './style';

interface Props {
  modalVisible: boolean;
  modalText: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  handleClose: () => void;
  primaryBtnEvent: () => void;
  secondaryBtnEvent: () => void;
}

const ConfirmModal = ({
  modalVisible,
  modalText,
  primaryBtnText,
  secondaryBtnText,
  handleClose,
  primaryBtnEvent,
  secondaryBtnEvent,
}: Props) => {
  return (
    <Modal visible={modalVisible} onClose={handleClose}>
      <ModalWrapper>
        <ModalText textType="Heading4">{modalText}</ModalText>
        <ButtonGroup>
          <Button buttonType="SecondaryBtn" width={'100%'} onClick={secondaryBtnEvent}>
            {secondaryBtnText}
          </Button>
          <Button buttonType="PrimaryBtn" width={'100%'} onClick={primaryBtnEvent}>
            {primaryBtnText}
          </Button>
        </ButtonGroup>
      </ModalWrapper>
    </Modal>
  );
};

export default ConfirmModal;
