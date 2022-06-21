import { Component, createSignal, Match, Switch } from "solid-js";
import { HomeProvider } from "../../contexts/home/homeProvider";
import NavHome from "../../components/dashboard/Navbar/NavHome";
import { NavBarHome } from "../../components/dashboard/Nav/NavBarHome";
import { Container } from "solid-bootstrap";
import { HomePages } from "../../components/dashboard/home/Home";

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
      <NavHome setView={setViewSelected} view={viewSelected}>
        <NavBarHome />
        <Container class="mt-5 pt-3">
          <Switch fallback={<HomePages />}>
            <Match when={viewSelected() === "to do"}>
              <div>somos</div>
            </Match>
            <Match when={viewSelected() === "completed"}>
              <div>comple</div>
            </Match>
          </Switch>
        </Container>
      </NavHome>
    </HomeProvider>
  );
};

export default Home;
