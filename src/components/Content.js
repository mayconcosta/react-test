import React, { Component } from 'react';
import List from "./list/List"

class Content extends Component {
  render() {

    let itemList = [
      { name: "Arroz", value: 12.00, quantity: 1 },
      { name: "Feijão", value: 10.00, quantity: 4 },
      { name: "Macarrão", value: 3.99, quantity: 6 },
      { name: "Óleo", value: 3.49, quantity: 2 },
      { name: "Sal", value: 1.99, quantity: 1 },
      { name: "Leite", value: 2.48, quantity: 12 },
      { name: "Detergente", value: 1.05, quantity: 5 }
    ]

    return (
      <div className="content">
        <div>
          <form id="formulario">
            <label>Item:</label><input id="item" type="text" />
            <label>Valor:</label><input id="valor" type="text" />
            <label>Quantidade:</label><input id="quantidade" type="number" />
            <button type="submit">Adicionar</button>
          </form>
        </div>
        <List items={itemList}/>
      </div>
    )
  }
}

export default Content;
