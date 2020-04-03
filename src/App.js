import React, { useState } from 'react';
import './App.css';

const App = () => {

  const ElementoDeLaLista = ({ tarea, i }) => (
    <li className={tarea.completada ? 'completada' : ''}>
      {tarea.nombre}
      <button onClick={() => handleEraseClick(i)}>x</button>
      <button onClick={() => handleCompleteClick(i)}>Marcar como completada</button>
    </li>
  )

  const [tareas, setTareas] = useState([
    { nombre: "Conectarse a la clase", completada: true },
    { nombre: "No trabajar durante la clase", completada: false },
    { nombre: "Halagar los fondos creativos de la profesora", completada: true },
    { nombre: "Ganarse el pan de cada dia", completada: true },
    { nombre: "Ganar el bingo", completada: false },
    { nombre: "Salvar el mundo", completada: true },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  const handleCompleteClick = indiceTareaACompletar => {
    const tareasModificadas = tareas.map((tarea, i) => {
      tarea.completada = i === indiceTareaACompletar ? !tarea.completada : tarea.completada
      return tarea
    })
    setTareas(tareasModificadas)
  }

  const handleEraseClick = indiceTareaABorrar => {
    const tareasFiltradas = tareas.filter((tarea, i) => i !== indiceTareaABorrar)
    setTareas(tareasFiltradas)
  }

  const handleChange = e => {
    setNuevaTarea(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const listaDeTareas = tareas
    const objeto = {
      nombre: nuevaTarea,
      completada: false,
    }
    listaDeTareas.push(objeto)
    setNuevaTarea(listaDeTareas)
  }

  return (
    <div className="app">
      <ul>
        {tareas.map((tarea, i) => <ElementoDeLaLista key={i} tarea={tarea} i={i} />)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Agregar una tarea..." onChange={handleChange} />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}

export default App;