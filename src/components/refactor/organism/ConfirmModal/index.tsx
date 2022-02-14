import { Modal } from '@refactors/atoms';
import { ModalWrapper, ModalText, ButtonGroup, ModalButton } from './style';

interface Props {
  modalText: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  dimClose?: () => void;
  primaryBtnEvent: () => void;
  secondaryBtnEvent: () => void;
}

const ConfirmModal = ({
  modalText,
  primaryBtnText,
  secondaryBtnText,
  dimClose,
  primaryBtnEvent,
  secondaryBtnEvent,
}: Props) => {
  return (
    <Modal dimClose={dimClose}>
      <ModalWrapper>
        <ModalText textType="Heading4">{modalText}</ModalText>
        <ButtonGroup>
          <ModalButton btnStyle={'secondary'} size={'full'} onClick={secondaryBtnEvent}>
            {secondaryBtnText}
          </ModalButton>
          <ModalButton btnStyle={'primary'} size={'full'} onClick={primaryBtnEvent}>
            {primaryBtnText}
          </ModalButton>
        </ButtonGroup>
      </ModalWrapper>
    </Modal>
  );
};

export default ConfirmModal;
