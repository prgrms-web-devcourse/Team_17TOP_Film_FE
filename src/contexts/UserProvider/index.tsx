import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { Props, UserContextInterface, UserInfo } from './types';

const UserContext = createContext<UserContextInterface>({} as UserContextInterface);
export const useUserInfo = () => useContext(UserContext);

const UserProvider = ({
  children,
  initialUserInfo = { nickname: '', profileImageUrl: '' },
}: Props) => {
  const [userInfo, dispatch] = useReducer(reducer, initialUserInfo);

  const saveAllUserInfo = (userInfo: UserInfo) => {
    dispatch({
      type: 'SAVE_ALL_USER_INFO',
      payload: {
        ...userInfo,
      },
    });
  };

  return (
    <UserContext.Provider value={{ userInfo, saveAllUserInfo }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
