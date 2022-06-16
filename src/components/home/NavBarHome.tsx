import { Container, Navbar } from "solid-bootstrap";

function NavBarHome() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">{" Solid Bootstrap"}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export { NavBarHome };
