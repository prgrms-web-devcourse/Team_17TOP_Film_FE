import { Container, Input } from './style';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ResultList from './ResultList';
import { useSelectedUserList } from '../../../contexts/SelectedUserListProvider';

const DUMMY_USER_LIST = [
  { nickname: '동진', profileImageUrl: 'https://picsum.photos/200' },
  { nickname: '소정', profileImageUrl: 'https://picsum.photos/200' },
  { nickname: '정호', profileImageUrl: 'https://picsum.photos/200' },
  { nickname: '정호2', profileImageUrl: 'https://picsum.photos/200' },
  { nickname: '정호3', profileImageUrl: 'https://picsum.photos/200' },
  { nickname: '정호4', profileImageUrl: 'https://picsum.photos/200' },
  { nickname: '정호5', profileImageUrl: 'https://picsum.photos/200' },
  { nickname: '정호6', profileImageUrl: 'https://picsum.photos/200' },
];

export interface UserInfo {
  nickname: string;
  profileImageUrl: string;
}

const SearchUser = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [userList, setUserList] = useState<UserInfo[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserInfo>();
  const [divLoaded, setDivLoaded] = useState(false);
  const selectedUserList = useSelectedUserList();
  const handleSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }, []);

  const handleUserSelect = useCallback((data: UserInfo) => {
    setSelectedUser(data);
    setSearchKeyword('');
    setUserList([]);
  }, []);

  useEffect(() => {
    if (!selectedUser) {
      return;
    }
    selectedUserList.addSelectedUser(selectedUser);
  }, [selectedUser]);

  useEffect(() => {
    if (!searchKeyword) {
      setUserList([]);
      return;
    }
    setUserList(DUMMY_USER_LIST);
    //api 로직 -> response -> setUserList
  }, [searchKeyword]);

  useEffect(() => {
    if (!divLoaded) {
      return;
    }
    setUserList((prev) => [...prev, ...DUMMY_USER_LIST]);
    setDivLoaded(false);
  }, [divLoaded]);

  return (
    <Container>
      <Input
        placeholder="닉네임을 입력하세요!"
        value={searchKeyword}
        onChange={handleSearchInput}
      />
      {userList && userList.length > 0 ? (
        <ResultList
          userList={userList}
          divLoaded={divLoaded}
          setDivLoaded={setDivLoaded}
          handleUserSelect={handleUserSelect}
        ></ResultList>
      ) : (
        ''
      )}
    </Container>
  );
};

export default SearchUser;
