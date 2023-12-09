
// Proveedor de contexto que envuelve a la aplicación


// Definir el tipo para los datos del usuario
interface UserContextProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  userTodos: Todo[] | null;
  setUserTodos:React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

// Definir el tipo para los datos de usuario
interface UserData {
  id: string | undefined;
  email: string | undefined ;
  avatar_url: string | undefined; 
  username: string | undefined;
  // Agregar otros campos según tus necesidades
}


interface Todo {
  id: string | null;
  user_id: string | null,
  task: string | null,
  is_complete: boolean | null,
  inserted_at: string | null

}