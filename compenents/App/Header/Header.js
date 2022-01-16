import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import {useAuth} from "../../../hooks/useAuth";

const Header = () => {
    const { isAuthenticated, logoutUser } = useAuth();

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Paranormax</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {!isAuthenticated ?
                                <>
                                    <Link href="/login"><Nav.Link href="/login">login</Nav.Link></Link>
                                    <Link href="/register"><Nav.Link href="/register">register</Nav.Link></Link>
                                </>
                                :
                                <>
                                    <Link href="/app/contact" ><Nav.Link href="/contact" >contact</Nav.Link></Link>
                                    <NavDropdown title="Profile Info" id="collasible-nav-dropdown">
                                        <Link href="/app/profile"><NavDropdown.Item href="/app/profile">View
                                            Profile</NavDropdown.Item></Link>
                                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
