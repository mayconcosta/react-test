import React, { Component } from 'react';

class Item extends Component {

  calculateTotal(props) {
    let result = parseFloat(props.value) * parseFloat(props.quantity);
    return result.toFixed(2);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>R$ {this.props.value}</td>
        <td>{this.props.quantity}</td>
        <td>R$ {this.calculateTotal(this.props)}</td>
        <td><button>Excluir</button></td>
      </tr>
    )
  }
}

export default Item;