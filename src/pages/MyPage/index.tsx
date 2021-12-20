import React, { useEffect, useState } from 'react';
import { Body, MyPageHeader, MyPageSelectBox } from './style';
import { tabList, TabListKey } from './constants';
import { useUserInfo } from '../../contexts/UserProvider';
import {
  createAvatarList,
  filterPosts,
  findValueOfSelectList,
  printBtnText,
  useGetAllPost,
} from './util';
import { Film, Profile, Tabs } from './components';
import { Post } from '../../utils/apis/posts/myPagePosts';
import { deletePostApi } from '../../utils/apis/post';
import Toast from '../../components/organism/Toast';
import { useNavigate } from 'react-router-dom';
import { GlobalNavigation } from '../../components/organism';
import Loader from '../../components/organism/Loader';

const MyPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfo();
  const [selectedTab, setSelectedTab] = useState<TabListKey>(
    Object.values(tabList)[0] as TabListKey,
  );
  const [selectedOption, setSelectedOption] = useState(findValueOfSelectList(selectedTab)[0]);

  const [posts, setPosts] = useGetAllPost();
  const [filteredPosts, setFilteredPosts] = useState<Post[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{
    latitude: null | number;
    longitude: null | number;
  }>({ latitude: null, longitude: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (userLocation.latitude) {
      setIsLoading(false);
    }
  }, [userLocation]);

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
  const deletePost = async (deletePostId: number) => {
    setPosts((prevPosts) => prevPosts.filter(({ postId }) => deletePostId !== postId));
    const { error } = await deletePostApi(deletePostId);
    if (error?.errorMessage) {
      Toast.warn('삭제 도중 에러가 생겼어요! 새로고침후 다시 시도해보세요!');
    }
  };

  const handleLeftHeaderButton = () => {
    navigate(-1);
  };

  return (
    <>
      {isLoading && <Loader>필름 불러오는 중...</Loader>}

      <MyPageHeader leftComp="backBtn" handleLeftEvent={handleLeftHeaderButton} />
      <Body>
        <Profile
          profileImageUrl={userInfo.profileImageUrl}
          nickname={userInfo.nickname}
          postsLength={posts.length}
        />
        <Tabs
          selectedTab={selectedTab}
          tabList={Object.values(tabList) as TabListKey[]}
          handleTabClick={handleTabClick}
        />
        <MyPageSelectBox
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
            location,
          }) => (
            <Film
              key={postId}
              postId={postId}
              title={title}
              preview={previewText}
              registerDay={availableAt}
              avatarList={authorityImageList.map(createAvatarList)}
              btnText={printBtnText(availableAt, state, authorNickname === userInfo.nickname)}
              deletePost={deletePost}
              longitude={location.longitude}
              latitude={location.latitude}
              userLatitude={userLocation.latitude as number}
              userLongitude={userLocation.longitude as number}
            />
          ),
        )}
      </Body>
      <GlobalNavigation />
    </>
  );
};
export default MyPage;
