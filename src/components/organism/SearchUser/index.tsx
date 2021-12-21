import { Container, Input } from './style';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ResultList from './ResultList';
import { useSelectedUserList } from '../../../contexts/SelectedUserListProvider';
import { getSearchUser } from '../../../utils/apis/searchUser';
import Toast from '../Toast';
import { useUserInfo } from '../../../contexts/UserProvider';

export interface UserInfo {
  nickname: string;
  profileImageUrl: string;
  id: number;
}

const SearchUser = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [userList, setUserList] = useState<UserInfo[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserInfo>();
  const [divLoaded, setDivLoaded] = useState(false);
  const selectedUserList = useSelectedUserList();
  const [lastNickname, setLastNickname] = useState('');
  const userInfo = useUserInfo();

  const handleSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value.replace(/[^A-Za-z0-9]/gi, ''));
  }, []);

  const handleUserSelect = useCallback((data: UserInfo) => {
    setSelectedUser(data);
    setSearchKeyword('');
    setUserList([]);
  }, []);

  const getUserList = async (firstSend: boolean) => {
    const userData = await getSearchUser({
      keyword: searchKeyword,
      lastNickname: firstSend ? '' : lastNickname,
      size: 5,
    });
    if (!userData.data) {
      Toast.warn('서버에 문제가 있네요 잠시후에 다시 시도 해주세요');
      return;
    }
    const searchResults = userData.data.filter(
      (user) => user.nickname !== userInfo.userInfo.nickname,
    );
    if (searchResults.length < 1) return;
    setLastNickname(searchResults[searchResults.length - 1].nickname);
    firstSend ? setUserList(searchResults) : setUserList((prev) => [...prev, ...searchResults]);
  };

  useEffect(() => {
    if (!selectedUser) {
      return;
    }
    selectedUserList.addSelectedUser(selectedUser);
    setLastNickname('');
  }, [selectedUser]);

  useEffect(() => {
    if (!searchKeyword) {
      setUserList([]);
      return;
    }
    getUserList(true);
  }, [searchKeyword]);

  useEffect(() => {
    if (!divLoaded) {
      return;
    }
    getUserList(false);
    setDivLoaded(false);
  }, [divLoaded]);

  return (
    <Container>
      <Input
        placeholder="닉네임을 입력하세요!(영문으로만 입력 가능합니다.)"
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
