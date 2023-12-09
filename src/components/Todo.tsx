import { useUser } from "../Contexto/UserContext";
import { DeleteTodo } from "../api/DeleteTodo";

const Todo = ({tarea}) => {

  const {userTodos, setUserTodos} = useUser()

  const deleteTask = async () => {
    const confirmDelete = window.confirm('¿Está seguro de eliminar la tarea?');

    if (confirmDelete) {
      try {
        await DeleteTodo(tarea.id);

        // Actualizar el estado después de eliminar la tarea
        if (userTodos) {
          const updatedTodos = userTodos.filter((todo) => todo.id !== tarea.id);
          setUserTodos(updatedTodos);
        }
      } catch (error) {
        console.error('Error al eliminar tarea:', error.message);
      }
    }
  };

  return (
    <li
      key={tarea.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <span>{tarea.id}</span>
      <h2
        style={{
          fontSize: "20px",
        }}
      >
        {tarea.task}
      </h2>
      <button 
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          justifySelf: "end"
        }}

        onClick={deleteTask}
      >
        ✖️
      </button>
    </li>
  );
}

export default Todo