import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <ul>
          {this.props.cart.map((item, index) => {
            return (
              <li key={index}>
                {item.name} <button>-</button>{' '}
                <button
                  onClick={() => {
                    this.props.quantityIncrement(item.id);
                  }}
                >
                  +
                </button>{' '}
                Quantity: {this.props.cartProductQuantity}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cart;
