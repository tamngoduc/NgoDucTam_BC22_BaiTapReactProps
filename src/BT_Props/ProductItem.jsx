import React from "react";

export default function ProductItem(props) {
  const { product, setStateModal } = props;

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" width="100%" height="300px" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price} $</p>
        <button className="btn btn-dark">
          <span className="mr-2">add to cart</span>
          <i className="fa-solid fa-cart-plus"></i>
        </button>

        <button className="btn btn-success" data-toggle="modal" data-target="#product-cart" onClick={() => setStateModal(product)}>
          Detail
        </button>
      </div>
    </div>
  );
}
