// Por ejemplo, en un componente
import React, { useEffect, useState } from 'react';
import { GetTodos } from '../api/GetTodos';
import Todo from './Todo';
import { useUser } from '../Contexto/UserContext';



const TodoList: React.FC = () => {

  const {userTodos, setUserTodos} = useUser()

  const fetchTareas = async () => {
    try {
      const tareasData = await GetTodos();
      setUserTodos(tareasData)
    } catch (error: any) {
      console.error('Error al obtener las tareas:', error.message);
    }
  };


  useEffect(() => {
   
    fetchTareas();
  }, []); // Se ejecutará una vez al montar el componente




  return (
    <section className='ListaTodos' style={{
      display: "grid"
    }} 

     >
      {userTodos  ? (
        <ul style={{listStyle: "none"}} >
          {userTodos.map((tarea) => (
           <Todo key={tarea.id} tarea={tarea} />
            
          ))}
        </ul>
      ) : (
        <p>{"`(*>﹏<*)′"}</p>
      )}
    </section>
  );
};

export default TodoList;
