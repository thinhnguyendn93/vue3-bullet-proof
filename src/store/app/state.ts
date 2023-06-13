import { DEFAULT_LANGUAGE } from 'config/constants';
import { getLanguage } from 'utils/cookie';
import type { State } from './types';

const currentLanguage = getLanguage();

export default (): State => ({
  locale: currentLanguage || DEFAULT_LANGUAGE,
});
