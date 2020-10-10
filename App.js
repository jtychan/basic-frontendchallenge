import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

function App() {
  return (
    
  <div className="App">
    <Container>
    <Navbar className="Navbar" bg="E5E5E5" expand="lg" variant="E5E5E5">
    <Navbar.Brand href="#home">Front</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>
        <Nav.Link href="#link">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Container>
      <div className="container-1">
      </div>
      </Container>
    </Container>
  <Row className="row">
  <Col md={6} sm={12}> 
    <h1 className="log-in"> Log-in</h1>
    <div>
      <input className="email-address" type="text" placeholder="Email address"/>
    </div>  
    <div>
      <input className="password" type="text" placeholder="Password"/>
    </div>
    <div>
      <Button className = "search-button" type ="submit">LOG IN</Button>
    </div>
  </Col>
  <Col md={6} sm={12}> 
  <div>
    <div className="triangle1"></div>
    <div className="triangle2"></div>
    <div className="triangle3"></div>
    <div className="triangle4"></div>
  </div>
  </Col>
  </Row>  
</div>
  )
}



export default App
