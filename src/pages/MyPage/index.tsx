import React, { useState } from 'react';
import { Body, MyPageHeader } from './style';
import { selectList, tabList, TabListKey } from './constants';
import { useUserInfo } from '../../contexts/UserProvider';
import { createAvatarList, findValueOfSelectList, printBtnText, useGetAllPost } from './util';
import { Film, Profile, SelectBox, Tabs } from './components';

const MyPage = () => {
  const { userInfo } = useUserInfo();
  const [selectedTab, setSelectedTab] = useState<TabListKey>(
    Object.values(tabList)[0] as TabListKey,
  );

  const [selectedOption, setSelectedOption] = useState(findValueOfSelectList(selectedTab)[0]);

  const posts = useGetAllPost();

  const handleTabClick = (tabName: TabListKey) => {
    setSelectedTab(tabName);
    setSelectedOption(findValueOfSelectList(tabName)[0]);
  };
  return (
    <>
      <MyPageHeader
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
        {selectedTab === tabList.myFilm &&
          selectedOption === selectList.myFilm.FULL_VIEW &&
          posts?.map(
            (
              { title, previewText, availableAt, authorityImageList, state, authorNickname },
              index,
            ) => (
              <Film
                key={index}
                title={title}
                preview={previewText}
                registerDay={availableAt}
                avatarList={authorityImageList.map(createAvatarList)}
                btnText={printBtnText(availableAt, state, authorNickname === userInfo.nickname)}
              />
            ),
          )}
      </Body>
    </>
  );
};
export default MyPage;
