import React, { Component } from "react";
import data from "./data.json";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ShoeShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoes Shop</h1>
        <ProductList products={data} />
        <Modal product={this.state.selectedProduct} />
      </div>
    );
  }
}
