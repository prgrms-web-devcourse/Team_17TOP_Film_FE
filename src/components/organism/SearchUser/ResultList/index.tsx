import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { UserInfo } from '..';
import { useSelectedUserList } from '../../../../contexts/SelectedUserListProvider';
import ResultItem from '../ResultItem';
import { ObserveDiv, ResultListContainer } from './style';

interface Props {
  divLoaded: boolean;
  userList: UserInfo[];
  setDivLoaded: Dispatch<SetStateAction<boolean>>;
  handleUserSelect(data: UserInfo): void;
}

const ResultList = ({ userList, setDivLoaded, handleUserSelect }: Props) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const selectedUserList = useSelectedUserList();
  const rootTarget = useRef(null);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDivLoaded(true);
        }
      },
      { threshold: 1, root: rootTarget.current },
    ),
  );

  const selectedCheck = (nickname: string) => {
    const alreadyIn = selectedUserList.selectedUserList.filter(
      (user) => user.nickname === nickname,
    );
    if (alreadyIn.length > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const currentObserver = observer.current;

    if (target) {
      currentObserver.observe(target);
    }
    return () => {
      if (target) {
        currentObserver.unobserve(target);
      }
    };
  }, [target]);

  return (
    <ResultListContainer ref={rootTarget}>
      {userList.map((user: UserInfo) => (
        <ResultItem
          key={user.id}
          id={user.id}
          imgSrc={user.profileImageUrl}
          imgAlt={`${user.nickname} Profile Image`}
          nickname={user.nickname}
          handleUserSelect={handleUserSelect}
          disable={selectedCheck(user.nickname) ? true : false}
        ></ResultItem>
      ))}
      <ObserveDiv ref={setTarget}></ObserveDiv>
    </ResultListContainer>
  );
};

export default ResultList;
