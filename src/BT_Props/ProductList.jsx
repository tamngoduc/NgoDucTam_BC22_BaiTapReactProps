import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  const { products, onDetailClick } = props;

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ProductItem product={product} setStateModal={onDetailClick} />
          </div>
        );
      })}
    </div>
  );
}
