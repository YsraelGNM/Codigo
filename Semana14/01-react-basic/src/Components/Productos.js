import React, { Component } from 'react'
import Producto from './Producto';
import Button from '../ui/Button.js';
import Formulario from './Formulario';

export default class Productos extends Component {

    constructor(props){
        super(props);
        console.log('constructor');
        
        //El state, es un component que sirve para guardar datos.
        // El state, solo se inicializa una vez.
        this.state = {
            fecha: new Date().getFullYear(),
            productos: this.props.productos
        };
    }

    componentDidMount(){
        //Funcion que se ejecuta despues de que el componente ha renderizado su vista.
        //Ejemplo: ajax, apis, etc.
        console.log('componendidmount');
        //setState es una funcion que recibe como parametro
        //el nuevo valor del objeto state en forma de un JSON.
        setTimeout(() => {
            this.setState({
                fecha:2020
            })    
        }, 3000);

        let {productos} = this.state;
        productos.push({
            nombre:'Teclado',
            precio: 30
        })
        
        setTimeout(() => {
            this.setState({
                productos:productos
            })    
        }, 3000);

    }

    addProduct= ()=>{
        console.log('AddProduct ejecutado');
        let {productos} = this.state;
        productos.push({
            nombre:'CPU',
            precio: 4000
        })
        
        this.setState({
            productos:productos
        })
    }

    componentWillUpdate(){
        //Funcion que se ejecuta antes de que el state sea modificado
        console.log('cokmponentwillupdate');
        
    }

    addProductDeFormulario = (objProducto) => {
        console.log(objProducto);
        let {productos} = this.state;
        productos.push(objProducto)
        
        this.setState({
            productos:productos
        })
    }

    render() {
        console.log('render');
        //let {productos} = this.props;
        let {productos} = this.state;

        return (
            <div>
                <h1>Lista de Productos</h1>
                    {
                        productos.map((prod ,i)=> {
                            return <Producto producto={prod} key={i}/>        
                        })
                    }
                    <Button texto="Texto" click={this.addProduct}></Button>
                    {/* {productos.map((prod,i) => <Producto producto={prod} key={i}/>)}*/}   

                    <hr></hr>
                    <h4>Formulario</h4>
                    <Formulario agregarProducto = {this.addProductDeFormulario}/>
            </div>
        )
    }
}
