import React from 'react'
import '../Estilos/productos.css'

function Button(props) {
    return (
        <button className="btn-red" onClick={props.click}>
            {props.texto}
        </button>
    )
}

export default Button
