import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand,Collapse,NavbarToggler,NavItem,Nav,UncontrolledDropdown} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">About Home Produts </NavbarBrand>
        </div>
        </Navbar>
    </div>
  );
}

export default App;
