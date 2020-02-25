import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";


export default class Navi extends Component {
  toogle = this.toogle.bind(this);
  state = {
    isOpen: false
  };

  toogle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand><Link to="/">KaraApp</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to="/form1">Form1</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/form2">Form2</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
            </Nav>
            <NavbarText>Simple</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
