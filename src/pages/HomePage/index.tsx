import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { GlobalNavigation, PreviewBottomSheet } from '../../components/organism';
import { HomePageHeader } from './style';
import Map from './Map';
import { Cookies } from 'react-cookie';
import { getPostListApi, getPreviewPostApi, deletePostApi } from '../../utils/apis/post';
import { Post, PreviewPost } from '../../utils/apis/post/type';
import ConfirmModal from './Modal';
import Toast from '../../components/organism/Toast';
import { isOpenableDistance } from '../../utils/functions/distance';
import Loader from '../../components/organism/Loader';
interface Location {
  latitude: number;
  longitude: number;
}

const HomePage = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const [isMap, setIsMap] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);
  const [selectedPost, setselectedPost] = useState<PreviewPost | null>(null);
  const [openablePosts, setOpenablePosts] = useState<Post[] | null>(null);
  const [userLocation, setUserLocation] = useState<Location | null>(null);

  const [emptyPostModalVisible, setEmptyPostModalVisible] = useState(false);
  const [todayPostViewModalVisible, setTodayPostViewModalVisible] = useState(false);
  const [postDeleteModalVisible, setPostDeleteModalVisible] = useState(false);

  const getPostList = useCallback(async () => {
    const { data, error } = await getPostListApi();
    if (!data) {
      console.log(error);
      return;
    }
    if (data) {
      !data.posts.length && setEmptyPostModalVisible(true);
      setPostList(data.posts);
    }
  }, [getPostListApi]);

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        Toast.warn('??????????????? ???????????? ????????? ????????? ???????????? ????????? ??? ????????????');
        setIsLoading(false);
      },
    );
  };

  const handleSelectedPost = useCallback(
    async (postId: number) => {
      const { data, error } = await getPreviewPostApi(postId);
      if (!data) {
        console.log(error);
        return;
      }
      setselectedPost(data);
    },
    [getPreviewPostApi],
  );

  const handlePostView = useCallback(() => {
    if (!userLocation) {
      Toast.info(`?????? ????????? ?????? ?????? ????????????..! 1km ????????? ??????????????????~????`);
      return;
    }
    if (selectedPost?.state === 'OPENABLE' && userLocation) {
      const isOpenable = isOpenableDistance(
        parseFloat(selectedPost.location.latitude),
        parseFloat(selectedPost.location.longitude),
        userLocation.latitude,
        userLocation.longitude,
      );
      isOpenable && navigate(`/post/${selectedPost?.postId}`);
      !isOpenable && Toast.info(`?????? ????????? ?????? ?????? ????????????..! 1km ????????? ??????????????????~????`);
    }
    selectedPost?.state === 'OPENED' && navigate(`/post/${selectedPost?.postId}`);
  }, [selectedPost, userLocation]);

  const handleDeletePost = async (postId: number) => {
    const { data, error } = await deletePostApi(postId);
    if (!data) {
      console.log(error);
      return;
    }
    setPostDeleteModalVisible(false);
    navigate(`/`);
    getPostList();
  };

  const handleTodayPostViewModal = () => {
    if (cookies.get('invisibleModal')) {
      setIsMap(true);
      return;
    }
    const currentOpenablePosts = postList.filter((post) => post.state === 'OPENABLE');

    if (currentOpenablePosts.length) {
      setOpenablePosts(currentOpenablePosts);
      setTodayPostViewModalVisible(true);
    } else {
      setIsMap(true);
    }
  };

  const handleViewLater = () => {
    setTodayPostViewModalVisible(false);
    cookies.set('invisibleModal', true, { maxAge: 3600 });
    setIsMap(true);
  };

  const handleViewNow = () => {
    setTodayPostViewModalVisible(false);
    navigate(`${openablePosts && openablePosts[0].postId}`);
    setIsMap(true);
  };

  useEffect(() => {
    getPostList();
    getGeoLocation();
  }, []);

  useEffect(() => {
    postList && handleTodayPostViewModal();
  }, [postList]);

  useEffect(() => {
    userLocation && setIsLoading(false);
  }, [userLocation]);

  useEffect(() => {
    pathname.slice(1) ? handleSelectedPost(parseInt(pathname.slice(1))) : setselectedPost(null);
  }, [pathname]);

  return (
    <div>
      {isLoading && <Loader>?????? ???????????? ???...</Loader>}
      <HomePageHeader
        midText="??? ??????"
        rightComp="mypage"
        handleRightEvent={() => navigate('/mypage')}
      />
      {isMap && (
        <Map
          currentLocation={!pathname.slice(1) ? true : false}
          selectedPost={selectedPost}
          postList={postList}
          onClick={handleSelectedPost}
        />
      )}

      {selectedPost && (
        <Routes>
          <Route
            path=":id"
            element={
              <PreviewBottomSheet
                previewPost={selectedPost}
                postViewEvent={handlePostView}
                postDeleteEvent={() => setPostDeleteModalVisible(true)}
              />
            }
          />
        </Routes>
      )}
      <ConfirmModal
        modalVisible={emptyPostModalVisible}
        modalText={`?????? ????????? ?????????, ???????????? ????????? ????????????????`}
        primaryBtnText={`??? ?????????~`}
        secondaryBtnText={`????????? ?????????`}
        handleClose={() => setEmptyPostModalVisible(false)}
        primaryBtnEvent={() => {
          setEmptyPostModalVisible(false);
          navigate('/post/create');
        }}
        secondaryBtnEvent={() => setEmptyPostModalVisible(false)}
      />
      <ConfirmModal
        modalVisible={todayPostViewModalVisible}
        modalText={`?????? ?????? ??? ?????? ????????? ${openablePosts?.length}??? ?????????!`}
        primaryBtnText={`???????????????!`}
        secondaryBtnText={`????????? ?????????`}
        handleClose={() => setTodayPostViewModalVisible(false)}
        primaryBtnEvent={handleViewNow}
        secondaryBtnEvent={handleViewLater}
      />
      {selectedPost && (
        <ConfirmModal
          modalVisible={postDeleteModalVisible}
          modalText={`?????? ????????? ??????????????????????`}
          primaryBtnText={`???..??????`}
          secondaryBtnText={`????????????!`}
          handleClose={() => setPostDeleteModalVisible(false)}
          primaryBtnEvent={() => handleDeletePost(selectedPost?.postId)}
          secondaryBtnEvent={() => setPostDeleteModalVisible(false)}
        />
      )}
      <GlobalNavigation />
    </div>
  );
};

export default HomePage;
