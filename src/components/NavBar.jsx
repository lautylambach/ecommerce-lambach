import logo from '../logo.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBar.css'
import CartWidget from './CartWidget'


export const NavBar = () => {
  return (

    <div>
    <Navbar className="nav-bar" bg="dark" variant={"dark"} expand="lg">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <span>Lambach Tienda Informatica</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navlink' href="#inicio">Inicio</Nav.Link>
            <Nav.Link className='navlink' href="#periferico">Perifericos</Nav.Link>
            <Nav.Link className='navlink' href="#monitores">Monitores</Nav.Link>
            <Nav.Link className='navlink' href="#placasmadres">PlacasMadres</Nav.Link>
        
          </Nav>
          <CartWidget initial={0}/>
          <Form className="d-flex">
            <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
            />
            <Button className='btn' variant="light">Search</Button>
            </Form>
            
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
    
  )
}
