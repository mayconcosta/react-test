import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item:"",
            value:"",
            quantity:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let item = event.target.item.value
        let value = event.target.value.value
        let quantity = event.target.quantity.value

        this.setState({
            item:item,
            value:value,
            quantity:quantity
        })
        event.preventDefault()
    }

    render() {
        return (
            <form id="formulario" onSubmit={this.handleSubmit}>
                <label>Item:</label><input id="item" type="text" name="item" />
                <label>Valor:</label><input id="valor" type="text" name="value" />
                <label>Quantidade:</label><input id="quantidade" type="number" name="quantity" />
                <button type="submit">Adicionar</button>
            </form>
        )
    }
}

export default Form;