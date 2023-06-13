declare namespace App {
  // eslint-disable-next-line
  type Any = any;

  type RequestCallback = (token: string) => Promise<void>;

  export type Callback = {
    onSuccess?: (...args) => void;
    onFailure?: (...args) => void;
    onFinish?: (...args) => void;
  };

  export type Method = (...args: Any[]) => Any;
  export type Action = Record<string, Method>;
  export type ActionsTree<A, S> = Action & ThisType<Action & A & S>;
  export type GettersTree<S extends StateTree> = Record<
    string,
    ((state: S & PiniaCustomStateProperties<S>) => Any) | (() => Any)
  >;

  export type RouteContext = {
    to: RouteLocationNormalized;
    from: RouteLocationNormalized;
    next: NavigationGuardNext;
    isLoggedIn: boolean;
  };
}
