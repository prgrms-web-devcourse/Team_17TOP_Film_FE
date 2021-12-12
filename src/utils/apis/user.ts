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

export { isUserSignUpApi };
