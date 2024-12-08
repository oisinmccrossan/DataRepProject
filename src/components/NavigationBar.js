import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// NavigationBar component definition
const NavigationBar = () => {
  return (
    // Navbar component with primary background and dark variant
    <Navbar bg="primary" variant="dark">
      <Container>
        {/* Brand name with a link to the home page */}
        <Navbar.Brand href="/">Video Game Tracker</Navbar.Brand>
        <Nav className="me-auto">
          {/* Navigation links */}
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Export the NavigationBar component as the default export
export default NavigationBar;