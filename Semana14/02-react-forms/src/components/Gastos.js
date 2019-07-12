import React, { Component } from 'react'

export default class Gastos extends Component {
    render() {
        return (
            <div className="list-group">
            <a className="list-group-item list-group-item-action flex-column align-items-start" href="#">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Gasto</h5>
                <small>{this.props.gasto.id}</small>
                </div>
                <p className="mb-1">{this.props.gasto.descripcion}</p>
                <p className="mb-1">{this.props.gasto.monto}</p>
                <small>{this.props.gasto.fecha}</small>
            </a>
            </div>      
        )
    }
}


