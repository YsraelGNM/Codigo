import React, { Component } from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types'

export default class Formulario extends Component {

    constructor(props){
        super(props)
        this.descripcionRef = React.createRef();
        this.montoRef = React.createRef();
        this.fechaRef = React.createRef();
        this.state = {error:false}
    }

    enviarGasto = (e)=>{
        e.preventDefault();

        if (this.descripcionRef.current.value === "" ||
            this.montoRef.current.value === "" ||
            this.fechaRef.current.value === ""){
                this.setState({
                    error:true
                })
                return;
            }else{
                this.setState({
                    error:false
                })
            }

        let objGasto = {
            id: uuid(),
            descripcion: this.descripcionRef.current.value,
            monto: this.montoRef.current.value,
            fecha: this.fechaRef.current.value
        }
        //console.log(objGasto);
        this.props.agregarGasto(objGasto);
        e.currentTarget.reset();
    }



    render() {
        return (
            <form onSubmit={this.enviarGasto}>
            <fieldset>
                <legend>Gastos y Presupuestos</legend>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="staticEmail">Email</label>
                <div className="col-sm-10">
                    <input className="form-control-plaintext" id="staticEmail" type="text" readOnly defaultValue="email@example.com"/>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Descripcion del Gasto</label>
                <input className="form-control" 
                        id="exampleInputEmail1" 
                        type="text" 
                        placeholder="Ejemplo: Comida"
                        ref = {this.descripcionRef}/>
                </div>

                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Monto del Gasto</label>
                <input className="form-control" id="exampleInputPassword1" type="number" placeholder="Ejemplo: 100.00" ref = {this.montoRef}/>
                </div>
                
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Fecha del Gasto</label>
                <input className="form-control" id="fechaDelGasto" type="date" placeholder="Ejemplo: 100.00" ref = {this.fechaRef}/>
                </div>
            
                <button className="btn btn-primary" type="submit">Crear Gasto</button>
            </fieldset>
            {this.state.error ?
                <div className="alert alert-danger mt-5 text-center">
                    Todos los campos son obligatorios
                </div>
                : null
            }
            
            </form>
        )
    }
}


Formulario.propTypes = {
    agregargasto: PropTypes.func.isRequired,
}