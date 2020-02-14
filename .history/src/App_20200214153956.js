import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  render() {
    return (
      <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Category List" />
          </Col>
          <Col xs="9">
            <ProductList title="Product List" />
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}



function App() {
  
  return (
    
  );
}

export default App;
