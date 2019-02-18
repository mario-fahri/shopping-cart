import React, { Component } from 'react';
import Products from './Products';
import { Container, Row, Col } from 'reactstrap';
import Tomato from '../images/tomato.svg';
import Grape from '../images/grape.svg';
import Pineapple from '../images/pineapple.svg';
import Cart from './Cart';

const containerStyle = {
  textAlign: 'center'
};

const colStyle = {
  border: '1px solid black',
  textAlign: 'center'
};

class Content extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, name: 'Tomato', value: 0, image: Tomato },
        { id: 2, name: 'Grape', value: 0, image: Grape },
        { id: 3, name: 'Pineapple', value: 0, image: Pineapple }
      ],
      cart: []
    };
  }

  handleAdd = id => {
    const products = this.state.products.filter(product => {
      return product.id === id;
    });

    const cart = this.state.cart.concat(products[0]);
    this.setState({ cart });
  };

  handleIncrement = cart => {
    const carts = [...this.state.cart];
    const index = carts.indexOf(cart);
    carts[index] = { ...cart };
    carts[index].value++;
    this.setState({ cart: carts });
  };

  handleDelete = id => {
    const carts = this.state.cart.filter(product => {
      return product.id !== id;
    });
    this.setState({ cart: carts });
  };

  render() {
    return (
      <Container style={containerStyle}>
        <Row>
          <Col style={colStyle}>
            <h1>Products</h1>
            <Products
              products={this.state.products}
              handleAdd={this.handleAdd}
            />
          </Col>
        </Row>
        <Row>
          <Col style={colStyle}>
            <h1>Your Cart</h1>
            <Cart
              cart={this.state.cart}
              handleIncrement={this.handleIncrement}
              handleDelete={this.handleDelete}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
