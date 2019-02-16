import React, { Component } from 'react';
import styled from 'styled-components';

const ProductImage = styled.img`
  height: 32px;
  width: 32px;
`;

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.productList.map((list, index) => {
          return (
            <div key={index}>
              <ProductImage src={list.image} alt="" />
              <div>
                <p>{list.name.toUpperCase()}</p>
                <p>Price: {list.price} Gold</p>
                <button
                  onClick={() => {
                    this.props.addProduct(list.id);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
