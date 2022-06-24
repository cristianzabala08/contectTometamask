/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import i18n from "./assets/i18n/config";
import { I18nProvider } from "./components/I18n/18nProvider";
import i18next from "i18next";
import { createSignal, onMount, Show } from "solid-js";
import AppRouter from "./routers/App.routes";
import { Router } from "solid-app-router";
import { createI18n } from "./contexts/i18n/context";
import { LocalStoreLangue } from "./utils/LocalStore";
import { ProveedorContador } from "./contexts/ContextoContador";

function InicialPages() {
  const [loaded, setLoaded] = createSignal(false);
  const [i18nState, updatei18nState] = createI18n(i18next);

  onMount(async () => {
    await i18n;
    updatei18nState(i18next);
    setLoaded(true);
  });

  const handleOnChangeLanguage = (lang:string) => {
    i18next.changeLanguage(lang).then(() => {
      LocalStoreLangue(lang); // save language to localStorage
      updatei18nState(i18next);
    })
  }

  return (
    <Show when={loaded()}>
      <I18nProvider i18n={i18nState}>
        <Router>
          <AppRouter clicks={(e:string)=> handleOnChangeLanguage(e)}/> 
        </Router>
      </I18nProvider>
    </Show>
  );
}

render(() => <InicialPages />, document.getElementById("root") as HTMLElement);
