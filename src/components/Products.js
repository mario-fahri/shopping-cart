import React, { Component } from 'react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardBody
} from 'reactstrap'

class Products extends Component {
  render() {
    return (
      <CardDeck>
        {this.props.products.map(product => {
          return (
            <Card key={product.id}>
              <CardImg
                top
                width="50%"
                height="50%"
                src={product.image}
                alt={product.name}
              />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <Button
                  onClick={() => {
                    this.props.handleAdd(product.id)
                  }}
                  color="primary"
                >
                  Add
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </CardDeck>
    )
  }
}

export default Products
