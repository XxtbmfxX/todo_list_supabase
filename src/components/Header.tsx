import React from 'react'
import { useUser } from '../Contexto/UserContext';

const Header: React.FC = () => {
    const { logout } = useUser();

  return (
    <header className="Header" >
        <h1>To-Do</h1>
        <div className="Burger">
            ---
            <div>
                <button onClick={logout} >Logg Out</button>
            </div>
        </div>
    </header>
  )
}

export default Header