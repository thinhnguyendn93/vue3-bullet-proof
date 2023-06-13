export type State = {
  locale: string;
};

export interface Getters {
  currentLanguage(state: State): string;
}

export interface Actions {
  changeLanguage(): void;
  reset(): void;
}
