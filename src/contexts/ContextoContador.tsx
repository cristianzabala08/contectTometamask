import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const ContextoContador = createContext([{ cuenta: 0 }, {}]);

export function ProveedorContador(props:any) {
	const [estado, setEstado] = createStore({ cuenta: props.count || 0 });
	const store = [
		estado,
		{
			incrementar() {
				setEstado("cuenta", (c) => c + 1);
			},
			disminuir() {
				setEstado("cuenta", (c) => c - 1);
			},
		},
	];

	return <ContextoContador.Provider value={store}>{props.children}</ContextoContador.Provider>;
}