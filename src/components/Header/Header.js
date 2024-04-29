import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">Cồ Huy Khoa</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand'>Cồ Huy Khoa</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/users' className='nav-link'>Users</NavLink>
                        <NavLink to='/admins' className='nav-link'>Admin</NavLink>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#users"User</Nav.Link>
                        <Nav.Link href="#admin">Admin</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <button className='btn-login'>Log in</button>
                        <button className='btn-signup'>Sign up</button>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item>Log in</NavDropdown.Item>
                            <NavDropdown.Item>Log out</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;