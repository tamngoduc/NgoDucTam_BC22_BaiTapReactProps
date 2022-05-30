import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        id: "",
        name: "",
        image: "",
        price: "",
        quantity: "",
        description: "",
      },
    };
  }

  render() {
    return (
      <div className="modal fade" id="product-cart" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Chi tiết
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Mô tả</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img src={item.image} alt={item.name} width="50px" height="50px" />
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
