// Definir el tipo para los datos del usuario
export interface UserData {
    name: string;
    isAuthenticated: boolean;
    tasks: string[];
  }
  
  // Definir el tipo para el contexto del usuario
  export interface UserContextProps {
    user: UserData;
    login: (name: string) => void;
    logout: () => void;
  }