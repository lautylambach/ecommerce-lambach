import logo from '../logo.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (

    <div>
    <Navbar className="nav-bar" bg="dark" variant={"dark"} expand="lg">
      <Container fluid>
      <Navbar.Brand >
          <NavLink className='navlink' to='/'>
          <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <span>Lambach Tienda Informatica</span>
          </NavLink>
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navflex">
            <NavLink className='navlink' to='/'>Inicio</NavLink>
            <NavLink className='navlink' to='/category/periferico'>Perifericos</NavLink>
            <NavLink className='navlink' to='/category/monitor'>Monitores</NavLink>
            <NavLink className='navlink' to='/category/placamadre'>PlacasMadres</NavLink>
        
          </Nav>
          <NavLink className='navlink' to='/cart'><CartWidget initial={0}/></NavLink>
          
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
