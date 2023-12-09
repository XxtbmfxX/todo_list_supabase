import React, { useState } from 'react'
import { useUser } from '../Contexto/UserContext';
import { supabase } from '../supabaseClient';



const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {userData, setUserData} = useUser()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleLogout = async (): Promise<void> => {
    try {
      const { error }: { error: Error | null } = await supabase.auth.signOut();
        setUserData(null)

      if (error) {
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        console.error('Error al cerrar sesión:', error.message);
      } else {
        // Lógica después de cerrar sesión exitosamente
      }
    } catch (error) {
      // Manejar errores de manera general
      console.error('Error inesperado al cerrar sesión:', error);
    }
  };



  return (
    <header className="Header" style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      padding: "20px",
      color:"#2D4EC1",
      textAlign: "center",
      position: "relative",
      marginBottom: "100px"
    }} >
        <h1>To-Do</h1>
        {
          userData && 
        <nav className="Burger" style={{
          display: "flex",
          flexDirection: "column",
          cursor:  'pointer'
        }}  onClick={toggleMenu} >

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="3" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="6" x2="21" y2="6"/>
  <line x1="3" y1="18" x2="21" y2="18"/>
</svg>

            {
                isMenuOpen &&
                <div className='LogOut' style={{
                  position: "absolute",
  right: "20px",
  top: "100px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }} >
                <button onClick={handleLogout}   style={{
                   color: "red",
                   padding: "10px",
                   background: "none",
                   cursor:  'pointer'
                }} >Logg Out</button>
                </div>
            }
        </nav>
        }
        
    </header>
  )
}

export default Header