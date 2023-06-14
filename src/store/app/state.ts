import { getLanguage } from 'utils/cookie';
import type { State } from './types';

export default (): State => ({
  locale: getLanguage(),
});
