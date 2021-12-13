import { Modal, Button } from '../../../components/atoms';
import { ButtonWrapper, ModalNoticeContainer, ModalNoticeText } from '../style';
import { ConfirmModalProps } from '../types';

const ConfirmModal = ({ isModalOpen, handleIsModalClose, saveAvailableAt }: ConfirmModalProps) => {
  const confirm = () => {
    handleIsModalClose();
    saveAvailableAt();
  };

  return (
    <Modal visible={isModalOpen} onClose={handleIsModalClose}>
      <ModalNoticeContainer>
        <ModalNoticeText textType="Heading4">
          한번 맡긴 필름은 수정할 수 없어요
          <br />
          이대로 맡길까요?
        </ModalNoticeText>
        <ButtonWrapper>
          <Button buttonType="SecondaryBtn" width={'50%'} onClick={handleIsModalClose}>
            아니요 잠시만요!
          </Button>
          <Button buttonType="PrimaryBtn" width={'50%'} onClick={confirm}>
            네 좋아요!
          </Button>
        </ButtonWrapper>
      </ModalNoticeContainer>
    </Modal>
  );
};
export default ConfirmModal;
