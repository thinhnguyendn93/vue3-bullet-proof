declare namespace App {
  // eslint-disable-next-line
  type Any = any;

  type RequestCallback = (token: string) => Promise<void>;

  export type Callback = {
    onSuccess?: (...args) => void;
    onFailure?: (...args) => void;
    onFinish?: (...args) => void;
  };
}
