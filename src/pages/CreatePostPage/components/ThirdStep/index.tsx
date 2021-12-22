import {
  FormContentWrapper,
  NextStepButton,
  ThirdStepContainer,
  FormWrapper,
  ThirdStepPostFormContainer,
  DateInput,
  GuideText,
  NextStepText,
  SearchTitleWrapper,
} from '../../style';
import { Text } from '../../../../components/atoms';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ThirdStepProp } from '../../types';
import ConfirmModal from './ConfirmModal';
import UploadHeader from '../UploadHeader';
import SelectedUserList from '../../../../components/organism/SelectedUserList';
import SearchUser from '../../../../components/organism/SearchUser';
import { useSelectedUserList } from '../../../../contexts/SelectedUserListProvider';
import { getKST } from '../../../../utils/functions/getKST';

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
  const handleOnBlur = () => {
    const tomorrow = getKST(true);
    const inputDate = new Date(date);
    if (tomorrow > inputDate) {
      setDate(tomorrow.toLocaleString().split('.').slice(0, 3).join('').split(' ').join('-'));
    }
  };

  const dateValidate = (date: string) => {
    const tomorrow = getKST(true).getDate();
    const storedDate = new Date(date).getDate();
    return tomorrow > storedDate ? false : true;
  };

  useEffect(() => {
    if (!date) {
      return;
    }
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
    const tomorrow = getKST(true)
      .toLocaleString()
      .split('.')
      .slice(0, 3)
      .join('')
      .split(' ')
      .join('-');
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
              onBlur={handleOnBlur}
            ></DateInput>
          </FormContentWrapper>
          <FormContentWrapper>
            <SearchTitleWrapper>
              <Text textType="Heading4">함께 할 사람들</Text>
              <Text textType="Paragraph2">추가하지 않으면 나만의 필름이 만들어집니다.</Text>
            </SearchTitleWrapper>
            {selectedUserList.selectedUserList.length > 0 ? (
              <SelectedUserList userList={selectedUserList.selectedUserList} />
            ) : (
              ''
            )}
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
