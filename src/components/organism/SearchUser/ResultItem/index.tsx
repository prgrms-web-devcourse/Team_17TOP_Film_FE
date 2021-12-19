import React, { useCallback } from 'react';
import { UserInfo } from '..';
import { ItemContainer, RoundImage, NicknameText, ItemWrapper } from './style';

interface Props {
  imgSrc: string;
  imgAlt: string;
  nickname: string;
  handleUserSelect(data: UserInfo): void;
}

const ResultItem = ({ imgSrc, imgAlt, nickname, handleUserSelect }: Props) => {
  const handleClickUser = useCallback(() => {
    handleUserSelect({ nickname, profileImageUrl: imgSrc });
  }, []);

  return (
    <>
      <ItemContainer>
        <ItemWrapper onClick={() => handleClickUser()}>
          <RoundImage
            src={imgSrc}
            alt={imgAlt}
            placeholder={''}
            width={36}
            height={36}
          ></RoundImage>
          <NicknameText textType="Paragraph1">{nickname}</NicknameText>
        </ItemWrapper>
      </ItemContainer>
    </>
  );
};
export default ResultItem;
