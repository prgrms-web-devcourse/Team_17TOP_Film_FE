import React, { useState } from 'react';
import { ConfirmModal } from '@refactors/organism';
import { Button } from '@refactors/atoms';

export default {
  title: 'Example/ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    modalText: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    primaryBtnText: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    secondaryBtnText: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    primaryBtnEvent: {
      action: '확인 클릭',
    },
    secondaryBtnEvent: {
      action: '취소 클릭',
    },
  },
};

export const Default = (args: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Button btnStyle="primary" size="medium" onClick={() => setModalVisible(true)}>
        ConfirmModal 열기
      </Button>
      {modalVisible && (
        <ConfirmModal
          modalText={`모달 텍스트를 넣어주세요`}
          primaryBtnText={`확인`}
          secondaryBtnText={`취소`}
          primaryBtnEvent={() => {
            console.log('확인 클릭');
          }}
          secondaryBtnEvent={() => {
            setModalVisible(false);
            console.log('취소 클릭');
          }}
          {...args}
        />
      )}
    </div>
  );
};
