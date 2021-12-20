import { Modal, Button } from '../../../../components/atoms';
import { ButtonWrapper, ModalNoticeContainer, ModalNoticeText } from '../../style';
import { LocalStorageConfirmModalProps } from '../../types';
import { clearLocalStoragePostData } from '../../utils/clearLocalStoragePostData';

const LocalStorageConfirmModal = ({
  isModalOpen,
  handleIsModalClose,
  handleIsConfirm,
}: LocalStorageConfirmModalProps) => {
  const approval = () => {
    handleIsModalClose();
    handleIsConfirm();
  };

  const disapproval = () => {
    handleIsModalClose();
    clearLocalStoragePostData();
  };

  return (
    <Modal visible={isModalOpen} onClose={disapproval}>
      <ModalNoticeContainer>
        <ModalNoticeText textType="Heading4">
          작성중인 필름이 있는데...
          <br />
          불러올까요?
        </ModalNoticeText>
        <ButtonWrapper>
          <Button buttonType="SecondaryBtn" width={'50%'} onClick={disapproval}>
            아니요 필요없어요!
          </Button>
          <Button buttonType="PrimaryBtn" width={'50%'} onClick={approval}>
            네 좋아요!
          </Button>
        </ButtonWrapper>
      </ModalNoticeContainer>
    </Modal>
  );
};
export default LocalStorageConfirmModal;
