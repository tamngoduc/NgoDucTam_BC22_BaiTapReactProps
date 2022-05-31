import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default class ShoeShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
    };
  }

  handleDetail = (product) => {
    this.setState({ productDetail: product });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoes Shop</h1>
        <ProductList products={data} onDetailClick={this.handleDetail} />
        <Modal product={this.state.productDetail} />
      </div>
    );
  }
}
