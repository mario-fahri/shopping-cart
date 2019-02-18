import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';

const divStyle = {
  marginBottom: '10px'
};

const badgeStyle = {
  fontSize: '16px'
};

const imgStyle = {
  height: '32px',
  width: '32px'
};

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.cart.map((product, index) => {
          return (
            <div style={divStyle} key={index}>
              <img style={imgStyle} src={product.image} />
              <span className="m-2">{product.name}</span>
              <Button
                color="secondary"
                size="sm"
                onClick={() => this.props.handleIncrement(product)}
              >
                +
              </Button>{' '}
              <span className="m-2">Quantity:</span>
              <Badge style={badgeStyle} color="warning" className="m-2">
                {product.value}
              </Badge>
              <Button
                color="danger"
                size="sm"
                onClick={() => this.props.handleDelete(product.id)}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Cart;
