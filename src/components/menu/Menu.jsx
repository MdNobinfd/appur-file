import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import './Menu.css';
import { Link } from 'react-router-dom';
 function Menu() {
  return (
   <>
<Navbar expand="lg" className='naw'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo}alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" star mx-auto">
            <Link className='nuwo' to="/">Home</Link>
            <Link className='nuwo' to="/about">About Us</Link>
            <Link className='nuwo' to="/feature">Feature</Link>
            <Link className='nuwo' to="/pricing">Pricing</Link>
            <Link className='nuwo' to="/faq">FAQ</Link>
            <Link className='nuwo' to="/blog">Blog</Link>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/feature">Feature</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link> */}
            <Button className="bttn"variant="outline-light"><a href="/contact">Contact Us</a></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
export default Menu;