// Por ejemplo, en un componente
import React, { useEffect, useState } from 'react';
import { GetTodos } from '../api/GetTodos';

const TodoList: React.FC = () => {
  const [tareas, setTareas] = useState<Todo[] | null>(null);

  const fetchTareas = async () => {
    try {
      const tareasData = await GetTodos();
      setTareas(tareasData);
    } catch (error) {
      console.error('Error al obtener las tareas:', error.message);
    }
  };


  useEffect(() => {
   
    fetchTareas();
  }, []); // Se ejecutará una vez al montar el componente

  return (
    <div>
      <h2>Listado de Tareas</h2>
      {tareas ? (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              {tarea.id}
                <h2>{tarea.task}</h2>
              </li>
            
          ))}
        </ul>
      ) : (
        <p>No se encontraron tareas.</p>
      )}
    </div>
  );
};

export default TodoList;
