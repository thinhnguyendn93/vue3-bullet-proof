export enum StatusCodeEnum {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  ValidationFailed = 422,
  InternalServerError = 500,
  GoneRequest = 410,
  PreconditionFailed = 412,
  PageNotFound = 404,
  AccessTokenExpired = 440,
  NotAcceptable = 406,
}

export enum RouterPath {
  Home = '/',
  SignIn = '/sign-in',
  NotFound = '/not-found',
}

export enum LanguageEnum {
  Vietnamese = 'vi',
  English = 'en',
}
