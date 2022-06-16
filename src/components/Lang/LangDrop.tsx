import { createSignal, Show, createEffect } from "solid-js";
import { getLocalStoreLangue } from "../../utils/LocalStore";
import "./LangDrop.css";

const LangDrup = (props:{click?:(e:string)=>void}) => {
  const [lang, setLang] = createSignal<boolean>(false);
  const [langDrop, setLangDrop] = createSignal<string>("es");

  createEffect(() => {
    let langs: string = getLocalStoreLangue();
    setLangDrop(langs);
  });

  return (
    <div class="c-lang-dropdown d-flex justify-content-end m-1">
      <button id="lang-select" onclick={() => setLang(!lang())}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="c-lang-dropdown__icon pb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span class="c-lang-dropdown__text">{langDrop()}</span>
      </button>
      <Show when={lang() === true}>
        <div class="dropdown-item-list m-5 position-absolute">
          <div
            onclick={() => {
              props.click?.("es");
              setLang(!lang());
              setLangDrop("es");
            }}
          >
            ES
          </div>
          <div
            onclick={() => {
              props.click?.("en");
              setLang(!lang());
              setLangDrop("en");
            }}
          >
            EN
          </div>
        </div>
      </Show>
    </div>
  );
};

export default LangDrup;
