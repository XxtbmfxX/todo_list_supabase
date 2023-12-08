import { PostgrestSingleResponse, Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useUser } from '../Contexto/UserContext';

import {useGetUser} from '../api/GetUser'
import TodoList from '../components/TodoList';

interface MainPageProps {
    session: Session | null; // Puedes ajustar esto según tus necesidades
  }
  

 const MainPage: React.FC<MainPageProps> = ({session}) => {

    const {userData, setUserData } = useUser()

    const userId = session?.user.id
    
    
  useEffect(() => {
    if (userId) {
      useGetUser(userId)
        .then((usuario) => {
            setUserData(usuario);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [userId]);


  console.log(userData)

  return (
    <body>
        <h1> {userData?.email} </h1>
        <TodoList/>
    </body>
  );
}


export default MainPage