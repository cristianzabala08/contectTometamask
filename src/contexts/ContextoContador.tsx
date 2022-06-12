import {  createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const ContextoContador = createContext<any>([{ cuenta: 0 ,}, {}]);

export const ProveedorContador =(props:any)=> {
	const [states, setState] = createStore({ cuenta: props.count || 0 });
	const store = [
		states,
		{
			incrementar() {
				setState("cuenta", (c:number) => c + 1);
			},
			disminuir() {
				setState("cuenta", (c:number) => c - 1);
			},
		},
	];
	
	return <ContextoContador.Provider value={store}>{props.children}</ContextoContador.Provider>;
}