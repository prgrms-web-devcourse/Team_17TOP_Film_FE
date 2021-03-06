import React, { useCallback } from 'react';
import { UserInfo } from '..';
import Toast from '../../Toast';
import { ItemContainer, RoundImage, NicknameText, ItemWrapper, DisableText } from './style';
import nonProfile from '../../../../assets/images/img_profile.svg';
interface Props {
  id: number;
  imgSrc: string;
  imgAlt: string;
  nickname: string;
  handleUserSelect(data: UserInfo): void;
  disable: boolean;
}

const ResultItem = ({ id, imgSrc, imgAlt, nickname, handleUserSelect, disable }: Props) => {
  const handleClickUser = useCallback(() => {
    handleUserSelect({ nickname, profileImageUrl: imgSrc, id });
  }, []);

  return (
    <>
      <ItemContainer
        onClick={disable ? () => Toast.info('이미 추가된 유저입니다.') : () => handleClickUser()}
      >
        <ItemWrapper>
          <RoundImage
            src={imgSrc ? imgSrc : nonProfile}
            alt={imgAlt}
            placeholder={''}
            width={36}
            height={36}
          ></RoundImage>
          <NicknameText textType="Paragraph1">{nickname}</NicknameText>
        </ItemWrapper>
        {disable ? <DisableText textType="SmallText">- 목록에 있음</DisableText> : ''}
      </ItemContainer>
    </>
  );
};
export default ResultItem;
