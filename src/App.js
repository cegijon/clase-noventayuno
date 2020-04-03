import React, { useState } from 'react';
import './App.css';

const App = () => {

  const ElementoDeLaLista = ({ tarea, i }) => (
    <li>
      {tarea}
      <button onClick={() => handleClick(i)}>x</button>
    </li>
  )

  const [tareas, setTareas] = useState([
    "Conectarse a la clase",
    "No trabajar durante la clase",
    "Halagar los fondos creativos de la profesora",
    "Ganarse el pan de cada dia",
    "Ganar el bingo",
    "Salvar el mundo",
  ])

  const handleClick = indiceTareaABorrar => {
    const tareasFiltradas = tareas.filter((tarea, i) => i !== indiceTareaABorrar)
    setTareas(tareasFiltradas)
  }

  return (
    <div className="app">
      <ul>
        {tareas.map((tarea, i) => <ElementoDeLaLista key={i} tarea={tarea} i={i} />)}
      </ul>
    </div>
  );
}

export default App;
