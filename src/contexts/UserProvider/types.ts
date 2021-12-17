import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  initialUserInfo?: UserInfo;
}
export interface UserInfo {
  nickname: string;
  profileImageUrl: string;
}
export interface UserContextInterface {
  userInfo: UserInfo;
  saveAllUserInfo: (userInfo: UserInfo) => void;
  refreshUserContext: () => void;
}

type ActionType = 'SAVE_ALL_USER_INFO';

export type Action = { type: ActionType; payload: UserInfo };
