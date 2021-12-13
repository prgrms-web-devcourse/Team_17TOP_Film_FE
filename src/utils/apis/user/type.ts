import { ErrorType } from '../config/type';

export interface IsUserSignUpApi {
  data: { isDuplicate: boolean };
  error: ErrorType;
}
export interface SignUpApi {
  data: { nickname: string; profileImageUrl: string };
  error: ErrorType;
}
