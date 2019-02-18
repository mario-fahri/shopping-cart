import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Products from './Products'
import Cart from './Cart'

import Tomato from '../images/tomato.svg'
import Grape from '../images/grape.svg'
import Pineapple from '../images/pineapple.svg'

const containerStyle = {
  textAlign: 'center'
}

const colStyle = {
  border: '1px solid black',
  textAlign: 'center'
}

class Content extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        { id: 1, name: 'Tomato', quantity: 0, image: Tomato },
        { id: 2, name: 'Grape', quantity: 0, image: Grape },
        { id: 3, name: 'Pineapple', quantity: 0, image: Pineapple }
      ],
      cart: []
    }
  }

  handleAdd = id => {
    const product = this.state.products.find(item => {
      return item.id === id
    })
    const cart = this.state.cart.concat(product)
    this.setState({ cart })
  }

  handleIncrement = id => {
    // const carts = [...this.state.cart]
    // const index = carts.indexOf(product)
    // carts[index] = { ...product }
    // carts[index].quantity++

    const newCart = this.state.cart.filter(item => {
      if (item.id === id) {
        item.quantity++
        return item
      } else return item
    })

    this.setState({ cart: newCart })
  }

  handleDelete = id => {
    const carts = this.state.cart.filter(product => {
      return product.id !== id
    })
    this.setState({ cart: carts })
  }

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
    )
  }
}

export default Content
