import React, { Component } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario';
import ListaGastos from './components/ListaGastos';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      gastos:[],
      presupuesto:1000,
      resto:1000
    }
  }


  agregarGasto = (objGasto) => {
    //console.log(objGasto);
    let {gastos} = this.state;
    gastos.push(objGasto);
    this.setState({
      gastos:gastos,
      //gastos  //Tambien se puede usar de frente la variable porque se llama igual que el JSON
      resto: this.state.resto - objGasto.monto
    })
  
  }


  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Formulario agregarGasto = {this.agregarGasto}></Formulario>
            </div>
            <div className="col-md-6">
              <ListaGastos gastos = {this.state.gastos} presupuesto = {this.state.presupuesto} resto = {this.state.resto}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
