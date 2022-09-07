import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Navbar, Container, NavbarBrand, FormControl, Dropdown, Nav, Badge } from 'react-bootstrap'



const Header = () => {

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <NavbarBrand>
                    <a href="/">Shopping Cart</a>
                </NavbarBrand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }} placeholder="search a product"
                        className='m-auto'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }} >
                            <span style={{ padding: 10 }}>Cart is Empty</span>
                        </Dropdown.Menu>

                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header