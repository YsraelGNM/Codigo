import React from 'react'

export default function Comments(props) {
    return (
        <div>
            <p>Usuario: {props.usuario.usu_email}</p>
            <p>Nombre: {props.usuario.usu_nom}</p>
            <p>Comentario: {props.usuario.comment}</p>
            <hr/>
        </div>
    )
}
