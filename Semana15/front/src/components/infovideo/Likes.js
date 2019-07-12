import React from 'react'

export default function Likes(props) {
    return (
        <div>
            <p>Usuario: {props.usuario.usu_email}</p>
            <p>Nombre: {props.usuario.usu_nom}</p>
            <hr/>
        </div>
    )
}
