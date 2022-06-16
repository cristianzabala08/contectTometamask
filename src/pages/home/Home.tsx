import { Component, createSignal, Match, Switch } from "solid-js";
import { HomeProvider } from "../../contexts/home/homeProvider";
import NavHome from "../../components/home/NavHome";
import "./Home.modules.css";
import { Container, Navbar } from "solid-bootstrap";
import { NavBarHome } from "../../components/home/NavBarHome";

const Home: Component = () => {
  const [viewSelected, setViewSelected] = createSignal("all");
  const defaultTodos = {
    items: [
      { text: "Finish SolidJS demo", completed: false },
      { text: "Write blog post about SolidJS", completed: false },
    ],
  };

  return (
    <HomeProvider todoItems={defaultTodos}>
      <div class="App">
        <NavHome setView={setViewSelected} view={viewSelected} />
        <div>
        <NavBarHome/>
          <Switch fallback={<div>TODOS</div>}>
            <Match when={viewSelected() === "to do"}>
              <div>somos</div>
            </Match>
            <Match when={viewSelected() === "completed"}>
              <div>comple</div>
            </Match>
          </Switch>
        </div>
      </div>
    </HomeProvider>
  );
};

export default Home;
