import { UserInfo } from '../../components/organism/SearchUser';
import { Action } from './type';

const reducer = (state: UserInfo[], { type, payload }: Action) => {
  switch (type) {
    case 'ADD_SELECTED_USER': {
      return [...state, payload];
    }
    case 'DELETE_SELECTED_USER': {
      return state.filter((user) => user.nickname !== payload.nickname);
    }
    case 'CLEAR_SELECTED_USER_LIST': {
      return [];
    }
  }
};

export { reducer };
