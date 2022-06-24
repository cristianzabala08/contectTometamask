import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { ToasInterface } from "../interfaces/ToasInterfaces";

export const ContextoContador = createContext<any>([{ toastList: [] }]);

export const ProveedorContador = (props: any) => {
  const [states, setState] = createStore<{
    toastList: Array<ToasInterface>;
  }>({ toastList: props.count || [] });
  const store = [
    states,
    {
      addArray(toasData: ToasInterface) {
        setState("toastList",  [...states.toastList, toasData] );
      },
	  addArrayClear(toasData: Array<ToasInterface>){
		setState("toastList",  toasData );
	  }
    },
  ];

  return (
    <ContextoContador.Provider value={store}>
      {props.children}
    </ContextoContador.Provider>
  );
};
