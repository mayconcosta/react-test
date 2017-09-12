import React, { Component } from 'react';
import List from "./list/List"

class Content extends Component {

  constructor(props) {
    super(props)

    const itemList = [
      { name: "Arroz", price: 12.00, quantity: 1 },
      { name: "Feijão", price: 10.00, quantity: 4 },
      { name: "Macarrão", price: 3.99, quantity: 6 },
      { name: "Óleo", price: 3.49, quantity: 2 },
      { name: "Sal", price: 1.99, quantity: 1 },
      { name: "Leite", price: 2.48, quantity: 12 },
      { name: "Detergente", price: 1.05, quantity: 5 }
    ]

    this.state = {
      items: itemList
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let newItem = {
      name: event.target.item.value,
      price: parseFloat(event.target.price.value),
      quantity: parseInt(event.target.quantity.value)
    }
    let list = this.state.items
    list.push(newItem)
    this.setState({ items: list })
    event.preventDefault()
  }

  render() {
    return (
      <div className="content">
        <div>
          <form id="formulario" onSubmit={this.handleSubmit}>
            <div className="row form-group">
              <div className="col-md-4">
                <label className="form-label">Item:</label>
                <input id="item" type="text" name="item" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Pre&ccedil;o:</label>
                <input className="form-control" id="preco" type="text" name="price" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Quantidade:</label>
                <input className="form-control" id="quantidade" type="number" name="quantity" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-primary">Adicionar</button>
              </div>
            </div>
          </form>
      </div>
      <hr/>
      <List items={this.state.items} />
      </div >
    )
  }
}

export default Content;
