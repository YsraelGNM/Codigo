import React from 'react';
import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer';
import Productos from './Components/Productos';

function App() {
  let titulo = "Titulo de mi App";
  let datos = {
    titulo:"Titulo de datos",
    visitas:852
  }
  let productos = [{
    nombre:'Laptop',
    precio:7000
  },
  {
    nombre:'Mouse',
    precio:40
  }]
  return (
    <div>
      {titulo}
      <Header titulo={titulo + " en el Header"}
              SubTitulo={"Slogan de la App"}
              datos={datos}/>
      <hr></hr>
       <Productos productos = {productos}/>
      <button>Click</button>
      <Footer datos={datos}/>
    </div>
  );
}

export default App;
