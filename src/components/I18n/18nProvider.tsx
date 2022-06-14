import { I18nContext } from '../../contexts/i18n/context';
import { I18n } from '../../interfaces/i18';

export function I18nProvider(props: I18n) {
  return (
    <I18nContext.Provider value={props.i18n}>
      {props.children}
    </I18nContext.Provider>
  );
}