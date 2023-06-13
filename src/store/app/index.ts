import { defineStore } from 'pinia';
import initialState from './state';
import getters from './getters';
import actions from './actions';

export default defineStore({
  id: 'app',
  state: initialState,
  getters,
  actions,
});
