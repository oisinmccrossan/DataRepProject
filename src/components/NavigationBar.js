import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Video Game Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;