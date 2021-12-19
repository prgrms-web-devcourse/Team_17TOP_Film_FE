import {
  FormContentWrapper,
  NextStepButton,
  ThirdStepContainer,
  FormWrapper,
  ThirdStepPostFormContainer,
  DateInput,
  GuideText,
  NextStepText,
} from '../../style';
import { Text } from '../../../../components/atoms';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ThirdStepProp } from '../../types';
import ConfirmModal from './ConfirmModal';
import UploadHeader from '../UploadHeader';
import SelectedUserList from '../../../../components/organism/SelectedUserList';
import SearchUser from '../../../../components/organism/SearchUser';
import { useSelectedUserList } from '../../../../contexts/SelectedUserListProvider';

const ThirdStep = ({
  latitude,
  longitude,
  handleAvailableAt,
  goPrevStep,
  storedAvailableAt,
  handleIsConfirm,
}: ThirdStepProp) => {
  const [date, setDate] = useState(storedAvailableAt || '');
  const [state, setState] = useState({ year: '', month: '', day: '' });
  const [minDay, setMinDay] = useState('');
  const dateInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedUserList = useSelectedUserList();

  const saveAvailableAt = () => {
    handleAvailableAt(date);
  };

  const handleIsModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const dateValidate = (date: string) => {
    const tomorrow = new Date();
    const storedDate = new Date(date);
    return tomorrow > storedDate ? false : true;
  };

  useEffect(() => {
    const dateToArr = date?.split('-');
    if (dateToArr) {
      setState((prevState) => ({
        ...prevState,
        year: dateToArr[0],
        month: dateToArr[1],
        day: dateToArr[2],
      }));
    }
  }, [date]);

  useEffect(() => {
    if (date && dateValidate(date)) {
      setMinDay(date);
      return;
    }
    const today = new Date();
    const tomorrow = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
    setMinDay(tomorrow);
    setDate(tomorrow);
  }, []);

  return (
    <ThirdStepContainer>
      <UploadHeader handleBackBtn={goPrevStep} />
      <ThirdStepPostFormContainer>
        <FormWrapper>
          <Text textType="Heading3">필름 찾는 날을 선택 해주세요</Text>
          <FormContentWrapper>
            <Text textType="Heading4">필름 찾는 날짜</Text>
            <DateInput
              ref={dateInputRef}
              type="date"
              value={date ? date : ''}
              min={minDay}
              onChange={handleDateChange}
            ></DateInput>
          </FormContentWrapper>
          <FormContentWrapper>
            <Text textType="Heading4">함께 할 사람들</Text>
            <SelectedUserList userList={selectedUserList.selectedUserList} />
            <SearchUser />
          </FormContentWrapper>
        </FormWrapper>
        <GuideText textType="Heading4">
          {date ? `${state.year}년 ${state.month}월 ${state.day}일` : `0000년 00월 00일`}
          <br />
          {`${latitude}, ${longitude}에`}
          <br />
          필름이 나올 예정입니다.
        </GuideText>
      </ThirdStepPostFormContainer>
      <NextStepButton buttonType="PrimaryBtn" onClick={() => setIsModalOpen(true)}>
        <NextStepText textType="Paragraph1">필름 맡기기</NextStepText>
      </NextStepButton>
      {isModalOpen ? (
        <ConfirmModal
          handleIsModalClose={handleIsModalClose}
          isModalOpen={isModalOpen}
          saveAvailableAt={saveAvailableAt}
          handleIsConfirm={handleIsConfirm}
        ></ConfirmModal>
      ) : (
        ''
      )}
    </ThirdStepContainer>
  );
};

export default ThirdStep;
