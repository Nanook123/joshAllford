import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function JoshNav() {
  return (
    <Navbar sticky="top" expand="lg" className="navClass m-auto navbar-dark">
      <Container >
        <div className="text-center mx-auto">
        <Navbar.Brand className="navHeader" href="#home">JOSH ALLFORD</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#link">Experience</Nav.Link>
            <Nav.Link href="#travel">Tech Stack</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    
  );
}

export default JoshNav;