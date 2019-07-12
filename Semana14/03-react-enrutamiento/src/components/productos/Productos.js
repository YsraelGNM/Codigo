import React, { Component } from 'react'

export default class Productos extends Component {

    constructor(props){
        super(props)
        this.state = {
            load:true
        }
    }
    componentDidMount(){
        fetch('https://picsum.photos/v2/list').then(response=>{
            return response.json();
        }).then(data=>{
            console.log(data);
            
        })
    }

    render() {

            let {load} = this.state
        if(!load){
            return (<div>cargando........</div>)
        }
        return (
            <div>
                cargado =)
            </div>
        )

    }
}
