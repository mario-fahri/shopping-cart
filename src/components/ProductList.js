import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.productList.map(list => {
          return (
            <p>
              {list.name} {list.price}
            </p>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
