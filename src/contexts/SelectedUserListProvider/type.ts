import { UserInfo } from '../../components/organism/SearchUser';

export interface SelectedUserListContextInterface {
  selectedUserList: UserInfo[];
  addSelectedUser: (selectedUser: UserInfo) => void;
  deleteSelectedUser: (selectedUser: UserInfo) => void;
  clearSelectedUserList: () => void;
}

type ActionType = 'ADD_SELECTED_USER' | 'DELETE_SELECTED_USER' | 'CLEAR_SELECTED_USER_LIST';

export type Action = { type: ActionType; payload: UserInfo };
