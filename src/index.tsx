/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import i18n from "./assets/i18n/config";
import { I18nProvider } from "./components/I18n/18nProvider";
import i18next from "i18next";
import { createSignal, onMount, Show } from "solid-js";
import AppRouter from "./routers/App.routes";
import { Router } from "solid-app-router";

function InicialPages() {
  const [loaded, setLoaded] = createSignal(false);
  onMount(async () => {
    await i18n;
    setLoaded(true);
  });

  const handleOnChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang).then(() => {
      //  updatei18nState(i18next);
    });
  };

  return (
    <Show when={loaded()}>
      <I18nProvider i18n={i18next}>
        <Router>
          <AppRouter />
        </Router>
      </I18nProvider>
    </Show>
  );
}

render(() => <InicialPages />, document.getElementById("root") as HTMLElement);
