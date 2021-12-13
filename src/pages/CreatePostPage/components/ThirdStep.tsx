import {
  FormContentWrapper,
  NextStepButton,
  StepContainer,
  FormWrapper,
  ThirdStepPostFormContainer,
  DateInput,
  GuideText,
  NextStepText,
} from '../style';
import { Text } from '../../../components/atoms';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ThirdStepProp } from '../types';
import ConfirmModal from './ConfirmModal';

const ThirdStep = ({ latitude, longitude, handleAvailableAt }: ThirdStepProp) => {
  const [date, setDate] = useState('');
  const [state, setState] = useState({ year: '', month: '', day: '' });
  const [minDay, setMinDay] = useState('');
  const dateInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveAvailableAt = () => {
    handleAvailableAt(date);
  };

  const handleIsModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    const dateToArr = date.split('-');
    setState((prevState) => ({
      ...prevState,
      year: dateToArr[0],
      month: dateToArr[1],
      day: dateToArr[2],
    }));
  }, [date]);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
    setMinDay(tomorrow);
    setDate(tomorrow);
  }, []);

  return (
    <StepContainer>
      <ThirdStepPostFormContainer>
        <FormWrapper>
          <Text textType="Heading3">사진 찾는 날을 선택 해주세요</Text>
          <FormContentWrapper>
            <Text textType="Heading4">사진 찾는 날짜</Text>
            <DateInput
              ref={dateInputRef}
              type="date"
              value={date}
              min={minDay}
              onChange={handleDateChange}
            ></DateInput>
          </FormContentWrapper>
        </FormWrapper>
        <GuideText textType="Heading4">
          {date ? `${state.year}년 ${state.month}월 ${state.day}일` : `0000년 00월 00일`}
          <br />
          {`${latitude}, ${longitude}에`}
          <br />
          사진이 나올 예정입니다.
        </GuideText>
      </ThirdStepPostFormContainer>
      <NextStepButton buttonType="PrimaryBtn" onClick={() => setIsModalOpen(true)}>
        <NextStepText textType="Paragraph1">다음</NextStepText>
      </NextStepButton>
      {isModalOpen ? (
        <ConfirmModal
          handleIsModalClose={handleIsModalClose}
          isModalOpen={isModalOpen}
          saveAvailableAt={saveAvailableAt}
        ></ConfirmModal>
      ) : (
        ''
      )}
    </StepContainer>
  );
};

export default ThirdStep;
