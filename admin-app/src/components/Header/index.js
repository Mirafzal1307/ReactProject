import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../../actions';

function Header() {


    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    
    const logout = () => {
         dispatch (signout())


    }


    const renderLoggedInLinks = () => {
        return (
            <Nav>

                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Sign Out</span>
                </li>


            </Nav>

        );
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">Sign In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                </li>


            </Nav>

        );
    }

    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
                <Container fluid>
                    <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="me-auto">
                    
                        </Nav> */}
                        {/* <Nav>
                            <li className="nav-item">
                                <NavLink to="/signin" className="nav-link">Sign In</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                            </li>


                        </Nav> */}

                        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
