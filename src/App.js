import React,{ Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand,Collapse,NavbarToggler,NavItem,Nav,UncontrolledDropdown} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './share/dishes';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">About Home Produts </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
  );
  }
}

export default App;
