import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Tomato from '../img/tomato.svg';
import Grape from '../img/grape.svg';
import Pineapple from '../img/pineapple.svg';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      productList: [
        { id: 1, name: 'tomato', price: 30, image: Tomato },
        { id: 2, name: 'grape', price: 35, image: Grape },
        { id: 3, name: 'pineapple', price: 50, image: Pineapple }
      ],
      cart: []
    };
  }

  addProduct = id => {
    const updateCart = this.state.productList.filter(item => {
      return item.id === id;
    });

    const newCart = this.state.cart.concat(updateCart[0]);
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div>
        <ProductList
          productList={this.state.productList}
          addProduct={this.addProduct}
        />
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}

export default Content;
