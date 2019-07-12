import React, { Component } from 'react'
import Gastos from './Gastos';
import Presupuesto from './Presupuesto';
import Resto from './Resto';

export default class ListaGastos extends Component {

    render() {
        let {gastos} = this.props;
        console.log(gastos);
        
        return (
            <div className="list-group mt-2">
                <h3>Lista de Gastos a Rendir</h3>
                <hr/>
                <Presupuesto presupuesto = {this.props.presupuesto}/>
                <Resto resto = {this.props.resto} presupuesto = {this.props.presupuesto} />
                {
                    gastos.map(gasto=><Gastos key={gasto.id} gasto = {gasto}/>)
                }
            </div>
        )
    }
}
