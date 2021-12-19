import { createContext, ReactNode, useContext, useReducer } from 'react';
import { UserInfo } from '../../components/organism/SearchUser';
import { reducer } from './reducer';
import { SelectedUserListContextInterface } from './type';

interface Props {
  children: ReactNode;
  initialSelectedUserList?: UserInfo[];
}

const SelectedUserListContext = createContext<SelectedUserListContextInterface>(
  {} as SelectedUserListContextInterface,
);
export const useSelectedUserList = () => useContext(SelectedUserListContext);

const SelectedUserListProvider = ({ children, initialSelectedUserList = [] }: Props) => {
  const [selectedUserList, dispatch] = useReducer(reducer, initialSelectedUserList);

  const addSelectedUser = (selectedUser: UserInfo) => {
    dispatch({
      type: 'ADD_SELECTED_USER',
      payload: selectedUser,
    });
  };

  const deleteSelectedUser = (selectedUser: UserInfo) => {
    dispatch({
      type: 'DELETE_SELECTED_USER',
      payload: selectedUser,
    });
  };

  const clearSelectedUserList = () => {
    dispatch({
      type: 'CLEAR_SELECTED_USER_LIST',
      payload: { nickname: '', profileImageUrl: '' },
    });
  };

  return (
    <SelectedUserListContext.Provider
      value={{ selectedUserList, addSelectedUser, deleteSelectedUser, clearSelectedUserList }}
    >
      {children}
    </SelectedUserListContext.Provider>
  );
};
export default SelectedUserListProvider;
