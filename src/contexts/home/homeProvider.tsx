import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
const TodosContext = createContext();

export function HomeProvider(props:any) {
  const [todos, setTodos] = createStore(props.todoItems || { items: [] }),
    store = [
      todos,
      {
        addTodo(text:any) {
          setTodos("items", [...todos.items, { text, completed: false }]);
        },
        toggleTodo(text:any) {
          setTodos(
            "items",
            (i) => i.text === text,
            "completed",
            (c:any) => !c
          );
        }
      }
    ];

  return (
    <TodosContext.Provider value={store}>
      {props.children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}