import React, { createContext, useContext, ReactNode, useState, useEffect} from 'react';



interface UserProviderProps {
  children: ReactNode;
}

// Crear el contexto con un valor inicial
const UserContext = createContext<UserContextProps | undefined>(undefined);



export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // Estado del usuario
  const [number, setNumber] = useState<number>(0);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Proporcionar el contexto con el valor del usuario y las funciones para iniciar/cerrar sesión
  const contextValue: UserContextProps = {
    number,
    setNumber,
    userData, 
    setUserData
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para utilizar el contexto del usuario
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser utilizado dentro de un UserProvider');
  }
  return context;
};
