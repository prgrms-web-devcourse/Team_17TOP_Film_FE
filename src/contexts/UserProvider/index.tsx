import { createContext, useCallback, useContext, useLayoutEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserSignUpApi } from '../../utils/apis/user';
import { reducer } from './reducer';
import { Props, UserContextInterface, UserInfo } from './types';

const UserContext = createContext<UserContextInterface>({} as UserContextInterface);
export const useUserInfo = () => useContext(UserContext);

const UserProvider = ({
  children,
  initialUserInfo = { nickname: '', profileImageUrl: '' },
}: Props) => {
  const [userInfo, dispatch] = useReducer(reducer, initialUserInfo);

  const refreshUserContext = useCallback(async () => {
    saveAllUserInfo({ nickname: '', profileImageUrl: '' });
    const { data } = await isUserSignUpApi();

    if (!data) {
      return saveAllUserInfo({ nickname: '', profileImageUrl: '' });
    }
    saveAllUserInfo({
      nickname: data.nickname,
      profileImageUrl: data.profileImageUrl,
    });
  }, []);

  const saveAllUserInfo = (userInfo: UserInfo) => {
    dispatch({
      type: 'SAVE_ALL_USER_INFO',
      payload: {
        ...userInfo,
      },
    });
  };
  useLayoutEffect(() => {
    refreshUserContext();
  }, [refreshUserContext]);
  return (
    <UserContext.Provider value={{ userInfo, saveAllUserInfo, refreshUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
