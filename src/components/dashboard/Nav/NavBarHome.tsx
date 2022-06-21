import { Container, Navbar } from "solid-bootstrap";
import './navbar.css'
function NavBarHome() {
  return (
    <header id="header" class="fixed-top ">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">{" Solid Bootstrap"}</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export { NavBarHome };
