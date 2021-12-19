import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { UserInfo } from '..';
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
          key={user.nickname}
          imgSrc={user.profileImageUrl}
          imgAlt={`${user.nickname} Profile Image`}
          nickname={user.nickname}
          handleUserSelect={handleUserSelect}
        ></ResultItem>
      ))}
      <ObserveDiv ref={setTarget}></ObserveDiv>
    </ResultListContainer>
  );
};

export default ResultList;
