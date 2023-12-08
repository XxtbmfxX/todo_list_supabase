// TemaContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

// Definir el tipo para el tema
type Theme = 'light' | 'dark';

// Definir el tipo para el contexto
interface MiContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Crear el contexto con un valor inicial
const MiContext = createContext<MiContextProps | undefined>(undefined);

// Proveedor de contexto que envuelve a la aplicación
export const MiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado del tema
  const [theme, setTheme] = React.useState<Theme>('light');

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Proporcionar el contexto con el valor del tema y la función para cambiar el tema
  const contextValue: MiContextProps = {
    theme,
    toggleTheme,
  };

  return (
    <MiContext.Provider value={contextValue}>
      {children}
    </MiContext.Provider>
  );
};

// Hook personalizado para utilizar el contexto
export const useTheme = () => {
  const context = useContext(MiContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un MiProvider');
  }
  return context;
};
