import React from 'react'

function Header(props) {
    console.log(props);
    
    return (
        <div>
            <h1>Titulo de mi Primera Aplicacion en REACT</h1>
            <h2>{props.Titulo}</h2>
            <h3>{props.SubTitulo}</h3>
            <h4>{props.datos.titulo}</h4>
            <h5>{props.datos.visitas}</h5>
        </div>
    )
}

export default Header
