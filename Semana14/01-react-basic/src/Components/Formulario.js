import React, { Component } from 'react'

export default class Formulario extends Component {

    constructor(props){
        super(props);
        //creando referencias
        this.nombreRef = React.createRef();
        this.precioRef = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        //console.log('submit del formulario');
        //console.log(this.nombreRef.current.value);
        let objProducto = {
            nombre: this.nombreRef.current.value,
            precio: this.precioRef.current.value
        }
        //console.log(objProducto);
        this.props.agregarProducto(objProducto);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>
                    <label>Nombre del Producto: </label>
                    <input type="text" ref={this.nombreRef}/>
                </p>

                <p>
                    <label>Precio del Producto: </label>
                    <input type="number" ref={this.precioRef}/>
                </p>
                
                <p>
                    <button type="submit">Agregar Producto</button>
                </p>
                
            </form>
        )
    }
}
