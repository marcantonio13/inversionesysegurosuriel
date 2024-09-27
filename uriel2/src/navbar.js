import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



function Mynavbar() {
    return(
        <Navbar expand = "lg" bg="primary" variant="dark" >
            <Container>
                <NavbarBrand href='#home'> Uriel Avellaneda Asesor Financiero</NavbarBrand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href='#home' className='me-1'>Asesorias </Nav.Link>
                    
                    <NavDropdown title="Menú" id="basic-nav-dropdown">
                        <NavDropdown.Item href='#action/3.1'>Seguros de Vida</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>Seguros de Carro</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.3'>Planes de Retiro (PPR)</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.4'>Inversiones</NavDropdown.Item>

                        

                    </NavDropdown>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );

}

export default Mynavbar
