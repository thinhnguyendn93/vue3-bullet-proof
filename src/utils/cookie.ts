import UniversalCookie from 'universal-cookie';
import { COOKIE_DOMAIN, COOKIE_EXPIRES_DATE } from 'config/constants';

const universalCookie = new UniversalCookie();

const expiredDate = new Date();
expiredDate.setDate(new Date().getDate() + COOKIE_EXPIRES_DATE);

const cookieOptions = {
  domain: COOKIE_DOMAIN,
  path: '/',
  expires: expiredDate,
};

export function setUserInfo(data: App.Any): void {
  universalCookie.set('userInfo', data, cookieOptions);
}

export function getUserInfo() {
  return universalCookie.get('userInfo') || {};
}

export function setRefreshToken(refreshToken: string) {
  universalCookie.set('refreshToken', refreshToken, cookieOptions);
}

export function setAccessToken(token: string) {
  universalCookie.set('token', token, cookieOptions);
}

export function setLanguage(lang: string) {
  universalCookie.set('i18next', lang, {
    path: '/',
  });
}

export function getRefreshToken(): string {
  return universalCookie.get('refreshToken');
}

export function getAccessToken(): string {
  return universalCookie.get('token');
}

export function getLanguage(): string {
  return universalCookie.get('i18next');
}

export function revokeUser(): void {
  const options = {
    path: '/',
  };
  universalCookie.remove('userInfo', options);
  universalCookie.remove('token', options);
  universalCookie.remove('refreshToken', options);
}
