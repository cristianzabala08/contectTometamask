import {
  createEffect,
  createSignal,
  For,
  Match,
  Show,
  Switch,
  useContext,
} from "solid-js";

import { createStore } from "solid-js/store";
import Home from "./home";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Form from './components/form'
import { ContextoContador } from "./contexts/ContextoContador";

const App = () => {
  const [nombre, setNombre] = createSignal("");
  const [apellido, setApellido] = createSignal("");
  const [getValor, setValor] = createSignal({ equals: false, other: false });
  const [count, setCount] = createSignal(0);
  const [miString, setMiString] = createSignal("string", {
    equals: (newVal, oldVal) => newVal.length === oldVal.length,
  });
  const [states, {incrementar,disminuir}] = useContext(ContextoContador);

  const [data, setdata] = createSignal({
    address: "",
    Balance: null,
  });

  const state: any[] = [
    { lista: "cristian" },
    { lista: "zabala" },
    { lista: "perfecto" },
    { lista: "lista" },
  ];

  createEffect(() => {
    setNombre("cristian");
    setApellido("zabala");
    setValor({ equals: true, other: true });
    setMiString("stranger");
    create();
  });

  function Somos() {
    return (
      <div>
        <p>aqui somos unos</p>
      </div>
    );
  }

  function click(item: string): void {
    setCount(count() + 1);
  }

  function accountChangeHandler(account: string) {
    setdata({ ...data(), address: account });
    console.log(window.ethereum.networkVersion);
  }


  async function onClick(): Promise<void> {

    if (window.ethereum) {

      try {
        let data: any = await window.ethereum
          .request({ method: "eth_requestAccounts" });

        accountChangeHandler(data[0])
      } catch (error) {
        console.log(error)
      }

    } else {
      alert("install metamask extension!!")
    }
  }

  function create(): void {
    incrementar();
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
      <button onclick={create}>
        click
      </button>
      <p>{states.cuenta}</p>
        <img src={logo} class={styles.logo} alt="logo" />
        <Form onSubmit={() => console.log('asad')} />
        <button onclick={() => onClick()}>other</button>
        <Home name="somos" />
        <For each={state} fallback={<div>Cargando...</div>}>
          {(elemento, index) => (
            <div>
              {index} {elemento.lista}
            </div>
          )}
        </For>
        <Show when={count() === 1} fallback={<div>Cargando...</div>}>
          <div>Mi Contenidio</div>
        </Show>
        <Switch fallback={<div>No Encontrado</div>}>
          <Match when={count() === 1}>
            <div>play</div>
          </Match>
          <Match when={count() === 2}>nothing</Match>
        </Switch>
        <div>{count}</div>
        <p>{`${nombre()}  ${apellido()}`}</p>
        {getValor() ? "somos" : "todos iguales"}
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Somos />
        </a>
        {miString()}

        <button onClick={() => click("somos")}>somos unos</button>
      </header>
    </div>
  );
};

export default App;