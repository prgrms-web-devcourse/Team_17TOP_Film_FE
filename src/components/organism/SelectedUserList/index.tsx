import { useSelectedUserList } from '../../../contexts/SelectedUserListProvider';
import { UserInfo } from '../SearchUser';
import SelectedUserCard from './SelectedUserCard.tsx';
import { ListContainer } from './style';

interface Props {
  userList: UserInfo[];
}

const SelectedUserList = ({ userList }: Props) => {
  const selectedUserList = useSelectedUserList();
  return (
    <ListContainer>
      {userList.length >= 0
        ? userList.map((user: UserInfo) => (
            <SelectedUserCard
              key={user.nickname}
              id={user.id}
              nickname={user.nickname}
              profileImageUrl={user.profileImageUrl}
              removeCard={selectedUserList.deleteSelectedUser}
            ></SelectedUserCard>
          ))
        : ''}
    </ListContainer>
  );
};
export default SelectedUserList;
