import axios from 'axios';

const isUserSignUpApi = async (token: string) => {
  try {
    const { data: isSignUp } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/users/duplicate`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return isSignUp;
  } catch (error) {
    console.error(error);
  }
};

const signUpApi = async (nickname: string, token: string) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/users/signup`,
      {
        nickname,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(res, 'res');
  } catch ({ response }) {
    console.log(response);
  }
};
export { isUserSignUpApi, signUpApi };
