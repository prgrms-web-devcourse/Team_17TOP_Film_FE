import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Header, Image, Text } from '../../components/atoms';
import { deletePostApi, getPostDetailApi } from '../../utils/apis/post';
import { PostDetail } from '../../utils/apis/post/type';
import ProfileImg from '../../assets/images/img_profile.svg';
import {
  PostDetailWrapper,
  OpenerInfo,
  PostInfo,
  PostContent,
  AuthoryityList,
  RelativeDay,
  DateText,
  MapWrapper,
  PostSubText,
  PostContentText,
} from './style';
import { FireworkEffect } from '../../components/organism';
import { StaticMap, Marker } from 'react-map-gl';
import { Pin } from '../../components/organism';
import ConfirmModal from '../HomePage/Modal';
import { useUserInfo } from '../../contexts/UserProvider';
import { getKST } from '../../utils/functions/getKST';

const PostDetailPage = () => {
  const { userInfo } = useUserInfo();
  const [lottieLoad, setLottieLoad] = useState(true);
  const navigate = useNavigate();
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState<PostDetail | null>(null);
  const [postDeleteModalVisible, setPostDeleteModalVisible] = useState(false);
  const [togetherDate, setTogetherDate] = useState(0);
  const getPostDetail = async (postId: number) => {
    const { data, error } = await getPostDetailApi(postId);
    console.log(data, error);
    if (!data) {
      console.log(error);
      return;
    }
    setPostDetail(data);
  };

  const handleDeletePost = async (postId: number) => {
    const { data, error } = await deletePostApi(postId);
    if (!data) {
      console.log(error);
      return;
    }
    setPostDeleteModalVisible(false);
    navigate(`/`);
  };

  useEffect(() => {
    postId && getPostDetail(parseInt(postId));
    const id = setTimeout(() => {
      setLottieLoad(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    if (!postDetail) {
      return;
    }
    const postCreatedAt = new Date(postDetail.createdAt).getDate();
    const today = getKST(false).getDate();
    setTogetherDate(today - postCreatedAt);
  }, [postDetail]);

  return (
    <div>
      {postDetail?.isOpened && lottieLoad && <FireworkEffect text="어? 제일 먼저 오셨네요?" />}
      {userInfo.nickname === postDetail?.authorNickname ? (
        <Header
          leftComp="backBtn"
          handleLeftEvent={() => navigate(-1)}
          midText="필름 보기"
          rightComp="delete"
          handleRightEvent={() => setPostDeleteModalVisible(true)}
        />
      ) : (
        <Header leftComp="backBtn" handleLeftEvent={() => navigate(-1)} midText="필름 보기" />
      )}
      {postDetail && (
        <PostDetailWrapper>
          <OpenerInfo>
            <Avatar
              src={postDetail.openerImageUrl ? postDetail.openerImageUrl : ProfileImg}
              size={26}
              alt="openerProfile"
              style={{ marginRight: 8 }}
            />
            <Text textType="Paragraph2">
              {postDetail.openerNickname}님이 {postDetail.openedAt.replace(/-/gi, '.')}에
              찾았습니다!🎉
            </Text>
          </OpenerInfo>
          <PostInfo>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={postDetail.authorImageUrl ? postDetail.authorImageUrl : ProfileImg}
                  size={36}
                  alt="authorProfile"
                  style={{ marginRight: 8 }}
                />
                <Text textType="Heading4">{postDetail.authorNickname}</Text>
              </div>
              <div style={{ marginTop: 24 }}>
                <DateText textType="Paragraph2">
                  <span>작성일</span>
                  {postDetail.createdAt.replace(/-/gi, '.')}
                </DateText>
                <DateText textType="Paragraph2">
                  <span>필름 나온 날</span>
                  {postDetail.availableAt.replace(/-/gi, '.')}
                </DateText>
              </div>
              <MapWrapper
                onClick={() => {
                  navigate(`/${postDetail.postId}`);
                }}
              >
                <StaticMap
                  width="100px"
                  height="100px"
                  latitude={parseFloat(postDetail.location.latitude)}
                  longitude={parseFloat(postDetail.location.longitude)}
                  zoom={9}
                  attributionControl={false}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                >
                  <Marker
                    latitude={parseFloat(postDetail.location.latitude)}
                    longitude={parseFloat(postDetail.location.longitude)}
                  >
                    <Pin style={{ width: '20px' }} selected={true} state={'OPENED'}></Pin>
                  </Marker>
                </StaticMap>
              </MapWrapper>
            </div>
            <RelativeDay textType="SmallText">{togetherDate + 1}일째 함께하는중😊</RelativeDay>
            <AuthoryityList>
              <Avatar.Group overlapPx={8}>
                {postDetail.authorityImageList.map((user) => (
                  <Avatar
                    key={user.authorityId}
                    src={user.imageUrl ? user.imageUrl : ProfileImg}
                    size={36}
                    alt="profile"
                  />
                ))}
              </Avatar.Group>
            </AuthoryityList>
          </PostInfo>

          <PostContent>
            <Text textType="Heading4">{postDetail.title}</Text>
            <PostSubText textType="Paragraph1">{postDetail.previewText}</PostSubText>
            {postDetail.imageUrls[0] && (
              <Image
                src={postDetail.imageUrls[0].imageUrl}
                alt="postImage"
                width={'100%'}
                height={'auto'}
                placeholder="https://via.placeholder.com/200"
              />
            )}
            {postDetail.content && (
              <PostContentText textType="Paragraph1">{postDetail.content}</PostContentText>
            )}
          </PostContent>
        </PostDetailWrapper>
      )}
      <ConfirmModal
        modalVisible={postDeleteModalVisible}
        modalText={`정말 필름을 삭제하시겠어요?`}
        primaryBtnText={`네..ㅜㅜ`}
        secondaryBtnText={`잠시만요!`}
        handleClose={() => setPostDeleteModalVisible(false)}
        primaryBtnEvent={() => postDetail && handleDeletePost(postDetail.postId)}
        secondaryBtnEvent={() => setPostDeleteModalVisible(false)}
      />
    </div>
  );
};

export default PostDetailPage;
