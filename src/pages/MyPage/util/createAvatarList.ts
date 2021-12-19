import img_profile from '../../../assets/images/img_profile.svg';

const createAvatarList = ({ imageOrder, imageUrl }: { imageOrder: number; imageUrl?: string }) => ({
  key: `프로필 이미지${imageOrder}`,
  src: imageUrl ? imageUrl : img_profile,
  alt: `프로필 이미지${imageOrder}`,
});
export default createAvatarList;
