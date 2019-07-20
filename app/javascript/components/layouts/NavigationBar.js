import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Styles = styled.div `
	.navbar {
		background-color: #222;
	}

	.navbar-brand {
		color: #bbb;

		&:hover {
			color: white;
		}
	}

	.navbar-nav .nav-link {
		color: white !important;
	}


`
const NavigationBar = () => { 
	return(
		<Styles>
			<Navbar expand="lg">
				<Navbar.Brand href="/">Rails With React</Navbar.Brand>
				<Navbar.Toggle area-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item> <NavLink to="/" className='nav-link'> Home </NavLink> </Nav.Item>
						<Nav.Item> <NavLink to="/about" className='nav-link'> About </NavLink> </Nav.Item>
						<Nav.Item> <NavLink to="/contact" className='nav-link'> Contact </NavLink> </Nav.Item>
						<Nav.Item> <NavLink to="/articles" className='nav-link'> Articles </NavLink> </Nav.Item>
						<Nav.Item> <NavLink to="/products" className='nav-link'> Products </NavLink> </Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Styles>
	);
};

export default NavigationBar;
