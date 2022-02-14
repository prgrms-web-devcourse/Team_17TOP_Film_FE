import styled from '@emotion/styled';
import { Text, Button, Modal } from '@refactors/atoms';
import { useState } from 'react';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {},
};

export const Default = (args: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div style={{ height: '10000px' }}>
      <Button btnStyle="primary" size="medium" onClick={() => setModalVisible(true)}>
        모달 열기
      </Button>
      {modalVisible && (
        <Modal {...args}>
          <ModalInner>
            <ModalText textType="Heading4">모달 텍스트를 넣어주세요</ModalText>
            <ButtonGroup>
              <ModalButton btnStyle="secondary" size="full" onClick={() => setModalVisible(false)}>
                닫기
              </ModalButton>
            </ButtonGroup>
          </ModalInner>
        </Modal>
      )}
    </div>
  );
};

const ModalInner = styled.div`
  min-width: 300px;
  background: #fff;
  padding: ${({ theme }) => theme.gaps.gap2};
  border-radius: 4px;
  text-align: center;
`;

const ModalText = styled(Text)`
  margin-top: ${({ theme }) => theme.gaps.gap2};
  line-height: 1.4;
  word-break: keep-all;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: ${({ theme }) => theme.gaps.gap4};
`;

const ModalButton = styled(Button)`
  justify-content: center;
`;
