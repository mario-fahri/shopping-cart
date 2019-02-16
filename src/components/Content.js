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
        { id: 1, name: 'tomato', price: 30, image: Tomato, quantity: 0 },
        { id: 2, name: 'grape', price: 35, image: Grape, quantity: 0 },
        { id: 3, name: 'pineapple', price: 50, image: Pineapple, quantity: 0 }
      ],
      cart: [],
      cartProductQuantity: []
    };
  }

  addProduct = id => {
    // const updateCart = this.state.productList.find(item => {
    //   let result = '';
    //   if (item.id === id) {
    //     result = item;
    //   }
    //   return result;

    //   //   return item.id === id;
    // });

    // const newCart = this.state.cart.concat(updateCart);
    // // console.log(newCart);
    // this.setState({ cart: newCart });
    const updateCart = this.state.productList.filter(item => {
      return item.id === id;
    });

    const newCart = this.state.cart.concat(updateCart[0]);
    this.setState({ cart: newCart });
  };

  quantityIncrement = id => {
    const increment = this.state.cart.map(item => {
      if (item.id === id) {
        return (item.quantity = item.quantity + 1);
      }
    });

    let updateQuantity = this.state.cartProductQuantity.concat(increment);
    this.setState({ cartProductQuantity: increment });

    // let getSelectedCartId = this.state.cart.filter(item => {
    //   return item.id === id;
    // });

    // let inc = this.state.cartProductQuantity.concat(
    //   getSelectedCartId[0].quantity
    // );

    // this.setState({ cartProductQuantity: inc });

    // const updateProductQuantity = this.state.cartProductQuantity.push(
    //   getSelectedCartId[0].quantity
    // );
    //console.log(this.state.cartProductQuantity);
    // let increment = this.state.cartProductQuantity.push(
    //   getSelectedCartId[0].quantity
    // );
    // const updateProductQuantity = this.state.cartProductQuantity.concat(
    //   increment
    // );
    // let increments = this.state.cartProductQuantity.map(item => {
    // return item + 1;
    // });
    //this.setState({ cartProductQuantity: updateProductQuantity });
  };

  render() {
    return (
      <div>
        <ProductList
          productList={this.state.productList}
          addProduct={this.addProduct}
        />
        <Cart
          cart={this.state.cart}
          quantityIncrement={this.quantityIncrement}
          cartProductQuantity={this.state.cartProductQuantity}
        />
      </div>
    );
  }
}

export default Content;
