export type State = {
  locale: string;
};

export type Getters = {
  currentLanguage(state: State): string;
};

export type Actions = {
  changeLanguage(lang: App.AppLanguage): void;
  reset(): void;
};
