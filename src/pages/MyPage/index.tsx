import React, { useState } from 'react';
import { Header } from '../../components/atoms';
import Profile from './components/Profile';
import SelectBox from './components/SelectBox';
import Tabs from './components/Tabs';
import { Body } from './style';
import { tabList, TabListKey } from './constants';
import findValueOfSelectList from './util/findValueOfSelectList';
import Film from './components/Film';

const MyPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabListKey>(
    Object.values(tabList)[0] as TabListKey,
  );

  const [selectedOption, setSelectedOption] = useState(findValueOfSelectList(selectedTab)[0]);

  const handleTabClick = (tabName: TabListKey) => {
    setSelectedTab(tabName);
    setSelectedOption(findValueOfSelectList(tabName)[0]);
  };

  return (
    <>
      <Header
        leftComp="backBtn"
        handleLeftEvent={() => console.log('left clidk')}
        rightComp="timeline"
        handleRightEvent={() => console.log('right click')}
      />

      <Body>
        <Profile />
        <Tabs
          selectedTab={selectedTab}
          tabList={Object.values(tabList) as TabListKey[]}
          handleTabClick={handleTabClick}
        />
        <SelectBox
          css={{ margin: '16px 20px' }}
          options={findValueOfSelectList(selectedTab)}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          width="calc(100% - 40px)"
          maxHeight={100}
          name="테스트입니다."
        />
        <Film
          title="필름 타이틀"
          preview="엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄 예정임 길어지면 밑줄처리를 할거야 예정임 길어지면 밑줄처리를 할거야엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄 예정임 길어지면 밑줄처리를 할거야"
          registerDay={20211112}
          avatarList={[
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
          ]}
          btnText="사진 보기"
        />
        <Film
          title="필름 타이틀"
          preview="엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄 예정임 길어지면 밑줄처리를 할거야 예정임 길어지면 밑줄처리를 할거야엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄 예정임 길어지면 밑줄처리를 할거야"
          registerDay={20211112}
          avatarList={[
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
          ]}
          btnText="사진 보기"
        />
        <Film
          title="필름 타이틀"
          preview="엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄 예정임 길어지면 밑줄처리를 할거야 예정임 길어지면 밑줄처리를 할거야엿보기 문구입ㄴ디ㅏ. 최대 두 줄까지 보여줄 예정임 길어지면 밑줄처리를 할거야"
          registerDay={20211112}
          avatarList={[
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
            { src: 'https://picsum.photos/200', alt: '이미지 1' },
          ]}
          btnText="사진 보기"
        />
      </Body>
    </>
  );
};
export default MyPage;
