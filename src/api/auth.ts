import { AxiosResponse } from 'axios';
import { getRefreshToken } from 'utils/cookie';
import { axiosInstance } from './axios-instance';

export const signInRequest = async (
  data: Auth.SignInRequest,
): Promise<AxiosResponse<Auth.AuthResponse>> =>
  axiosInstance.post<Auth.AuthResponse>(`${APP_URL}authentication/login`, data);

export const refreshTokenRequest = async (): Promise<
  AxiosResponse<Auth.AuthResponse>
> =>
  axiosInstance.post<Auth.AuthResponse>(
    `${APP_URL}authentication/refreshToken`,
    {
      refreshToken: getRefreshToken(),
    },
  );
