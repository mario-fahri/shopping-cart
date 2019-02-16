import React, { Component } from 'react';
import ProductList from './ProductList';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      productList: [
        { name: 'tomato', price: 30 },
        { name: 'grape', price: 35 },
        { name: 'pineapple', price: 50 }
      ]
    };
  }
  render() {
    return (
      <div>
        <ProductList productList={this.state.productList} />
      </div>
    );
  }
}

export default Content;
