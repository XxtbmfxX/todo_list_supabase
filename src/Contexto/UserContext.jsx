import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';


// Crear el contexto con un valor inicial
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Proveedor de contexto que envuelve a la aplicación
export const UserProvider = ({ children }) => {
  // Estado del usuario
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  // Proporcionar el contexto con el valor del usuario y las funciones para iniciar/cerrar sesión
  const contextValue = {
    session,
    setSession
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
