import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color="success"> {cartItem.quantity}</Badge>

              {cartItem.product.productName}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmpty(){
      return(
        <NavItem>
            <NavLink>Empty Cart</NavLink>
        </NavItem>
      );
  }

  render() {
    return <div>{this.props.cart.length>0?this.renderSummary():<div></div>}</div>;
  }
}
