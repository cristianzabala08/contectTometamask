import { ToastContainer, Toast } from "solid-bootstrap";
import {
  Component,
  createEffect,
  For,
  useContext,
} from "solid-js";
import { ContextoContador } from "../../contexts/ContextoContador";

const Toasts: Component<any> = () => {
  const [states, { addArrayClear }] = useContext(ContextoContador);

  createEffect(() => {
    const interval = setInterval(() => {
      if (states.toastList.length) {
        deleteToast(states.toastList[0].id);
      }
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [states.toastList]);

  const deleteToast = (id: string) => {
    let copyToastList = [...states.toastList];
    const listItemIndex = states.toastList.findIndex((e: any) => e.id === id);
    copyToastList.splice(listItemIndex, 1);
    addArrayClear([...copyToastList]);
  };

  return (
    <ToastContainer class="p-3 mt-5" position={"top-end"}>
      <For each={states.toastList}>
        {(elemento: any) => (
          <Toast bg={elemento.bg.toLowerCase()}>
            <Toast.Header closeButton={false}>
              <img src="holder.js/20x20?text=%20" class="rounded me-2" alt="" />
              <strong class="me-auto">{elemento.title}</strong>
            </Toast.Header>
            <Toast.Body>{elemento.description}</Toast.Body>
          </Toast>
        )}
      </For>
    </ToastContainer>
  );
};

export { Toasts as ToastComponent };
