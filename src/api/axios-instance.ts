import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { forEach, get } from 'lodash-es';
import {
  getAccessToken,
  getLanguage,
  setAccessToken,
  setRefreshToken,
} from 'utils/cookie';
import { DEFAULT_LANGUAGE } from 'config/constants';
import { RouterPath, StatusCodeEnum } from 'enums/app';
import { windowRedirect } from 'utils/helpers';
import { refreshTokenRequest } from './auth';

export const axiosInstance = axios.create();

let refreshSubscribers: Auth.RequestCallback[] = [];
let isRefreshing = false;

function handleRefreshToken(callback?: App.Callback): void {
  isRefreshing = true;
  refreshTokenRequest()
    .then((response) => {
      const { token, refreshToken } = response.data;
      const onSuccess = get(callback, 'onSuccess');
      if (onSuccess) {
        onSuccess(token);
      }
      setAccessToken(token);
      setRefreshToken(refreshToken);
      // store.dispatch(authenticate(response.data));
    })
    .catch(() => {
      // store.dispatch(signOut());
      windowRedirect(RouterPath.SignIn);
    })
    .finally(() => {
      isRefreshing = false;
    });
}

function handleAccessTokenError(
  originalRequest: AxiosRequestConfig,
): Promise<AxiosInstance> {
  if (!isRefreshing) {
    handleRefreshToken({
      onSuccess: (newToken) => {
        onRefreshed(newToken);
        refreshSubscribers = [];
      },
    });
  }
  return new Promise((resolve, reject) => {
    subscribeTokenRefresh((token: string) => {
      originalRequest.headers.Authorization = `Bearer ${token}`;
      return axios(originalRequest)
        .then((response) => resolve(response.data))
        .catch((error) => {
          const errorData = get(error, 'response.data');
          reject(errorData);
        });
    });
  });
}

function subscribeTokenRefresh(cb: Auth.RequestCallback): void {
  refreshSubscribers.push(cb);
}

function onRefreshed(token: string): void {
  forEach(refreshSubscribers, (cb) => {
    cb(token);
  });
}

axiosInstance.interceptors.request.use((config) => {
  try {
    const token = getAccessToken();
    if (token != null) {
      config.headers.authorization = `Bearer ${token}`;
    }

    const language = getLanguage() || DEFAULT_LANGUAGE;
    config.headers.language = language;

    return config;
  } catch (error) {
    throw new Error(error as string);
  }
});

axiosInstance.interceptors.response.use(
  (value: App.Any) => {
    return value;
  },
  (error: App.Any) => {
    const status = get(error, 'response.status');
    const errorData = get(error, 'response.data');
    if (status) {
      if (errorData != undefined) {
        const { message, metadata } = errorData;
        switch (status) {
          case StatusCodeEnum.Unauthorized:
          case StatusCodeEnum.AccessTokenExpired:
            return handleAccessTokenError(error.config);
          case StatusCodeEnum.BadRequest: {
            return Promise.reject({ ...errorData, status });
          }
          default:
            break;
        }
      }
    } else {
      windowRedirect(RouterPath.SignIn);
    }

    return Promise.reject(error);
  },
);
