import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" }
    ],
    currentCategory:"fs",
  };

  changeCategory = (category)=>{
    this.setState({currentCategory:category.categoryName})
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem key={category.categoryId} onClick={this.changeCategory(category)}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
          <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
