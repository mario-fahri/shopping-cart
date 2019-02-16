import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <ul>
          <li>
            {this.props.cart.map(item => {
              return item.name;
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default Cart;
