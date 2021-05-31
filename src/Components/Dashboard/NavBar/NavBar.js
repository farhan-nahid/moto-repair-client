import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import ProfilePopper from '../../HomeComponents/ProfilePopper/ProfilePopper';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg='light'>
                <Nav className="ml-auto">
                    <ProfilePopper />
                </Nav>
        </Navbar>
    );
};

export default NavBar;