import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Header, Image, Text } from '../../components/atoms';
import { getPostDetailApi } from '../../utils/apis/post';
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
} from './style';
import { FireworkEffect } from '../../components/organism';
import { StaticMap, Marker } from 'react-map-gl';
import { Pin } from '../../components/organism';

const PostDetailPage = () => {
  const [lottieLoad, setLottieLoad] = useState(true);
  const navigate = useNavigate();
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState<PostDetail | null>(null);

  const getPostDetail = async (postId: number) => {
    const { data, error } = await getPostDetailApi(postId);
    console.log(data, error);
    if (!data) {
      console.log(error);
      return;
    }
    setPostDetail(data);
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

  return (
    <div>
      {postDetail?.isOpened && lottieLoad && <FireworkEffect text="어? 제일 먼저 오셨네요?" />}
      <Header leftComp="backBtn" handleLeftEvent={() => navigate(-1)} midText="필름 보기" />
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
            <RelativeDay textType="SmallText">100일째 함께하는중😊</RelativeDay>
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
            <Text textType="Paragraph1">{postDetail.previewText}</Text>
            {postDetail.imageUrls[0] && (
              <Image
                src={postDetail.imageUrls[0].imageUrl}
                alt="postImage"
                width={200}
                height={200}
                placeholder="https://via.placeholder.com/200"
              />
            )}
            {postDetail.content && <Text textType="Paragraph1">{postDetail.content}</Text>}
          </PostContent>
        </PostDetailWrapper>
      )}
    </div>
  );
};

export default PostDetailPage;
