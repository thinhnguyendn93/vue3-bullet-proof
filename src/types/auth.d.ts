declare namespace Auth {
  export type SignInRequest = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  export type AuthRequest = {
    refreshToken: string;
  };

  export type AuthResponse = AuthRequest & {
    token: string;
    refreshToken: string;
    userInfo: any;
  };

  export type RequestCallback = (token: string) => Promise<void>;
}
