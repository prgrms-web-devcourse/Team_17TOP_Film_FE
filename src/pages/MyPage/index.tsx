import React, { useEffect, useState } from 'react';
import { Body, MyPageHeader } from './style';
import { tabList, TabListKey } from './constants';
import { useUserInfo } from '../../contexts/UserProvider';
import {
  createAvatarList,
  filterPosts,
  findValueOfSelectList,
  printBtnText,
  useGetAllPost,
} from './util';
import { Film, Profile, SelectBox, Tabs } from './components';
import { Post } from '../../utils/apis/posts/myPagePosts';

const MyPage = () => {
  const { userInfo } = useUserInfo();
  const [selectedTab, setSelectedTab] = useState<TabListKey>(
    Object.values(tabList)[0] as TabListKey,
  );
  const [selectedOption, setSelectedOption] = useState(findValueOfSelectList(selectedTab)[0]);

  const posts = useGetAllPost();
  const [filteredPosts, setFilteredPosts] = useState<Post[] | []>([]);

  useEffect(() => {
    const filtered = !posts
      ? []
      : filterPosts(posts, selectedTab, selectedOption, userInfo.nickname);
    setFilteredPosts(filtered);
  }, [posts]);

  const handleTabClick = (tabName: TabListKey) => {
    setSelectedTab(tabName);
    const optionValue = findValueOfSelectList(tabName)[0];
    setSelectedOption(optionValue);
    if (!posts) return;
    const filtered = filterPosts(posts, tabName, optionValue, userInfo.nickname);
    setFilteredPosts(filtered);
  };

  const handleSelectOptionClick = (optionValue: string) => {
    if (!posts) return;
    if (optionValue === selectedOption) return;
    const filtered = filterPosts(posts, selectedTab, optionValue, userInfo.nickname);
    setFilteredPosts(filtered);
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
          handleSelectOptionClick={handleSelectOptionClick}
        />
        {filteredPosts.map(
          ({
            title,
            previewText,
            availableAt,
            authorityImageList,
            state,
            authorNickname,
            postId,
          }) => (
            <Film
              key={postId}
              postId={postId}
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
