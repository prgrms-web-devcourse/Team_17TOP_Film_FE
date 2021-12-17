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
  const navigate = useNavigate();
  const [userInfo, dispatch] = useReducer(reducer, initialUserInfo);

  const refreshUserContext = async () => {
    const { data } = await isUserSignUpApi();
    if (!data) {
      saveAllUserInfo({ nickname: '', profileImageUrl: '' });
      localStorage.removeItem('token');
      // return;
      navigate('/login');
    }
    saveAllUserInfo({
      nickname: data.nickname,
      profileImageUrl: data.profileImageUrl,
    });
  };

  const saveAllUserInfo = (userInfo: UserInfo) => {
    dispatch({
      type: 'SAVE_ALL_USER_INFO',
      payload: {
        ...userInfo,
      },
    });
  };

  return (
    <UserContext.Provider value={{ userInfo, saveAllUserInfo, refreshUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
