import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <h1>Todos los derechos reservados &copy; ({this.props.datos.visitas}) visitas </h1>
                <h2>{this.props.datos.visitas}</h2>
            </div>
        )
    }
}
