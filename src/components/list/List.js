import React, { Component } from 'react';
import Item from "./Item"

class List extends Component {

  calculateSummary(list) {
    let summary = {
      listSize:0,
      numItems:0,
      unitSum:0,
      totalSum:0
    }
    
    if (list) {
      list.forEach((e) => {
        summary.listSize++
        summary.numItems += e.quantity
        summary.unitSum += e.price
        summary.totalSum += (e.price * e.quantity)
      })
    }
    return summary
  }

  render() {

    let itemList = this.props.items;

    let allItems = itemList.map((it) => {
      return <Item name={it.name} price={it.price.toFixed(2)} quantity={it.quantity} />
    })

    let summary = this.calculateSummary(itemList)

    return (
      <div>
        <table id="lista-compras">
          <thead>
            <tr>
              <th>Item</th>
              <th>Valor unit&aacute;rio</th>
              <th>Quantidade</th>
              <th>Valor total</th>
              <th>A&ccedil;&atilde;o</th>
            </tr>
          </thead>
          <tbody>
            {allItems}
          </tbody>
          <tfoot>
            <tr className="foot-header">
              <td>N&uacute;mero de itens</td>
              <td>Total unit&aacute;rio</td>
              <td>Quantidade de itens</td>
              <td>Valor total</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>{summary.listSize}</td>
              <td>R$ {summary.unitSum.toFixed(2)}</td>
              <td>{summary.numItems}</td>
              <td>R$ {summary.totalSum.toFixed(2)}</td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default List;
