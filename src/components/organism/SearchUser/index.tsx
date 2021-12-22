import { Container, Input, InputWrapper, WarnText } from './style';
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
  const [searchable, setSearchable] = useState(true);

  const handleSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
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

  const checkKeyword = (keyword: string) => {
    if (keyword.match(/[^A-Za-z0-9]/gi)) {
      return true;
    }
    return false;
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
      setSearchable(true);
      setUserList([]);
      return;
    }
    if (checkKeyword(searchKeyword)) {
      setUserList([]);
      setSearchable(false);
    } else {
      setSearchable(true);
      setUserList([]);
      getUserList(true);
    }
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
      <InputWrapper>
        <Input
          placeholder="닉네임을 입력하세요!"
          value={searchKeyword}
          onChange={handleSearchInput}
        />
        {!searchable ? (
          <WarnText textType="SmallText">검색은 영문 혹은 숫자로만 가능합니다.</WarnText>
        ) : (
          ''
        )}
      </InputWrapper>
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
