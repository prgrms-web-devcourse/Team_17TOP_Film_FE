import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Header, Image, Text } from '../../components/atoms';
import { getPostDetailApi } from '../../utils/apis/post';
import { PostDetail } from '../../utils/apis/post/type';
import ProfileImg from '../../assets/images/img_profile.svg';
import {
  LocationButton,
  PostDetailWrapper,
  OpenerInfo,
  PostInfo,
  PostContent,
  AuthoryityList,
  RelativeDay,
  DateText,
} from './style';

const PostDetailPage = () => {
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
  }, []);
  return (
    <div>
      <Header leftComp="backBtn" handleLeftEvent={() => navigate(-1)} midText="사진 보기" />
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={postDetail.authorImageUrl ? postDetail.authorImageUrl : ProfileImg}
                  size={36}
                  alt="authorProfile"
                  style={{ marginRight: 8 }}
                />
                <Text textType="Heading4">{postDetail.authorNickname}</Text>
              </div>
              <LocationButton>위치 보기</LocationButton>
            </div>
            <div style={{ marginTop: 16 }}>
              <DateText textType="Paragraph2">
                <span>작성일</span>
                {postDetail.createdAt.replace(/-/gi, '.')}
              </DateText>
              <DateText textType="Paragraph2">
                <span>필름 나온 날</span>
                아직 db에 없음
              </DateText>
              <RelativeDay textType="SmallText">100일째 함께하는중😊</RelativeDay>
            </div>
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
