import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function JoshNav() {
  return (
    <Navbar  expand="lg" className="navClass m-auto navbar-dark">
      <Container >
        <div className="text-center mx-auto">
        <Navbar.Brand className="navHeader" href="#home">JOSH ALLFORD</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#AboutMe">About me</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#techStack">Tech Stack</Nav.Link>
            <Nav.Link href="#technicalProjects">Technical Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    
  );
}

export default JoshNav;