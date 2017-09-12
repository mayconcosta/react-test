import React, { Component } from 'react';

class Item extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  calculateTotal(props) {
    let result = parseFloat(props.price) * parseFloat(props.quantity)
    return result.toFixed(2)
  }

  handleClick(e) {
    this.props.deleteItem(this.props.index)
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>R$ {this.props.price}</td>
        <td>{this.props.quantity}</td>
        <td>R$ {this.calculateTotal(this.props)}</td>
        <td><button className="btn btn-sm btn-danger" onClick={this.handleClick}>Excluir</button></td>
      </tr>
    )
  }
}

export default Item;