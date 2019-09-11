import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';


class Navigation extends React.Component{

render(){
  return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Cat Scratch</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/logout">Logout</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="/about">About</NavDropdown.Item>
        <NavDropdown.Item href="/usercontainer">All User Profiles</NavDropdown.Item>
        <NavDropdown.Item href="/catcontainer">All Cat Breed's</NavDropdown.Item>
        <NavDropdown.Item href="/cartcontainer">All User's Selection</NavDropdown.Item>
        <NavDropdown.Item href="/catfactscontainer">Additional Cat Facts</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/emailverification">EmailVerification</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/Swofford2">Christopher Swofford</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
}
}
export default Navigation
