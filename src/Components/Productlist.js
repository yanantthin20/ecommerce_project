import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Panel from "./Fragment/Panel";

export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <Panel />
        <div className="py-5">
          <div className="container">
            <Title name="Welcome" title="To" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
