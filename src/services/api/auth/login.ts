import { AUTH_API_URL, httpClient } from '..';

interface ILoginService {
  user: string;
  password: string;
}

export const LoginService = async ({ user, password }: ILoginService) => {
  try {
    const response = await httpClient(`${AUTH_API_URL}/signIn`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        password,
      }),
    });

    const json = await response.json();

    if (response.status !== 200) {
      return [json, true];
    }

    return [json, null];
  } catch (error) {
    return [null, error];
  }
};
