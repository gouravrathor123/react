import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand,Collapse,NavbarToggler,NavItem,Nav,UncontrolledDropdown} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div>
        <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">About Home Produts </NavbarBrand>
        </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
