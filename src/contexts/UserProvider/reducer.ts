import { Action, UserInfo } from './types';

const reducer = (state: UserInfo, { type, payload }: Action) => {
  switch (type) {
    case 'SAVE_ALL_USER_INFO': {
      return {
        nickname: payload.nickname,
        profileImageUrl: payload.profileImageUrl,
      };
    }
  }
};

export { reducer };
