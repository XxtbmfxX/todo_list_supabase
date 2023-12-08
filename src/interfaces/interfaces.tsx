
// Proveedor de contexto que envuelve a la aplicación


// Definir el tipo para los datos del usuario
interface UserContextProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}

// Definir el tipo para los datos de usuario
interface UserData {
  id: string | undefined;
  email: string | undefined ;
  avatar_url: string | undefined; 
  // Agregar otros campos según tus necesidades
}
