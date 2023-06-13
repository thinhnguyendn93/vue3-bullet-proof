import type { State, Getters } from './types';

const getters: App.GettersTree<State> & Getters = {
  currentLanguage: (state: State): string => state.locale,
};

export default getters;
