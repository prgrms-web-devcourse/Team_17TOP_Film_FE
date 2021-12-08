import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Button, Modal } from '../../components/atoms';

export default {
  title: 'Example/Modal',
  component: Modal,
};

export const Default = (args: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button buttonType="PrimaryBtn" onClick={() => setModalVisible(true)}>
        모달 열기
      </Button>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <ModalInner>
          <Text>오늘 열 수 있는 캡슐이 있어요</Text>
          <Footer>
            <Button buttonType="SecondaryBtn" onClick={() => setModalVisible(false)}>
              나중에 볼래요
            </Button>
            <Button buttonType="PrimaryBtn" onClick={() => setModalVisible(false)}>
              보러 갈래요!
            </Button>
          </Footer>
        </ModalInner>
      </Modal>
    </>
  );
};
const ModalInner = styled.div`
  width: 300px;
`;

const Text = styled.h1`
  margin: 10px 0;
  text-align: center;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
