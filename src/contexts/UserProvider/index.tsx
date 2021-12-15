import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Toast from '../../components/organism/Toast';
import { USER_NEED_LOGIN } from '../../utils/apis/config/constants';
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

  const refreshUserContext = useCallback(async () => {
    const { data } = await isUserSignUpApi();
    if (!data) {
      Toast.info(USER_NEED_LOGIN);
      return navigate('/login');
    }
    saveAllUserInfo({ nickname: data.nickname, profileImageUrl: data.profileImageUrl });
  }, []);

  useEffect(() => {
    if (userInfo.nickname.length === 0) {
      refreshUserContext();
    }
  }, [userInfo.nickname, userInfo.profileImageUrl]);
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
