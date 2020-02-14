import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
        <Navi />
        </Row>
        <Row></Row>
      </Container>
      
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
