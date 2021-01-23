import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Driving</NavbarBrand>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Customer
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={Link} to="/customer">
                                    Add Customer
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/customerList">
                                    Customer List
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Directory
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={Link} to="/directory">
                                    Add Directory
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/directoryList">
                                    Directory List
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
